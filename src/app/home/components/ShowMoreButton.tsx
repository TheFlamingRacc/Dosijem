"use client";

import { Button } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

type Props =
  | { reviews: true; about?: never }
  | { about: true; reviews?: never };

export default function ShowMoreButton(props: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const isReviews = "reviews" in props;
  return (
    <Button
      onClick={() =>
        router.push(
          `${isReviews ? "/reviews" : "/about"}${
            pathname.includes("/en") ? "/en" : ""
          }`
        )
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
      {pathname.includes("/en") ? "SEE MORE" : "Дивитися більше"}
    </Button>
  );
}
