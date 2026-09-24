"use client";

import { Box } from "@mui/material";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";
import TransitionLogo, { TransitionLogoHandle } from "./TransitionLogo";
import { setContentHeld } from "./pageReveal";

const COVER_DURATION = 0.6;
const REVEAL_DURATION = 0.7;
const CURTAIN_EASE = "power3.inOut";
// Minimum time the logo stays visible, so fast navigations still read as intentional.
const MIN_HOLD_MS = 400;
// Max time to wait for above-the-fold images of the new page.
const IMAGES_TIMEOUT_MS = 1500;
// Safety net if the route never changes (e.g. navigation error).
const FALLBACK_REVEAL_MS = 8000;

type Phase = "idle" | "covering" | "covered" | "revealing";

function getInternalHref(e: MouseEvent): string | null {
  if (
    e.defaultPrevented ||
    e.button !== 0 ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey ||
    e.altKey
  ) {
    return null;
  }

  const anchor = (e.target as Element | null)?.closest?.("a");
  if (!anchor || !anchor.href) return null;
  if (anchor.target && anchor.target !== "_self") return null;
  if (anchor.hasAttribute("download")) return null;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  // Same page (only hash/query differs) — let the browser/Next handle it.
  if (url.pathname === window.location.pathname) return null;

  return url.pathname + url.search + url.hash;
}

const nextFrame = () =>
  new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

// Resolves once the new page has painted and its eager images have loaded.
async function waitForPageReady(root: Element | null) {
  await nextFrame();
  await nextFrame();

  const images = Array.from(root?.querySelectorAll("img") ?? []).filter(
    (img) => !img.complete && img.loading !== "lazy",
  );
  if (images.length === 0) return;

  await Promise.race([
    Promise.all(
      images.map(
        (img) =>
          new Promise<void>((resolve) => {
            img.addEventListener("load", () => resolve(), { once: true });
            img.addEventListener("error", () => resolve(), { once: true });
          }),
      ),
    ),
    new Promise<void>((resolve) => setTimeout(resolve, IMAGES_TIMEOUT_MS)),
  ]);
}

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();

  const curtainRef = useRef<HTMLDivElement>(null);
  const logoLayerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const logoAnimRef = useRef<TransitionLogoHandle>(null);
  const phaseRef = useRef<Phase>("idle");
  const coveredAtRef = useRef(0);
  const queuedHrefRef = useRef<string | null>(null);
  const fallbackRef = useRef<number | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Initial state is owned by gsap only — mixing CSS transforms with
  // xPercent makes gsap add both offsets and the curtain stops halfway.
  useLayoutEffect(() => {
    gsap.set(curtainRef.current, { xPercent: -100, x: 0, autoAlpha: 0 });
    gsap.set(logoLayerRef.current, { autoAlpha: 0 });
  }, []);

  // Entrance animations of the new page wait until the curtain is halfway gone:
  // CSS ones are paused via [data-page-hold], JS ones use usePageRevealed().
  const holdContent = () => {
    setContentHeld(true);
    document.querySelector("[data-page-content]")?.setAttribute("data-page-hold", "");
  };

  const releaseContent = () => {
    document.querySelector("[data-page-content]")?.removeAttribute("data-page-hold");
    setContentHeld(false);
  };

  const clearFallback = () => {
    if (fallbackRef.current) window.clearTimeout(fallbackRef.current);
    fallbackRef.current = null;
  };

  const reveal = async () => {
    if (phaseRef.current !== "covered") return;
    phaseRef.current = "revealing";
    clearFallback();

    await waitForPageReady(curtainRef.current?.parentElement ?? null);
    const hold = Math.max(0, MIN_HOLD_MS - (Date.now() - coveredAtRef.current));
    await new Promise((resolve) => setTimeout(resolve, hold));
    // Let the rings complete their circle before the logo fades out.
    await logoAnimRef.current?.finish();

    timelineRef.current?.kill();
    timelineRef.current = gsap
      .timeline({
        onComplete: () => {
          gsap.set(curtainRef.current, { xPercent: -100, autoAlpha: 0 });
          gsap.set(logoLayerRef.current, { autoAlpha: 0 });
          phaseRef.current = "idle";

          const queued = queuedHrefRef.current;
          queuedHrefRef.current = null;
          if (queued && new URL(queued, window.location.href).pathname !== window.location.pathname) {
            cover(queued);
          }
        },
      })
      .to(logoRef.current, {
        autoAlpha: 0,
        duration: 0.35,
        ease: "power1.in",
      })
      .call(() => logoAnimRef.current?.stop())
      .set(logoLayerRef.current, { autoAlpha: 0 })
      .to(
        curtainRef.current,
        { xPercent: 100, duration: REVEAL_DURATION, ease: CURTAIN_EASE },
        "-=0.15",
      )
      .call(releaseContent, [], `<${REVEAL_DURATION / 2}`);
  };

  const cover = (href: string) => {
    phaseRef.current = "covering";
    router.prefetch(href);

    timelineRef.current?.kill();
    timelineRef.current = gsap
      .timeline({
        onComplete: () => {
          phaseRef.current = "covered";
          coveredAtRef.current = Date.now();
          holdContent();
          fallbackRef.current = window.setTimeout(() => {
            void reveal();
          }, FALLBACK_REVEAL_MS);
          router.push(href);
        },
      })
      .set(curtainRef.current, { xPercent: -100, x: 0, autoAlpha: 1 })
      .set(logoLayerRef.current, { autoAlpha: 1 })
      .set(logoRef.current, { autoAlpha: 0 })
      .to(curtainRef.current, {
        xPercent: 0,
        duration: COVER_DURATION,
        ease: CURTAIN_EASE,
      })
      // Logo fades in on its own layer once the curtain edge has passed the center.
      .call(() => logoAnimRef.current?.play(), [], COVER_DURATION * 0.55)
      .to(
        logoRef.current,
        { autoAlpha: 1, duration: 0.4, ease: "power1.out" },
        COVER_DURATION * 0.55,
      );
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const href = getInternalHref(e);
      if (!href) return;
      // Stops Next <Link> from navigating immediately; we push after the curtain closes.
      e.preventDefault();

      if (phaseRef.current === "idle") cover(href);
      else if (phaseRef.current === "revealing") queuedHrefRef.current = href;
    };

    // Capture phase runs before React's handlers, so <Link> sees defaultPrevented.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (phaseRef.current === "covered") void reveal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(
    () => () => {
      timelineRef.current?.kill();
      clearFallback();
      releaseContent();
    },
    [],
  );

  const layerProps = {
    position: { xs: "fixed", md: "absolute" },
    top: 0,
    left: 0,
    width: "100%",
    height: { xs: "100vh", md: "100%" },
  } as const;

  return (
    <>
      <Box
        ref={curtainRef}
        aria-hidden
        {...layerProps}
        zIndex={1000}
        bgcolor="background.default"
        sx={{ visibility: "hidden", willChange: "transform" }}
      />
      <Box
        ref={logoLayerRef}
        aria-hidden
        {...layerProps}
        zIndex={1001}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ visibility: "hidden", pointerEvents: "none" }}
      >
        <Box
          ref={logoRef}
          width={{ xs: "28vw", md: "min(14vw, 22vh)" }}
          maxWidth={180}
          sx={{ aspectRatio: "1/1", opacity: 0 }}
        >
          <TransitionLogo ref={logoAnimRef} />
        </Box>
      </Box>
    </>
  );
}
