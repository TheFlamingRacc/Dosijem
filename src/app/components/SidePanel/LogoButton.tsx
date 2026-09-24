"use client";

import { Box, IconButton } from "@mui/material";
import { useParams } from "next/navigation";
import NextLink from "next/link";

export default function LogoButton() {
  const { lang } = useParams();
  const language = lang && lang !== "undefined" ? lang : "uk";

  return (
    <IconButton
      component={NextLink}
      href={`/${language}/home`}
      aria-label="DOSIJEM — home"
      sx={{
        backgroundColor: "background.default",
        border: "solid 1px #3D3A44",
        transition: "0.3s ease box-shadow",
        "&:hover": {
          boxShadow: "0 0 0 rgba(0, 0, 0, 0.6), 0 0 20px #522FB2",
          backgroundColor: "background.default",
        },
      }}
    >
      <Box component="img" alt="" src="/dosijem-logo.svg" width="100%" height="100%" />
    </IconButton>
  );
}
