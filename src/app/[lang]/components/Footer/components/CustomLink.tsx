"use client";

import { Typography, TypographyProps } from "@mui/material";
import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

type Props = PropsWithChildren &
  TypographyProps & {
    url: string;
    newTab?: boolean;
  };

export default function CustomLink({
  url,
  newTab = false,
  children,
  ...props
}: Props) {
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
      {...props}
      onClick={handleClick}
      fontSize={{ xs: "0.625rem", md: "1rem" }}
      fontFamily="e-UkraineHead"
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
