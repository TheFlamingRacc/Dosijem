"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import { setInPageNavigation } from "@/app/components/PageTransition/inPageNavigation";

export type StageSection = "home" | "about";

// Wheel distance (px) for the whole home → about move.
const WHEEL_DISTANCE = 1400;
// How fast the rendered progress follows the wheel, per 60fps frame.
const SMOOTHING = 0.1;
// Part of an element's move during which it fades (leaving: the end, arriving: the start).
const FADE_SHARE = 0.7;
// Wheel-up right after scrolling the about page to its top doesn't leave it yet
// (trackpad inertia would otherwise throw the user back to home).
const SCROLL_GUARD_MS = 200;

type Props = {
  lang: string;
  initial: StageSection;
  titles: Record<StageSection, string>;
  home: ReactNode;
  about: ReactNode;
  footer: ReactNode;
};

// Desktop only: home and about are one horizontal stage switched by the wheel.
// Every [data-stage-item] (see StageItem) moves on its own slice of the
// progress, so elements leave/arrive at different moments and speeds.
// Below lg only the route's own section renders, exactly as before.
export default function Stage({
  lang,
  initial,
  titles,
  home,
  about,
  footer,
}: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const pathname = usePathname();
  const router = useRouter();

  const stageRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const syncRef = useRef<((section: StageSection) => void) | null>(null);

  const sectionOf = (path: string): StageSection | null => {
    if (path === `/${lang}/home`) return "home";
    if (path === `/${lang}/about`) return "about";
    return null;
  };

  useLayoutEffect(() => {
    if (!isDesktop) return;
    const stage = stageRef.current!;
    const homeEl = homeRef.current!;
    const aboutEl = aboutRef.current!;
    const container = stage.closest<HTMLElement>("[data-page-content]");
    if (!container) return;

    const width = () => container.clientWidth;
    const itemsOf = (root: HTMLElement) =>
      Array.from(root.querySelectorAll<HTMLElement>("[data-stage-item]")).map(
        (el) => ({
          el,
          at: Number(el.dataset.stageAt),
          dur: Number(el.dataset.stageDur),
          dist: Number(el.dataset.stageDist),
        }),
      );

    const tl = gsap.timeline({ paused: true });
    // Leaving elements slide left and fade out; arriving ones slide in from
    // the right and fade in. Scrolling back plays the same in reverse.
    for (const { el, at, dur, dist } of itemsOf(homeEl)) {
      tl.fromTo(
        el,
        { x: 0 },
        { x: () => -width() * dist, duration: dur, ease: "power2.in" },
        at,
      ).fromTo(
        el,
        { opacity: 1 },
        { opacity: 0, duration: dur * FADE_SHARE, ease: "power1.in" },
        at + dur * (1 - FADE_SHARE),
      );
    }
    for (const { el, at, dur, dist } of itemsOf(aboutEl)) {
      tl.fromTo(
        el,
        { x: () => width() * dist },
        { x: 0, duration: dur, ease: "power2.out" },
        at,
      ).fromTo(
        el,
        { opacity: 0 },
        { opacity: 1, duration: dur * FADE_SHARE, ease: "power1.out" },
        at,
      );
    }
    // Timeline spans exactly 0..1, so progress == timeline position.
    tl.set({}, {}, 1);

    let target = sectionOf(window.location.pathname) === "about" ? 1 : 0;
    let current = target;
    let shown: StageSection = target === 1 ? "about" : "home";
    let raf = 0;
    let lastFrame = 0;
    let lastScrollAt = 0;

    const render = () => {
      tl.progress(current);
      const settledOnAbout = target === 1 && current === 1;
      // Vertical scroll only exists on the about page, once it fully arrived.
      container.style.overflowY = settledOnAbout ? "" : "hidden";
      homeEl.style.pointerEvents = current < 0.5 ? "" : "none";
      aboutEl.style.pointerEvents = current >= 0.5 ? "" : "none";

      const section: StageSection = current >= 0.5 ? "about" : "home";
      if (section !== shown) {
        shown = section;
        window.history.replaceState(null, "", `/${lang}/${section}`);
        document.title = titles[section];
      }
    };

    const tick = (now: number) => {
      const dt = lastFrame ? Math.min(now - lastFrame, 64) : 16.7;
      lastFrame = now;
      current += (target - current) * (1 - Math.pow(1 - SMOOTHING, dt / 16.7));
      if (Math.abs(target - current) < 1e-4) current = target;
      render();
      if (current === target) {
        raf = 0;
        lastFrame = 0;
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const goTo = (section: StageSection) => {
      if (section === "home" && container.scrollTop > 0) {
        container.scrollTo({ top: 0, behavior: "instant" });
      }
      target = section === "about" ? 1 : 0;
      kick();
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // pinch-zoom
      const delta =
        e.deltaY *
        (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? container.clientHeight : 1);

      if (target === 1 && current === 1) {
        // Regular vertical scrolling of the about page.
        if (delta > 0 || container.scrollTop > 0) return;
        if (performance.now() - lastScrollAt < SCROLL_GUARD_MS) return;
      }

      e.preventDefault();
      if (target === 0 && delta < 0) return;

      // Pure scrub: the stage stays wherever the wheel stops.
      target = gsap.utils.clamp(0, 1, target + delta / WHEEL_DISTANCE);
      kick();
    };

    const onScroll = () => {
      lastScrollAt = performance.now();
    };

    const layout = () => {
      stage.style.setProperty("--stage-height", `${container.clientHeight}px`);
      // Re-evaluate width-based distances and re-render at the current point.
      tl.invalidate();
      tl.progress(current < 0.5 ? 1 : 0);
      render();
    };

    layout();
    const resizeObserver = new ResizeObserver(layout);
    resizeObserver.observe(container);
    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("scroll", onScroll, { passive: true });
    setInPageNavigation((path) => {
      const section = sectionOf(path);
      if (!section) return false;
      goTo(section);
      return true;
    });
    syncRef.current = (section) => {
      if ((section === "about") !== (target >= 0.5)) goTo(section);
    };

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("scroll", onScroll);
      setInPageNavigation(null);
      syncRef.current = null;
      tl.revert();
      container.style.overflowY = "";
      homeEl.style.pointerEvents = "";
      aboutEl.style.pointerEvents = "";
      stage.style.removeProperty("--stage-height");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]);

  // Back/forward (or any other URL change) between /home and /about.
  useEffect(() => {
    const section = sectionOf(pathname);
    if (!section) return;
    if (isDesktop) {
      syncRef.current?.(section);
    } else if (section !== initial) {
      // Resized below desktop while the URL points at the other half:
      // load that route for real.
      router.replace(pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, isDesktop]);

  return (
    <Box ref={stageRef} position="relative">
      <Box
        ref={homeRef}
        sx={
          isDesktop
            ? {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "var(--stage-height, 100%)",
                zIndex: 2,
              }
            : undefined
        }
      >
        {(initial === "home" || isDesktop) && home}
      </Box>
      <Box ref={aboutRef}>{(initial === "about" || isDesktop) && about}</Box>
      {footer}
    </Box>
  );
}
