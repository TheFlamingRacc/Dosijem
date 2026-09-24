import { Box, Typography, Stack } from "@mui/material";
import MobileNavBar from "@/app/components/SidePanel/MobileNavBar";
import SplitText from "../../components/SplitText";
import CountUp from "../../components/CountUp";
import { Dictionary } from "../dictionaries";
import StageItem from "../components/HomeAboutStage/StageItem";
import RealizeIdeaButton from "./components/RealizeIdeaButton";
import ReviewsAboutUs from "./components/ReviewsAboutUs";
import ShowMoreButton from "./components/ShowMoreButton";

type Props = {
  dict: Dictionary;
  /** Rendered next to /about on desktop: a reviews API failure must not break that page. */
  optional?: boolean;
};

// Home hero (formerly home/layout.tsx + home/page.tsx), shared by the
// /home route and the desktop home ↔ about stage.
export default function HomeContent({ dict, optional = false }: Props) {
  return (
    <Box
      height={{ xs: "100vh", md: "100vh", lg: "100%" }}
      minWidth="100%"
      position="relative"
      pt={{ xs: 0, md: "min(50px, 5vw)", lg: "min(120px, 6vw)" }}
      pl={{
        xs: 2,
        md: "min(4vw, 8vh)",
        lg: "clamp(0px, min(5vw, 10vh), 120px)",
      }}
      pr={{ xs: 2, md: 0 }}
      pb={{ xs: 0, md: 2, lg: "min(40px, 2vw)" }}
    >
      <MobileNavBar />
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
                component="img" alt=""
                src="/dosijem-icon.svg"
                width={51}
                height={51}
                sx={{
                  transform: "translateY(100%)",
                  animation: "SlideInTop 0.5s ease forwards",
                }}
              />
            </Box>
            <StageItem at={0} dur={0.42} dist={1.1}>
              <Box overflow="hidden">
                <Typography
                  component="h1"
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
            </StageItem>
            <StageItem at={0.04} dur={0.42} dist={1.1}>
              <Box overflow="hidden">
                <Box
                  component="img" alt=""
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
            </StageItem>
            <StageItem at={0.08} dur={0.42} dist={1.1}>
              <RealizeIdeaButton>{dict.home.realize_idea}</RealizeIdeaButton>
            </StageItem>
          </Stack>
          <Box flexWrap="wrap" display="flex" gap={2.7} mt="auto">
            <StageItem at={0.1} dur={0.45}>
              <ReviewsAboutUs dict={dict} optional={optional} />
            </StageItem>
            <StageItem
              at={0.15}
              dur={0.45}
              display={{ xs: "none", md: "block" }}
            >
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
                          component="img" alt=""
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
                          component="img" alt=""
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
            </StageItem>
          </Box>
        </Stack>
      </Box>
      <StageItem overlay at={0.06} dur={0.55} dist={1.2}>
        <Box
          component="img" alt=""
          src="/MarqueeHome.svg"
          position="absolute"
          height={{ xs: "calc(100vh - 60px - 218px)", md: "100%" }}
          right={{ xs: 46, md: 70, lg: "26%" }}
          top={{ xs: 60, md: 0 }}
          zIndex={1}
          sx={{
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
            animationDelay: "0.5s",
          }}
        />
      </StageItem>
      <StageItem overlay at={0.12} dur={0.62} dist={1.1}>
        <Box
          component="img" alt=""
          src="/Akrop.webp"
          position="absolute"
          display={{ xs: "none", lg: "block" }}
          height="100%"
          right={20}
          top={0}
          zIndex={1}
          sx={{
            opacity: 0,
            animation: "FadeSlideInRight 0.7s ease forwards",
            animationDelay: "0.6s",
          }}
        />
      </StageItem>
    </Box>
  );
}
