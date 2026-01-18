import { Box, Button, Stack, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ShowMoreButton from "../components/ShowMoreButton";
import ReviewsAboutUs from "../components/ReviewsAboutUsClient";
import CountUp from "../components/CountUp";
import SplitText from "@/app/components/SplitText";

export default function HomeEn() {
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
              Your idea comes to{" "}
              <Typography
                component="span"
                color="primary.dark"
                fontSize="inherit"
                fontFamily="inherit"
              >
                life
              </Typography>
              <Typography
                component="span"
                display={{ xs: "none", md: "inline" }}
                fontSize="inherit"
                fontFamily="inherit"
                color="inherit"
              >
                {" "}
                with
              </Typography>
              <Typography
                component="span"
                display={{ xs: "block", md: "none" }}
                fontSize="inherit"
                fontFamily="inherit"
                color="inherit"
              >
                with US
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
          <Button
            color="primary"
            variant="contained"
            sx={{
              borderRadius: "100px",
              fontSize: { md: "1.25rem", lg: 25 },
              height: { xs: 32, md: 44, lg: 60 },
              width: { xs: 207, md: 258, lg: 355 },
              display: "flex",
              alignItems: "center",
              padding: { xs: 0, lg: "15px 21px" },
              transition: "all 0.4s ease",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "primary.main",
              },
              opacity: 0,
              animation: "FadeIn 1s ease forwards",
              animationDelay: "0.7s",
            }}
            startIcon={
              <Box
                height={29}
                width={29}
                borderRadius="50%"
                padding={0.7}
                display={{ xs: "none", lg: "flex" }}
                sx={{ backgroundColor: "black", color: "white" }}
              >
                <RocketLaunchIcon sx={{ width: "100%", height: "100%" }} />
              </Box>
            }
          >
            Realize Idea
          </Button>
        </Stack>
        <Box flexWrap="wrap" display="flex" gap={2.7} mt="auto">
          <ReviewsAboutUs />
          <Stack gap={2} display={{ xs: "none", md: "flex" }}>
            <SplitText
              fontSize="1rem"
              fontFamily="e-UkraineHead"
              color="#A8A3B3"
            >
              ABOUT US
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
                      REALIZED IDEAS
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
                      IN THE TEAM
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
                <ShowMoreButton about />
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
