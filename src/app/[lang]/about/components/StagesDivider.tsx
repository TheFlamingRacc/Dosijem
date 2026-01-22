"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const MotionBox = motion(Box);

type Props = {
  number: number;
};

export default function StagesDivider({ number }: Props) {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTabletMode = useMediaQuery("(max-width: 1400px)");
  return (
    <MotionBox
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 0.16,
        delay:
          ((isMobile ? 1 : isTabletMode ? number / 2 : number) - 1) * 0.16 + 0.2,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.1 }}
      width={{ xs: 3, md: 111 }}
      height={{ xs: 111, md: 3 }}
      borderRadius="3px"
      sx={{
        backgroundColor: "primary.dark",
        transformOrigin: { xs: "top", md: "left" },
      }}
    />
  );
}
