"use client";

import { Box } from "@mui/material";
import gsap from "gsap";
import { Ref, useImperativeHandle, useLayoutEffect, useRef } from "react";

export type TransitionLogoHandle = {
  play: () => void;
  // Quickly brings the rings to the fully drawn state and stops there.
  finish: () => Promise<void>;
  stop: () => void;
};

// Stroke-based redraw of /dosijem-logo.svg (same geometry and colors),
// so rings and the arrow can be drawn around like a progress bar.
const OUTER_RING = "M1341.1 591.0 A650.3 650.3 0 1 1 850.7 67.4";
const INNER_RING = "M1041.7 641.9 A346.6 346.6 0 1 1 780.3 362.8";
// Drawn from the outer end towards the center.
const ARROW = "M1161.9 234.9 L699.3 697.4";

const DRAW_EASE = "power2.inOut";

export default function TransitionLogo({
  ref,
}: {
  ref?: Ref<TransitionLogoHandle>;
}) {
  const outerRef = useRef<SVGPathElement>(null);
  const innerRef = useRef<SVGPathElement>(null);
  const arrowRef = useRef<SVGPathElement>(null);
  const loopRef = useRef<gsap.core.Timeline | null>(null);
  const finishRef = useRef<(() => void) | null>(null);

  useLayoutEffect(() => {
    const outer = outerRef.current!;
    const inner = innerRef.current!;
    const arrow = arrowRef.current!;

    // Real lengths in SVG units; hidden offset is a bit past the length
    // so the round cap doesn't leave a dot.
    const hidden = (el: SVGPathElement) => el.getTotalLength() * 1.02;
    for (const el of [outer, inner, arrow]) {
      const len = el.getTotalLength();
      gsap.set(el, {
        strokeDasharray: `${len} ${len * 2}`,
        strokeDashoffset: hidden(el),
      });
    }

    // Draw in: outer ring → inner ring → arrow (from outside to center),
    // hold, then retract in reverse order. Loops until stopped.
    loopRef.current = gsap
      .timeline({ paused: true, repeat: -1, repeatDelay: 0.2 })
      .to(outer, { strokeDashoffset: 0, duration: 1.1, ease: DRAW_EASE }, 0)
      .to(inner, { strokeDashoffset: 0, duration: 1.1, ease: DRAW_EASE }, 0.2)
      .to(arrow, { strokeDashoffset: 0, duration: 0.6, ease: DRAW_EASE }, 0.7)
      .addLabel("filled")
      // Pauses here instead of retracting once finish() was requested.
      .call(() => {
        if (!finishRef.current) return;
        loopRef.current?.pause();
        finishRef.current();
        finishRef.current = null;
      })
      .to({}, { duration: 0.3 })
      .addLabel("retract")
      .to(arrow, { strokeDashoffset: hidden(arrow), duration: 0.5, ease: DRAW_EASE })
      .to(inner, { strokeDashoffset: hidden(inner), duration: 0.9, ease: DRAW_EASE }, "<0.2")
      .to(outer, { strokeDashoffset: hidden(outer), duration: 0.9, ease: DRAW_EASE }, "<0.2");

    return () => {
      loopRef.current?.kill();
    };
  }, []);

  useImperativeHandle(ref, () => ({
    play: () => {
      finishRef.current = null;
      gsap.killTweensOf(loopRef.current);
      loopRef.current?.restart();
    },
    // Resolves once the logo is fully drawn: lets the current fill finish,
    // or, while retracting, grows the strokes back at the same speed.
    finish: () => {
      const loop = loopRef.current;
      if (!loop || loop.paused()) return Promise.resolve();

      const t = loop.time();
      const { filled, retract } = loop.labels;
      if (t < filled) {
        return new Promise<void>((resolve) => {
          finishRef.current = resolve;
        });
      }

      loop.pause();
      if (t < retract) return Promise.resolve();

      return new Promise<void>((resolve) => {
        gsap.to(loop, {
          time: filled,
          duration: t - filled,
          ease: "none",
          onComplete: resolve,
        });
      });
    },
    stop: () => {
      finishRef.current = null;
      gsap.killTweensOf(loopRef.current);
      loopRef.current?.pause(0);
    },
  }));

  const strokeProps = { fill: "none", strokeLinecap: "round" } as const;

  return (
    <Box
      component="svg"
      viewBox="0 0 1400 1400"
      width="100%"
      height="100%"
      display="block"
      sx={{ overflow: "visible" }}
    >
      <path
        ref={outerRef}
        d={OUTER_RING}
        stroke="white"
        strokeWidth={99}
        {...strokeProps}
      />
      <path
        ref={innerRef}
        d={INNER_RING}
        stroke="#9863E7"
        strokeWidth={53}
        {...strokeProps}
      />
      <path
        ref={arrowRef}
        d={ARROW}
        stroke="white"
        strokeWidth={91.6}
        {...strokeProps}
      />
    </Box>
  );
}
