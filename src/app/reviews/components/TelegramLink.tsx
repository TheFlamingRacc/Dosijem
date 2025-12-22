"use client";

import { Typography } from "@mui/material";

export default function TelegramLink() {
  return (
    <Typography
      component="span"
      onClick={() =>
        window.open(
          "https://t.me/DOSIJEM_Reviews",
          "_blank",
          "noopener,norefferer"
        )
      }
      color="primary.main"
      fontSize="inherit"
      fontWeight="inherit"
      sx={{
        cursor: "pointer",
        textDecoration: "underline",
        textUnderlineOffset: "5px",
      }}
    >
      Telegram
    </Typography>
  );
}
