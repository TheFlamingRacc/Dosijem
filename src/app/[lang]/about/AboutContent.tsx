import { Box, Stack } from "@mui/material";
import MobileNavBar from "@/app/components/SidePanel/MobileNavBar";
import { Dictionary, Locale } from "../dictionaries";
import StageItem from "../components/HomeAboutStage/StageItem";
import PageContent from "./PageContent";

type Props = {
  lang: Locale;
  dict: Dictionary;
};

// About page (formerly about/layout.tsx without the footer + about/page.tsx),
// shared by the /about route and the desktop home ↔ about stage.
export default function AboutContent({ lang, dict }: Props) {
  return (
    <Stack
      width="100%"
      px={{ xs: 2, md: 3, lg: 6 }}
      mb={{ xs: 5, md: 6, lg: 7 }}
    >
      <MobileNavBar />
      <Box
        sx={{
          overflowX: "hidden",
        }}
      >
        <Stack
          mx="auto"
          maxWidth={{ md: 609, lg: "min(914px, 70%)" }}
          pt={14}
          zIndex={-1}
          gap={4}
          position="relative"
        >
          <StageItem at={0.46} dur={0.46}>
            <Box
              component="img" alt=""
              src="/DOSIJEM.svg"
              width="100%"
              sx={{
                opacity: 0,
                animation: "FadeIn 1s ease forwards",
              }}
            />
          </StageItem>
          <StageItem at={0.5} dur={0.46}>
            <Box
              component="img"
              alt={lang === "en" ? "About us" : "Про нас"}
              src={lang === "en" ? "/about-title-en.svg" : "/about-title.svg"}
              width="100%"
              sx={{
                opacity: 0,
                animation: "FadeIn 1s ease forwards",
                animationDelay: "0.2s",
              }}
            />
          </StageItem>
          <StageItem overlay at={0.38} dur={0.62} dist={0.9}>
            <Box
              component="img" alt=""
              src="/Woman.webp"
              height="100%"
              position="absolute"
              zIndex={1}
              bottom={{ md: "-30%", lg: "-25%" }}
              left="50%"
              sx={{
                transform: "translateX(-50%)",
                opacity: 0,
                animation: "FadeIn 0.5s ease forwards",
                animationDelay: "0.3s",
              }}
            />
          </StageItem>
        </Stack>
        <StageItem at={0.56} dur={0.44}>
          <PageContent dict={dict.about} />
        </StageItem>
      </Box>
    </Stack>
  );
}
