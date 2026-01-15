"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

export default function DeliverFinishedProduct({
  children,
}: PropsWithChildren) {
  return (
    <MotionBox
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      display="flex"
      gap={3}
      alignItems="center"
      sx={{
        "@media (max-width: 750px)": {
          flexDirection: "column",
          gap: 1,
        },
      }}
    >
      <MotionBox
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
        height={62}
        width={5}
        flexShrink={0}
        borderRadius="3px"
        sx={{
          backgroundColor: "primary.main",
          "@media (max-width: 750px)": {
            width: 62,
            height: 5,
          },
        }}
      />

      <Box overflow="hidden">
        <MotionTypography
          aria-hidden
          variants={{
            hidden: { y: "-100%" },
            visible: { y: 0 },
          }}
          fontSize="1.125rem"
          textAlign="center"
          fontWeight={500}
          color="#fff"
          display="none"
          sx={{
            "@media(max-width: 750px)": {
              display: "inline-block",
            },
          }}
        >
          {children}
        </MotionTypography>
        <MotionTypography
          variants={{
            hidden: { x: "-100%" },
            visible: { x: 0 },
          }}
          fontSize="1.125rem"
          fontWeight={500}
          textAlign="center"
          color="#fff"
          display="none"
          sx={{
            "@media(min-width: 751px)": {
              display: "inline-block",
            },
          }}
        >
          {children}
        </MotionTypography>
      </Box>
    </MotionBox>
  );
}
