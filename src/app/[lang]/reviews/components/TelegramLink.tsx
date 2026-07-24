"use client";

import { Typography } from "@mui/material";

export default function TelegramLink() {
  return (
    <Typography
      component="a"
      href="https://t.me/DOSIJEM_Reviews"
      target="_blank"
      rel="noopener noreferrer"
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
