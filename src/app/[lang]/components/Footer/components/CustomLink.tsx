"use client";

import { Typography, TypographyProps } from "@mui/material";
import { PropsWithChildren } from "react";
import NextLink from "next/link";

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
  const linkProps = newTab
    ? {
        component: "a" as const,
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : { component: NextLink, href: url };

  return (
    <Typography
      {...props}
      {...linkProps}
      fontSize={{ xs: "0.625rem", md: "1rem" }}
      fontFamily="e-UkraineHead"
      color="text.secondary"
      sx={{
        textDecoration: "none",
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
