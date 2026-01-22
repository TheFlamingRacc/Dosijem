"use client";

import { Button, Box } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useRouter, useParams } from "next/navigation";
import { PropsWithChildren } from "react";



export default function RealizeIdeaButton({ children }: PropsWithChildren) {
  const router = useRouter();
  const { lang } = useParams();
  return (
    <Button
      onClick={() => router.push(`/${lang}/services/plugins`)}
      color="primary"
      variant="contained"
      sx={{
        borderRadius: "100px",
        fontWeight: 700,
        fontSize: { xs: "1rem", md: "1.25rem", lg: 25 },
        height: { xs: 32, md: 44, lg: 60 },
        width: { xs: 207, md: 258, lg: 355 },
        display: "flex",
        alignItems: "center",
        padding: { xs: 0, lg: "15px 21px" },
        transition: "all 0.4s ease",
        "&:hover": {
          transform: "scale(1.05)",
          backgroundColor: "primary.main",
        },
        opacity: 0,
        animation: "FadeIn 1s ease forwards",
        animationDelay: "0.7s",
      }}
      startIcon={
        <Box
          height={29}
          width={29}
          borderRadius={50}
          padding={0.7}
          display={{ xs: "none", lg: "flex" }}
          sx={{ backgroundColor: "black", color: "white" }}
        >
          <RocketLaunchIcon sx={{ width: "100%", height: "100%" }} />
        </Box>
      }
    >
      {children}
    </Button>
  );
}
