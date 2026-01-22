import { Box, Typography } from "@mui/material";
import DomeGallery from "./components/DomeGallery";
import TelegramLink from "./components/TelegramLink";
import { getDictionary, hasLocale } from "../dictionaries";
import { notFound } from "next/navigation";

type ReviewImg = {
  id: number;
  reviewImageUrl: string;
};

async function getReviews(): Promise<ReviewImg[]> {
  const res = await fetch("https://api.dosijem.com/reviews", {
    next: {
      revalidate: 60 * 60 * 12,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return res.json();
}

export default async function Reviews({
  params,
}: PageProps<"/[lang]/reviews">) {
  const images = await getReviews();
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = (await getDictionary(lang)).reviews;
  console.log(images);
  return (
    <Box width="100%" height={{ xs: "100vh", md: "100%" }} position="relative">
      <DomeGallery
        maxVerticalRotationDeg={0}
        fit={0.6}
        grayscale={false}
        images={[
          "/dosijem-logo.svg",
          ...images.map((img) => img.reviewImageUrl),
        ]}
        minRadius={400}
        maxRadius={600}
      />
      <Typography
        display={{ xs: "none", md: "flex" }}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        zIndex={50}
        position="absolute"
        fontFamily="e-UkraineHead"
        bottom={30}
        fontSize="2rem"
        component="span"
        fontWeight={700}
        gap={1}
        left="50%"
        noWrap
        sx={{
          transform: "translateX(-50%)",
          filter: `
    drop-shadow(0 0 30px var(--bg-main))
    drop-shadow(0 0 30px var(--bg-main))
    drop-shadow(0 0 30px var(--bg-main))
    drop-shadow(0 0 30px var(--bg-main))
  `,
          opacity: 0,
          animation: "FadeSlideInReviews 1s ease forwards",
        }}
      >
        {dict.title[1]}{" "}
        <Typography
          component="span"
          color="primary.main"
          fontSize="inherit"
          fontFamily="inherit"
          fontWeight="inherit"
        >
          {dict.title[2]}
        </Typography>{" "}
        {dict.title[3]}
        <Typography component="span" color="#C2C2C2">
          {dict.description[1]} <TelegramLink />
          {dict.description[2]}
        </Typography>
      </Typography>
      <Typography
        display={{ xs: "block", md: "none" }}
        color="primary.main"
        fontSize="1rem"
        position="absolute"
        fontWeight={700}
        top={100}
        left={20}
        sx={{
          opacity: 0,
          animation: "FadeSlideIn 1s ease forwards",
        }}
      >
        {dict.heading_title}
      </Typography>
      <Typography
        display={{ xs: "block", md: "none" }}
        position="absolute"
        top={125}
        left={20}
        fontWeight={700}
        fontFamily="e-UkraineHead"
        fontSize="1.3rem"
        sx={{
          opacity: 0,
          animation: "FadeSlideIn 1s ease forwards",
          animationDelay: "0.2s",
        }}
      >
        {dict.title[1]}{" "}
        <Typography
          component="span"
          color="primary.main"
          fontSize="inherit"
          fontWeight="inherit"
        >
          {dict.title[2]}
        </Typography>{" "}
        {dict.title[3]}
      </Typography>
      <Typography
        display={{ xs: "block", md: "none" }}
        position="absolute"
        bottom={100}
        left={20}
        fontSize="0.9rem"
        color="#C2C2C2"
        sx={{
          opacity: 0,
          animation: "FadeSlideIn 1s ease forwards",
          animationDelay: "0.4s",
        }}
      >
        {dict.description[1]} <TelegramLink />
        {dict.description[2]}
      </Typography>
    </Box>
  );
}
