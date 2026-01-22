"use client";

import { useRouter, useParams } from "next/navigation";
import { Button } from "@mui/material";

type Props = {
  button_title: string;
};

export default function JoinOurTeamButton({ button_title }: Props) {
  const router = useRouter();

  const { lang } = useParams();

  return (
    <Button
      fullWidth
      onClick={() => router.push(`/${lang}/contacts`)}
      sx={{
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
