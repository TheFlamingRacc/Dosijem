"use client";

import { Typography, Stack, Box, StackProps } from "@mui/material";
import StatsBlock from "./StatsBlock";
import CountUp from "@/app/components/CountUp";
import { motion } from "framer-motion";

type Props = StackProps & {
  rate_title: string;
  section_title: string;
  deadline_title: string;
  days: string;
  java_devs_title: string;
};

const MotionBox = motion(Box);

export default function ALittleStatictics({
  rate_title,
  section_title,
  deadline_title,
  days,
  java_devs_title,
  ...props
}: Props) {
  return (
    <Stack spacing={1.6} {...props}>
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.01 }}
      >
        <Typography
          sx={{
            "@media (max-width: 750px)": {
              pb: 0.5,
            },
          }}
          fontFamily="e-UkraineHead"
          fontSize="1.25rem"
          color="#fff"
        >
          {section_title}
        </Typography>
      </MotionBox>
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.01 }}
        display="none"
        sx={{
          "@media (max-width: 750px)": {
            display: "block",
          },
        }}
      >
        <StatsBlock title={rate_title}>
          <Typography
            fontFamily="e-Ukraine"
            fontSize="2.5rem"
            color="#fff"
            gap={0.5}
            display="flex"
            alignItems="center"
            fontWeight={500}
          >
            <CountUp from={0} to={4.7} />
            <Box
              component="img"
              src="/rating-star.svg"
              height={35}
              width={35}
            />
          </Typography>
        </StatsBlock>
      </MotionBox>
      <Box display="flex" gap={1.2}>
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.01 }}
          display="block"
          sx={{
            "@media (max-width: 750px)": {
              display: "none",
            },
          }}
        >
          <StatsBlock title={rate_title}>
            <Typography
              fontFamily="e-Ukraine"
              fontSize="2.5rem"
              color="#fff"
              gap={0.5}
              display="flex"
              alignItems="center"
              fontWeight={500}
            >
              <CountUp from={0} to={4.7} />
              <Box
                component="img"
                src="/rating-star.svg"
                height={35}
                width={35}
              />
            </Typography>
          </StatsBlock>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.01 }}
        >
          <StatsBlock title={deadline_title}>
            <Typography
              fontFamily="e-Ukraine"
              fontSize="2.5rem"
              color="#fff"
              fontWeight={500}
            >
              <CountUp from={0} to={2} />
              <Typography
                component="span"
                fontSize="1.25rem"
                color="primary.main"
                fontWeight="inherit"
              >
                {days}
              </Typography>
            </Typography>
          </StatsBlock>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.01 }}
        >
          <StatsBlock title={java_devs_title}>
            <Typography
              fontFamily="e-Ukraine"
              fontSize="2.5rem"
              color="#fff"
              gap={0.5}
              display="flex"
              alignItems="center"
              fontWeight={500}
            >
              <CountUp from={0} to={7} />
              <Box component="img" src="/java.svg" height={35} width={35} />
            </Typography>
          </StatsBlock>
        </MotionBox>
      </Box>
    </Stack>
  );
}
