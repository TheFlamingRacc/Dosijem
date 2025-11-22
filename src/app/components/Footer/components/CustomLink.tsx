"use client";

import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

export default function CustomLink({
  url,
  newTab = false,
  children,
}: PropsWithChildren & { url: string; newTab?: boolean }) {
  const router = useRouter();

  const handleClick = () => {
    if (newTab) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      router.push(url);
    }
  };

  return (
    <Typography
      onClick={handleClick}
      fontSize={"clamp(0px, min(1vw, 2vh), 16px)"}
      fontFamily={"e-UkraineHead"}
      color="text.secondary"
      sx={{
        cursor: "pointer",
        transition: "0.5s ease color",
        "&:hover": {
          color: "primary.main",
        },
      }}
    >
      {children}
    </Typography>
  );
}
