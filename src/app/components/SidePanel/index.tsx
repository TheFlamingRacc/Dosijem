"use client";

import { Box, Stack, Divider } from "@mui/material";
import LogoButton from "./LogoButton";
import Navigation from "./Navigation";
import MusicNavigation from "./MusicNavigation";

export default function SidePanel() {
  return (
    <Box display="flex" maxHeight="100%" width="9.5%">
      <Stack
        justifyContent={{ md: "normal", lg: "space-between" }}
        p={{ md: "min(1vw, 2vh)", lg: 2.5 }}
        gap={1}
      >
        <LogoButton />
        <Box>
          <Navigation />
          <MusicNavigation />
        </Box>
      </Stack>
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
