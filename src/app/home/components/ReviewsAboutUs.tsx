"use client";

import { useState, useEffect, useRef } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Rate from "./Rate";
import ShowMoreButton from "./ShowMoreButton";
import SplitText from "@/app/components/SplitText";

type ReviewData = {
  userName: string;
  rate: 5 | 4 | 3 | 2 | 1;
  reviewText: string;
};

const mockData: ReviewData[] = [
  {
    userName: "Mr Rukojob",
    rate: 5,
    reviewText:
      "Пхаха визнаю дешево не завжди означає погану якість. Мені все зайшло, дякую вам)",
  },
  {
    userName: "Mr JobIsDone",
    rate: 4,
    reviewText:
      "Пхаха окак дешево не завжди означає погану якість. Мені все зайшло, дякую вам)",
  },
  {
    userName: "Abobysssss",
    rate: 3,
    reviewText:
      "Пхаха, ніщетааа дешево не завжди означає погану якість. Мені все зайшло, дякую вам)",
  },
];

const AUTO_DELAY = 10000;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
  }),
};

export default function ReviewsAboutUs() {
  const pathname = usePathname();

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const goNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % mockData.length);
  };

  const startTimer = () => {
    clearTimer();
    timerRef.current = setTimeout(goNext, AUTO_DELAY);
  };

  const changeReview = (nextIndex: number) => {
    clearTimer();
    setDirection(nextIndex > index ? 1 : -1);
    setIndex(nextIndex);
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [index]);

  const review = mockData[index];

  return (
    <Stack gap={2}>
      <SplitText fontSize="1rem" fontFamily="e-UkraineHead" color="#A8A3B3">
        {pathname.includes("/en") ? "REVIEWS ABOUT US" : "ВІДГУКИ ПРО НАС"}
      </SplitText>

      <Stack
        sx={{
          backgroundColor: "background.default",
          opacity: 0,
          animation: "FadeIn 1s ease forwards",
          animationDelay: "0.2s",
        }}
        borderRadius="23px"
        gap={1}
        p={1}
      >
        <Stack
          position="relative"
          p={1.7}
          spacing={0.5}
          height={144}
          width={{ xs: "100%", md: 333 }}
          borderRadius="25px"
          sx={{
            backgroundColor: "background.paper",
            overflow: "hidden",
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
            animationDelay: "0.4s",
          }}
        >
          <Box display="flex" alignItems="center" gap={3}>
            <Typography
              key={review.userName}
              fontFamily="e-UkraineHead"
              sx={{
                opacity: 0,
                animation: "FadeIn 2s ease forwards",
              }}
            >
              {review.userName}
            </Typography>
            <Rate key={review.rate} rate={review.rate} />
          </Box>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography color="#C2C2C2" mt={1}>
                {review.reviewText}
              </Typography>
            </motion.div>
          </AnimatePresence>

          <Box
            display="flex"
            gap={0.4}
            position="absolute"
            bottom={14}
            right={14}
          >
            {mockData.map((_, i) => (
              <Box
                key={i}
                height={5}
                width={5}
                borderRadius="50%"
                onClick={() => changeReview(i)}
                sx={{
                  cursor: "pointer",
                  backgroundColor: index === i ? "#D9D9D9" : "#949494",
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </Box>
        </Stack>
        <Box
          sx={{
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
            animationDelay: "0.6s",
          }}
        >
          <ShowMoreButton reviews />
        </Box>
      </Stack>
    </Stack>
  );
}
