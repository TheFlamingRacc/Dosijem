"use client";

import { Box } from "@mui/material";
import { PropsWithChildren, useEffect, useRef } from "react";

type MarqueeProps = PropsWithChildren & {
  gap?: number;
  addStyles?: object;
};

const SPEED = 60;

export default function Marquee({
  children,
  gap = 3,
  addStyles = {},
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const original = marquee.querySelector(
      ":scope > div:not(.clone)"
    ) as HTMLElement;
    if (!original) return;

    marquee.querySelectorAll(".clone").forEach((c) => c.remove());

    const clone = original.cloneNode(true) as HTMLElement;
    clone.classList.add("clone");
    marquee.appendChild(clone);

    const distance = original.offsetWidth + gap;
    const duration = distance / SPEED;

    marquee.style.setProperty("--marquee-distance", `${distance}px`);
    marquee.style.setProperty("--marquee-duration", `${duration}s`);

    marquee.style.setProperty("--marquee-gap", `${gap}px`);
  }, [gap]);

  return (
    <Box
      sx={{
        ...addStyles,
        display: "flex",
        alignItems: "center",
        fontSize: "inherit",
        fontFamily: "inherit",
        overflowX: "hidden",

        "& .track": {
          display: "flex",
          gap: "var(--marquee-gap)",
          animation: "marquee var(--marquee-duration) linear infinite",
          animationDirection: "var(--marquee-direction)",
          willChange: "transform",
        },

        "@keyframes marquee": {
          from: { transform: "translateX(0)" },
          to: {
            transform: "translateX(calc(-1 * var(--marquee-distance)))",
          },
        },
      }}
    >
      <Box ref={marqueeRef} className="track">
        <Box
          display="flex"
          gap={`${gap}px`}
          sx={{
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
