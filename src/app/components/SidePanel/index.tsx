"use client";

import { Box, Divider } from "@mui/material";
import LogoButton from "./LogoButton";
import Navigation from "./Navigation";
import MusicNavigation from "./MusicNavigation";

export default function SidePanel() {
  return (
    <Box display={"flex"} height="auto">
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={{ md: "normal", lg: "space-between" }}
        gap={{ md: "min(6vw, 3vh)", lg: "none" }}
        p={{ md: "min(0.5vw, 1vh)", lg: 3 }}
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
    </Box>
  );
}
