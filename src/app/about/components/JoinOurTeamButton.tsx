"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@mui/material";

export default function JoinOurTeamButton() {
  const router = useRouter();
  const pathname = usePathname();
  const isEn = pathname.includes("/en");
  return (
    <Button
    fullWidth
      onClick={() => router.push(`/contacts${isEn ? "/en" : ""}`)}
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
      {isEn ? "Join our team" : "Хочу у команду"}
    </Button>
  );
}
