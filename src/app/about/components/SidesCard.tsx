import { Box, Typography, Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { Variants } from "framer-motion";

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

interface CardCustom {
  accent: boolean;
  number: number;
  isMobile: boolean;
}

const cardVariants: Variants = {
  hidden: ({ accent }: CardCustom) => ({
    opacity: 0,
    scale: accent ? 1 : 0.5,
    rotate: 0,
  }),
  visible: ({ accent, number, isMobile }: CardCustom) => ({
    opacity: 1,
    scale: 1,
    rotate: accent ? -3 : 0,
    transition: {
      duration: 0.3,
      delay: !isMobile ? number / 6 : 0,
      ease: "easeOut",
    },
  }),
};

type Props = PropsWithChildren & {
  accent?: boolean;
  title: string;
  icon: string;
  number: number;
};

export default function SidesCard({
  accent = false,
  icon,
  title,
  children,
  number,
}: Props) {
  const isMore1300 = useMediaQuery("(min-width:1300px)");
  const isMobile = useMediaQuery("max-width:600px");

  return (
    <MotionStack
      custom={{ accent: accent && isMore1300, isMobile, number }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      sx={{
        backgroundColor: {
          xs: "background.paper",
          md: accent ? "#3C2D61" : "background.paper",
        },
        borderRadius: "25px",
        width: { xs: 280, md: 300 },
        height: { xs: 280, md: 300 },
        p: 2.5,
        transformOrigin: "center center",

        "@media (min-width: 1400px)": {
          transformOrigin: accent ? "left bottom" : "center center",
        },
      }}
    >
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Box component="img" src={icon} width={45} height={45} />

        <Typography
          pt={3}
          fontFamily="e-UkraineHead"
          color="#fff"
          fontSize="1rem"
        >
          {title}
        </Typography>
        <Typography
          pt={1.5}
          fontFamily="e-UkraineThin"
          color="text.secondary"
          fontSize="0.875rem"
        >
          {children}
        </Typography>
      </MotionBox>
    </MotionStack>
  );
}
