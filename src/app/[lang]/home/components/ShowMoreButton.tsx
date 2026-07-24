"use client";

import { Button } from "@mui/material";
import { useParams } from "next/navigation";
import NextLink from "next/link";
import { PropsWithChildren } from "react";

type Props =
  | { reviews: true; about?: never }
  | { about: true; reviews?: never };

export default function ShowMoreButton(props: Props & PropsWithChildren) {
  const { lang } = useParams();
  const isReviews = "reviews" in props;

  return (
    <Button
      component={NextLink}
      href={`/${lang}${isReviews ? "/reviews" : "/about"}`}
      fullWidth
      sx={{
        textDecoration: "none",
        height: "43px",
        fontFamily: "e-Ukraine",
        fontSize: "1rem",
        color: "#736E80",
        borderRadius: "13px",
        backgroundColor: "background.paper",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "background.paper",
        },
      }}
    >
      {props.children}
    </Button>
  );
}
