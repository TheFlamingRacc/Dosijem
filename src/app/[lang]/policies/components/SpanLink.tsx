"use client";

import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

type Props = PropsWithChildren & {
  url: string;
  newTab?: boolean;
};

export default function SpanLink({ url, children, newTab = false }: Props) {
  const router = useRouter();
  return (
    <Typography
      component="span"
      color="primary.main"
      fontSize="inherit"
      onClick={() =>
        newTab
          ? window.open(url, "_blank", "noopener,noreferrer")
          : router.push(url)
      }
      sx={{ cursor: "pointer" }}
    >
      {children}
    </Typography>
  );
}
