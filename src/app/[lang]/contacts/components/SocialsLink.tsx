"use client";

import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type BaseProps = PropsWithChildren & {
  url: string;
};

type Props =
  | (BaseProps & { telegram: boolean; discord?: never })
  | (BaseProps & { discord: boolean; telegram?: never });

export default function SocialsLink({
  children,
  telegram = false,
  discord = false,
  url,
}: Props) {
  return (
    <Typography
      component="a"
      color={
        telegram
          ? "rgba(106, 171, 255, 1)"
          : discord
            ? "rgba(123, 106, 255, 1)"
            : ""
      }
      fontSize="1.25rem"
      sx={{
        cursor: "pointer",
        transition: "0.5s ease color",
        textDecoration: "underline",
        textUnderlineOffset: "6px",
        "&:hover": {
          color: `${
            telegram
              ? "rgba(106, 171, 255, 0.5)"
              : discord
                ? "rgba(123, 106, 255, 0.5)"
                : ""
          }`,
        },
      }}
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
    >
      {children}
    </Typography>
  );
}
