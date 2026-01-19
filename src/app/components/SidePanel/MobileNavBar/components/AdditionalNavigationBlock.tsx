"use client";

import { Stack } from "@mui/material";
import AdditionalNavigationLink from "./AdditionalNavigationLink";

export default function AdditionalNavigationBlock() {
  return (
    <Stack
      borderRadius="23px"
      width="100%"
      p={2.7}
      sx={{
        backgroundColor: "background.default",
        userSelect: "none",
        opacity: 0,
        animation: "FadeSlideInTop 0.5s ease forwards",
        animationDelay: "0.2s",
      }}
      spacing={1}
    >
      <AdditionalNavigationLink component="about" />
      <AdditionalNavigationLink component="reviews" />
      <AdditionalNavigationLink component="contacts" />
      <AdditionalNavigationLink component="charitybox" />
    </Stack>
  );
}
