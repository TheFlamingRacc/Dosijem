"use client";

import { Stack, Typography, Box } from "@mui/material";
import AdditionalNavigationLink from "./AdditionalNavigationLink";

export default function AdditionalNavigationBlock() {
  return (
    <Stack
      borderRadius="23px"
      width="100%"
      p={2.7}
      sx={{ backgroundColor: "background.default" }}
      spacing={1}
    >
      <AdditionalNavigationLink component="home" />
      <AdditionalNavigationLink component="feedbacks" />
      <AdditionalNavigationLink component="contacts" />
      <AdditionalNavigationLink component="charitybox" />
    </Stack>
  );
}
