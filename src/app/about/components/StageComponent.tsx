"use client";

import { Stack, Typography, Box } from "@mui/material";
import PrimarySpan from "./PrimarySpan";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

type Props = {
  number: number;
  title: string;
  description: string;
};

const containerVariants = {
  hidden: {},
  visible: (number: number) => ({
    transition: {
      delayChildren: (number - 1) * 0.16,
      staggerChildren: 0.2,
    },
  }),
};

export default function StageComponent({ number, title, description }: Props) {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTabletMode = useMediaQuery("(max-width: 1400px)");

  return (
    <MotionBox
      variants={containerVariants}
      custom={isMobile ? 1 : isTabletMode ? number / 2 : number}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Stack
        component={motion.div}
        width={18}
        position="relative"
        alignItems="center"
        height={{ xs: "auto", md: 18 }}
        justifyContent="center"
      >
        <MotionTypography
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          fontSize="3rem"
          position={{ md: "absolute" }}
          bottom={{ md: 15 }}
          fontWeight={500}
          fontFamily="e-UkraineHead"
          color="#fff"
        >
          0<PrimarySpan>{number}</PrimarySpan>
        </MotionTypography>
        <MotionBox
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          width={14}
          display={{ xs: "none", md: "block" }}
          height={14}
          my={1}
          flexShrink={0}
          borderRadius="4px"
          sx={{
            backgroundColor: "primary.main",
            transform: "rotate(45deg)",
            transformOrigin: "center",
          }}
        />
        <Stack
          component={motion.div}
          alignItems="center"
          position={{ md: "absolute" }}
          top={{ md: 20 }}
        >
          <MotionTypography
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            fontFamily="e-UkraineHead"
            color="#fff"
            fontSize="1.25rem"
            width={162}
            textAlign="center"
          >
            {title}
          </MotionTypography>
          <MotionTypography
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            fontSize="0.75rem"
            color="text.secondary"
            fontWeight={500}
            textAlign="center"
            width={{ xs: 138, md: 162 }}
          >
            {description}
          </MotionTypography>
        </Stack>
        <MotionBox
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          width={14}
          display={{ xs: number === 6 ? "none" : "block", md: "none" }}
          height={14}
          my={1}
          flexShrink={0}
          borderRadius="4px"
          sx={{
            backgroundColor: "primary.main",
            transform: "rotate(45deg)",
            transformOrigin: "center",
          }}
        />
      </Stack>
    </MotionBox>
  );
}
