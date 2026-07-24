"use client";

import { useParams } from "next/navigation";
import NextLink from "next/link";
import { Button } from "@mui/material";

type Props = {
  button_title: string;
};

export default function JoinOurTeamButton({ button_title }: Props) {
  const { lang } = useParams();

  return (
    <Button
      fullWidth
      component={NextLink}
      href={`/${lang}/contacts`}
      sx={{
        textDecoration: "none",
        height: "43px",
        fontFamily: "e-Ukraine",
        fontWeight: 500,
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
      {button_title}
    </Button>
  );
}
