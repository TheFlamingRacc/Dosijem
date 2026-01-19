import { Stack, Typography, Box, StackProps } from "@mui/material";
import StatsBlock from "./StatsBlock";
import CountUp from "@/app/home/components/CountUp";
import JoinOurTeamButton from "./JoinOurTeamButton";
import { motion } from "framer-motion";

const MotionStack = motion(Stack);
const MotionBox = motion(Box);

type Props = StackProps & {
  en?: boolean;
};

export default function OurTeamBlock({ en = false, ...props }: Props) {
  return (
    //@ts-expect-error cant make types of variants
    <MotionStack
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: "easeOut",
            staggerChildren: 0.2,
            delayChildren: 0.15,
          },
        },
      }}
      spacing={1.6}
      {...props}
    >
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.01 }}
      >
        <Typography fontFamily="e-UkraineHead" fontSize="1.25rem" color="#fff">
          {en ? "Our team" : "Наша команда"}
        </Typography>
      </MotionBox>
      <Stack spacing={1}>
        <Stack direction="row" spacing={1}>
          <MotionBox
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <StatsBlock title={en ? "SHARED EXP" : "СПІЛЬН. ДОСВІДУ"}>
              <Typography
                fontFamily="e-Ukraine"
                fontSize="2.5rem"
                color="#fff"
                fontWeight={500}
              >
                <CountUp from={0} to={36} />
                <Typography
                  component="span"
                  fontSize="1.25rem"
                  color="primary.main"
                  fontWeight="inherit"
                >
                  {en ? "years" : "років"}
                </Typography>
              </Typography>
            </StatsBlock>
          </MotionBox>
          <MotionBox
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <StatsBlock title={en ? "IN TEAM" : "У КОМАНДІ"}>
              <Typography
                fontFamily="e-Ukraine"
                fontSize="2.5rem"
                color="#fff"
                gap={0.5}
                display="flex"
                alignItems="center"
                fontWeight={500}
              >
                <CountUp from={0} to={14} />
                <Box
                  height={30}
                  width={30}
                  component="img"
                  src="/streamline.svg"
                />
              </Typography>
            </StatsBlock>
          </MotionBox>
        </Stack>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <JoinOurTeamButton />
        </motion.div>
      </Stack>
    </MotionStack>
  );
}
