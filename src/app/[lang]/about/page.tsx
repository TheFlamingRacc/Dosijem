import { Box, Stack } from "@mui/material";
import { getDictionary, hasLocale } from "../dictionaries";
import { notFound } from "next/navigation";
import PageContent from "./PageContent";

export default async function About({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = (await getDictionary(lang)).about;

  return (
    <>
      <Stack
        mx="auto"
        maxWidth={{ md: 609, lg: "min(914px, 70%)" }}
        pt={14}
        zIndex={-1}
        gap={4}
        position="relative"
      >
        <Box
          component="img"
          src="/DOSIJEM.svg"
          width="100%"
          sx={{
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
          }}
        />
        <Box
          component="img"
          src={lang === "en" ? "/about-title-en.svg" : "/about-title.svg"}
          width="100%"
          sx={{
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
            animationDelay: "0.2s",
          }}
        />
        <Box
          component="img"
          src="/Woman.svg"
          height="100%"
          position="absolute"
          zIndex={1}
          bottom={{ md: "-30%", lg: "-25%" }}
          left="50%"
          sx={{
            transform: "translateX(-50%)",
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
            animationDelay: "0.3s",
          }}
        />
      </Stack>
      <PageContent dict={dict} />
    </>
  );
}
