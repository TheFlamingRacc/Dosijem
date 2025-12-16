"use client";

import { Divider } from "@mui/material";

export default function CustomDivider() {
  return (
    <Divider
      orientation="vertical"
      sx={{
        mx: { md: "min(1.1vw, 2.2vh)", lg: "min(0.6vw, 1.2vh)" },
        width: "1px",
        height: "2rem",
        border: "none",
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
  );
}
