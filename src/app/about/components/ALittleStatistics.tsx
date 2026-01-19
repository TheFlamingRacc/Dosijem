import { Typography, Stack, Box, StackProps } from "@mui/material";
import StatsBlock from "./StatsBlock";
import CountUp from "@/app/home/components/CountUp";
import { motion } from "framer-motion";

type Props = StackProps & {
  en?: boolean;
};

const MotionBox = motion(Box);

export default function ALittleStatictics({ en = false, ...props }: Props) {
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
          {en ? "A Little Statistics" : "Трохи статистики"}
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
        <StatsBlock title={en ? "AVERAGE RATING" : "СЕРЕДНЯ ОЦІНКА"}>
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
          <StatsBlock title={en ? "AVERAGE RATING" : "СЕРЕДНЯ ОЦІНКА"}>
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
          <StatsBlock title={en ? "AVG. DEADLINE" : "СЕРЕД. ДЕДЛАЙН"}>
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
                {en ? "days" : "дні"}
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
          <StatsBlock title={en ? "JAVA DEVELOPERS" : "JAVA РОЗРОБНИКІВ"}>
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
