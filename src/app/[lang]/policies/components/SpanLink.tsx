"use client";

import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import NextLink from "next/link";

type Props = PropsWithChildren & {
  url: string;
  newTab?: boolean;
};

export default function SpanLink({ url, children, newTab = false }: Props) {
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
      {...linkProps}
      color="primary.main"
      fontSize="inherit"
      sx={{ cursor: "pointer", textDecoration: "none" }}
    >
      {children}
    </Typography>
  );
}
