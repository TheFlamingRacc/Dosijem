"use client";

import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import AuroraBackground from "../AuroraBackground";
import SidePanel from "../SidePanel";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AdaptiveLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <Box
      width="100%"
      height={{ xs: "auto", md: "100vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Box
        display={{ xs: "none", lg: "block" }}
        overflow="hidden"
        position="absolute"
        width="100%"
        height="100%"
      >
        <AuroraBackground speed={0.5} />
      </Box>
      <Box
        zIndex={1}
        display="flex"
        maxHeight={{
          xs: "none",
          md: "100vh",
          lg: "min(calc(100vh - 50px), 950px)",
        }}
        maxWidth={{ xs: "100vw", lg: "min(calc(100vw - 50px), 1692px)" }}
        overflow={{ xs: "visible", md: "hidden" }}
        borderRadius={{ xs: 0, lg: "2vw" }}
        sx={{
          backgroundColor: "var(--bg-main)",
          aspectRatio: { md: "none", lg: "16/9" },
          outline: { xs: "none", lg: "solid rgba(217, 217, 217, 0.2) 20px" },
        }}
      >
        <SidePanel />
        <Box
          ref={scrollRef}
          width={{ xs: "100vw", lg: "100%" }}
          height={{ xs: "auto", md: "100vh", lg: "auto" }}
          maxWidth={{ xs: "100vw", lg: "100%" }}
          sx={{
            overflowY: { xs: "visible", md: "scroll" },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
