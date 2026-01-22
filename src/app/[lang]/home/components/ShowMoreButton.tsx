"use client";

import { Button } from "@mui/material";
import { useRouter, useParams } from "next/navigation";
import { PropsWithChildren } from "react";

type Props =
  | { reviews: true; about?: never }
  | { about: true; reviews?: never };

export default function ShowMoreButton(props: Props & PropsWithChildren) {
  const router = useRouter();
  const { lang } = useParams();
  const isReviews = "reviews" in props;

  return (
    <Button
      onClick={() =>
        router.push(`/${lang}${isReviews ? "/reviews" : "/about"}`)
      }
      fullWidth
      sx={{
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
