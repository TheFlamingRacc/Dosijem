import { Stack, Typography, Box, StackProps } from "@mui/material";
import { motion } from "framer-motion";

type Props = StackProps & {
  en?: boolean;
};

const MotionStack = motion(Stack);
const MotionBox = motion(Box);

export default function InShort({ en = false, ...props }: Props) {
  return (
    <Stack spacing={1.6} {...props}>
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.01 }}
      >
        <Typography fontFamily="e-UkraineHead" fontSize="1.25rem" color="#fff">
          {en ? "In Short:" : "Якщо коротко:"}
        </Typography>
      </MotionBox>
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.01 }}
        alignItems="stretch"
        p={1.4}
        maxWidth={333}
        maxHeight={195}
        display="flex"
        gap={0.6}
        borderRadius="23px"
        sx={{
          backgroundColor: "background.paper",
          "@media (max-width:1450px), (max-height:840px)": {
            maxHeight: "none",
          },
        }}
      >
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, amount: 0.01 }}
          width="6px"
          flexShrink={0}
          borderRadius="3px"
          sx={{
            backgroundColor: "primary.main",
          }}
        />
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
                delay: 0.9,
                ease: "easeOut",
                staggerChildren: 0.5,
                delayChildren: 0.5,
              },
            },
          }}
          justifyContent="space-between"
          spacing={1}
        >
          <MotionBox
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <Typography
              color="text.primary"
              fontSize="0.875rem"
              fontFamily="e-Ukraine"
              fontWeight={500}
            >
              <Typography
                fontFamily="inherit"
                component="span"
                fontSize="inherit"
                color="primary.main"
                fontWeight="inherit"
              >
                DOSIJEM
              </Typography>{" "}
              {en
                ? "is a Minecraft content studio that brings the community’s boldest ideas to life."
                : "- студія розробки контенту для Minecraft, що втілює складні й найкреативніші ідеї спільноти."}
            </Typography>
          </MotionBox>
          <MotionBox
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <Typography
              color="text.primary"
              fontSize="0.875rem"
              fontFamily="e-Ukraine"
              fontWeight={500}
            >
              {en ? "Founded in early autumn " : "Створена на старті осені "}
              <Typography
                fontFamily="inherit"
                component="span"
                fontSize="inherit"
                color="primary.main"
                fontWeight="inherit"
              >
                2025
              </Typography>
              {en
                ? ", it has already completed dozens of projects and isn’t planning to stop!"
                : " року,  вже реалізувала десятки проєктів і не збирається зупинятися!"}
            </Typography>
          </MotionBox>
        </MotionStack>
      </MotionBox>
    </Stack>
  );
}
