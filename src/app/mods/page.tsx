import { Box, Stack, Typography } from "@mui/material";

export default function Mods() {
  return (
    <>
      <Box
        flex={1}
        display={{ xs: "none", md: "flex" }}
        position="relative"
        borderRadius="30px"
        overflow="hidden"
        sx={{
          background: `
          radial-gradient(
            circle at bottom center,
            #D9D9D9 0%,
            #BB8EFF 100%
          )
        `,
          opacity: 0,
          animation: "FadeIn 1s ease forwards",
        }}
      >
        <Box
          component="img"
          src="/mods-img.svg"
          position="absolute"
          height="80%"
          width="100%"
          top="50%"
          left="50%"
          sx={{
            transform: "translate(-50%, -50%)",
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
            animationDelay: "0.3s",
          }}
        />
        <Stack
          spacing={2}
          borderRadius="30px 0 0 30px"
          maxWidth={{ md: "min(500px, 65%)", lg: "500px" }}
          px={2.5}
          pt={4}
          pb={2.5}
          sx={{
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            backgroundColor: "rgba(30, 29, 29, 0.5)",
            transform: "translateX(-100%)",
            animation: "SlideIn 1s ease forwards",
          }}
        >
          <Typography
            fontSize="30px"
            fontFamily="e-UkraineHead"
            fontWeight={700}
            sx={{
              opacity: 0,
              animation: "FadeSlideIn 1s ease forwards",
              animationDelay: "0.7s",
            }}
          >
            Втілимо ваш мод у реальність
          </Typography>
          <Typography
            display={{ xs: "none", md: "block" }}
            fontSize="16px"
            fontWeight={500}
            color="text.secondary"
            sx={{
              opacity: 0,
              animation: "FadeSlideIn 1s ease forwards",
              animationDelay: "0.9s",
            }}
          >
            У нашій команді розробників модів більшість має{" "}
            <Typography
              component="span"
              color="primary.main"
              fontSize="inherit"
            >
              понад 9k{" "}
            </Typography>
            годин у Minecraft. Ми не просто граємо ми створюємо улюблені моди та{" "}
            <Typography
              component="span"
              color="primary.main"
              fontSize="inherit"
            >
              чудово розуміємо
            </Typography>
            , як втілити твою ідею так, щоб результат{" "}
            <Typography
              component="span"
              color="primary.main"
              fontSize="inherit"
            >
              повністю{" "}
            </Typography>
            відповідав{" "}
            <Typography
              component="span"
              color="primary.main"
              fontSize="inherit"
            >
              твоєму баченню{" "}
            </Typography>
            .
          </Typography>
        </Stack>
      </Box>
      <Stack
        pt={10}
        pb={1.6}
        px={2}
        display={{ xs: "flex", md: "none" }}
        position="relative"
        spacing={3}
        zIndex={3}
      >
        <Typography
          zIndex={3}
          fontSize="28px"
          fontFamily="e-UkraineHead"
          fontWeight={700}
          sx={{
            opacity: 0,
            animation: "FadeSlideIn 1s ease forwards",
          }}
        >
          Втілимо ваш мод у реальність
        </Typography>
        <Box
          zIndex={3}
          borderRadius="23px"
          p={3}
          sx={{ backgroundColor: "background.default" }}
        >
          <Typography
            fontSize="16px"
            fontWeight={500}
            color="text.secondary"
            sx={{
              opacity: 0,
              animation: "FadeIn 1s ease forwards",
              animationDelay: "0.2s",
            }}
          >
            У нашій команді розробників модів більшість має{" "}
            <Typography
              component="span"
              color="primary.main"
              fontSize="inherit"
            >
              понад 9k{" "}
            </Typography>
            годин у Minecraft. Ми не просто граємо ми створюємо улюблені моди та{" "}
            <Typography
              component="span"
              color="primary.main"
              fontSize="inherit"
            >
              чудово розуміємо
            </Typography>
            , як втілити твою ідею так, щоб результат{" "}
            <Typography
              component="span"
              color="primary.main"
              fontSize="inherit"
            >
              повністю{" "}
            </Typography>
            відповідав{" "}
            <Typography
              component="span"
              color="primary.main"
              fontSize="inherit"
            >
              твоєму баченню{" "}
            </Typography>
            .
          </Typography>
        </Box>
        <Box
          position="absolute"
          width="100%"
          height="324px"
          top={-80}
          left={0}
          zIndex={1}
          sx={{
            background: `
          radial-gradient(
            circle at bottom center,
            #D9D9D9 0%,
            #BB8EFF 100%
          )
        `,
          }}
        >
          <Box
            component="img"
            src="/mods-img.svg"
            position="absolute"
            height="70%"
            width="70%"
            top="50%"
            left="50%"
            sx={{
              transform: "translate(-50%, -50%)",
            }}
          />
          <Box
            width="100%"
            height="100%"
            sx={{
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              backgroundColor: "rgba(13, 13, 13, 0.5)",
            }}
          />
        </Box>
      </Stack>
    </>
  );
}
