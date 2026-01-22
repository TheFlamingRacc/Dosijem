import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import { Box, Typography, Stack } from "@mui/material";
import SplitText from "../../components/SplitText";
import CountUp from "../../components/CountUp";
import RealizeIdeaButton from "./components/RealizeIdeaButton";
import ReviewsAboutUs from "./components/ReviewsAboutUs";
import ShowMoreButton from "./components/ShowMoreButton";

export default async function Home({ params }: PageProps<"/[lang]/home">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <Box
      height="100%"
      width="100%"
      zIndex={2}
      position="relative"
      pt={{ xs: 10, md: 0 }}
    >
      <Stack
        justifyContent="space-between"
        height={{ xs: "calc(100% - 60px)", md: "100%" }}
      >
        <Stack spacing={{ xs: 2, md: 4, lg: "min(40px, 2vw)" }}>
          <Box overflow="hidden">
            <Box
              display={{ xs: "block", md: "none" }}
              component="img"
              src="/dosijem-icon.svg"
              width={51}
              height={51}
              sx={{
                transform: "translateY(100%)",
                animation: "SlideInTop 0.5s ease forwards",
              }}
            />
          </Box>
          <Box overflow="hidden">
            <Typography
              fontFamily="e-UkraineHead"
              fontSize="1.25rem"
              color="white"
              sx={{
                transform: "translateY(100%)",
                animation: "SlideInTop 0.7s ease forwards",
              }}
            >
              {dict.home.main_title.part1}{" "}
              <Typography
                component="span"
                color="primary.dark"
                fontSize="inherit"
                fontFamily="inherit"
              >
                {dict.home.main_title.part2}
              </Typography>
              <Typography
                component="span"
                display={{ xs: "none", md: "inline" }}
                fontSize="inherit"
                fontFamily="inherit"
                color="inherit"
              >
                {" "}
                {dict.home.main_title.part3}
              </Typography>
              <Typography
                component="span"
                display={{ xs: "block", md: "none" }}
                fontSize="inherit"
                fontFamily="inherit"
                color="inherit"
              >
                {dict.home.main_title.part4}
              </Typography>
            </Typography>
          </Box>
          <Box overflow="hidden">
            <Box
              component="img"
              src="/DOSIJEM.svg"
              display={{ xs: "none", md: "block" }}
              width={{ md: 391, lg: "min(570px, 40vw)" }}
              sx={{
                transform: "translateY(100%)",
                animation: "SlideInTop 0.7s ease forwards",
                animationDelay: "0.2s",
              }}
            />
          </Box>
          <RealizeIdeaButton>{dict.home.realize_idea}</RealizeIdeaButton>
        </Stack>
        <Box flexWrap="wrap" display="flex" gap={2.7} mt="auto">
          <ReviewsAboutUs dict={dict} />
          <Stack gap={2} display={{ xs: "none", md: "flex" }}>
            <SplitText
              fontSize="1rem"
              fontFamily="e-UkraineHead"
              color="#A8A3B3"
            >
              {dict.home.about_us.title}
            </SplitText>
            <Stack
              sx={{
                backgroundColor: "background.default",
                opacity: 0,
                animation: "FadeIn 1s ease forwards",
                animationDelay: "0.2s",
              }}
              borderRadius="23px"
              spacing={1}
              p={1}
            >
              <Box display="flex" gap={1.2} height={144} width={333}>
                <Stack
                  width="100%"
                  borderRadius="23px"
                  spacing={0.4}
                  height="100%"
                  overflow="hidden"
                  sx={{
                    opacity: 0,
                    animation: "FadeIn 1s ease forwards",
                    animationDelay: "0.4s",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height={99.5}
                    gap={0.5}
                    width="100%"
                    sx={{ backgroundColor: "background.paper" }}
                  >
                    <Typography
                      fontWeight={500}
                      fontFamily="e-Ukraine"
                      fontSize="2.5rem"
                    >
                      +<CountUp from={0} to={99} />
                    </Typography>
                    <Box
                      height={30}
                      width={30}
                      component="img"
                      src="/wrenchs.svg"
                    />
                  </Box>
                  <Box
                    height={40.5}
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      backgroundColor: "background.paper",
                      opacity: 0,
                      animation: "FadeIn 1s ease forwards",
                      animationDelay: "0.6s",
                    }}
                  >
                    <Typography color="#A5A1AF" fontSize="0.75rem">
                      {dict.home.about_us.realized_ideas}
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  width="100%"
                  borderRadius="23px"
                  spacing={0.4}
                  height="100%"
                  overflow="hidden"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height={99.5}
                    gap={1}
                    width="100%"
                    sx={{ backgroundColor: "background.paper" }}
                  >
                    <Typography
                      fontWeight={500}
                      fontFamily="e-Ukraine"
                      fontSize="2.5rem"
                    >
                      <CountUp from={0} to={14} />
                    </Typography>
                    <Box
                      height={30}
                      width={30}
                      component="img"
                      src="/streamline.svg"
                    />
                  </Box>
                  <Box
                    height={40.5}
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      backgroundColor: "background.paper",
                      opacity: 0,
                      animation: "FadeIn 1s ease forwards",
                      animationDelay: "0.6s",
                    }}
                  >
                    <Typography color="#A5A1AF" fontSize="0.75rem">
                      {dict.home.about_us.in_the_team}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box
                sx={{
                  opacity: 0,
                  animation: "FadeIn 1s ease forwards",
                  animationDelay: "0.8s",
                }}
              >
                <ShowMoreButton about>
                  {dict.home.see_more_button}
                </ShowMoreButton>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
