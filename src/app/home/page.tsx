import { Box, Button, Stack, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ShowMoreButton from "./components/ShowMoreButton";
import ReviewsAboutUs from "./components/ReviewsAboutUs";
import CountUp from "./components/CountUp";

export default function Home() {
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
          <Box
            display={{ xs: "block", md: "none" }}
            component="img"
            src="/dosijem-icon.svg"
            width={51}
            height={51}
          />
          <Typography
            fontFamily="e-UkraineHead"
            fontSize="1.25rem"
            color="white"
          >
            Твоя ідея{" "}
            <Typography
              component="span"
              color="primary.dark"
              fontSize="inherit"
              fontFamily="inherit"
            >
              реальна
            </Typography>
            <Typography
              component="span"
              display={{ xs: "none", md: "inline" }}
              fontSize="inherit"
              fontFamily="inherit"
              color="inherit"
            >
              {" "}
              разом з
            </Typography>
            <Typography
              component="span"
              display={{ xs: "block", md: "none" }}
              fontSize="inherit"
              fontFamily="inherit"
              color="inherit"
            >
              разом з НАМИ
            </Typography>
          </Typography>

          <Box
            component="img"
            src="/DOSIJEM.svg"
            display={{ xs: "none", md: "block" }}
            width={{ md: 391, lg: "min(570px, 40vw)" }}
          />
          <Button
            color="primary"
            variant="contained"
            sx={{
              borderRadius: "100px",
              fontSize: { xs: "1rem", md: "1.25rem", lg: 25 },
              height: { xs: 32, md: 44, lg: 60 },
              width: { xs: 207, md: 258, lg: 355 },
              display: "flex",
              alignItems: "center",
              padding: { xs: 0, lg: "15px 21px" },
              transition: "all 0.4s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            startIcon={
              <Box
                height={29}
                width={29}
                borderRadius={50}
                padding={0.7}
                display={{ xs: "none", lg: "flex" }}
                sx={{ backgroundColor: "black", color: "white" }}
              >
                <RocketLaunchIcon sx={{ width: "100%", height: "100%" }} />
              </Box>
            }
          >
            Реалізувати ідею
          </Button>
        </Stack>
        <Box flexWrap="wrap" display="flex" gap={2.7} mt="auto">
          <ReviewsAboutUs />
          <Stack gap={2} display={{ xs: "none", md: "flex" }}>
            <Typography
              fontSize="1rem"
              fontFamily="e-UkraineHead"
              color="#A8A3B3"
            >
              ПРО НАС
            </Typography>
            <Stack
              sx={{ backgroundColor: "background.default" }}
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
                      src="./wrenchs.svg"
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
                    }}
                  >
                    <Typography color="#A5A1AF" fontSize="0.75rem">
                      ВТІЛЕНИХ ІДЕЙ
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
                      src="./streamline.svg"
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
                    }}
                  >
                    <Typography color="#A5A1AF" fontSize="0.75rem">
                      У КОМАНДІ
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <ShowMoreButton about />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
