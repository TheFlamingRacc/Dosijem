"use client";

import { Box, Divider } from "@mui/material";
import LogoButton from "./LogoButton";
import Navigation from "./Navigation";
import MusicNavigation from "./MusicNavigation";
import { PropsWithChildren } from "react";

export default function SidePanel({ children }: PropsWithChildren) {
  return (
    <Box display={"flex"} maxWidth={"100%"}>
      <Box
        width={"9.5%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={{ md: "normal", lg: "space-between" }}
        gap={{ md: "min(6vw, 3vh)", lg: "none" }}
        p={{ md: "min(0.5vw, 1vh)", lg: "min(1.3vw, 2.6vh)" }}
      >
        <LogoButton />
        <Box>
          <Navigation />
          <MusicNavigation />
        </Box>
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          border: "none",
          width: "1px",
          background: (theme) =>
            `linear-gradient(
        to bottom,
        ${theme.palette.background.main} 0%,
        #3D3A44 10%,
        #3D3A44 90%,
        ${theme.palette.background.main} 100%
      )`,
        }}
      />
      {children}
    </Box>
  );
}
