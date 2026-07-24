"use client";

import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import NextLink from "next/link";

type Props = PropsWithChildren & {
  url: string;
  blank?: boolean;
};

export default function CustomLink({ url, children, blank = false }: Props) {
  const linkProps = blank
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
      fontFamily="inherit"
      fontSize="inherit"
      fontWeight="inherit"
      color="primary.main"
      sx={{
        textDecoration: "none",
        transition: "color 0.5s ease",
        cursor: "pointer",
        position: "relative",
        display: "inline-block",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: "-2px",
          width: "100%",
          height: "3px",
          backgroundColor: "currentColor",
          borderRadius: "999px",
          transition: "background-color 0.2s ease",
        },
        "&:hover": {
          color: "primary.dark",
        },
      }}
    >
      {children}
    </Typography>
  );
}
