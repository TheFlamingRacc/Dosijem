import { Box, Stack, Typography } from "@mui/material";

export default function Plugins() {
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
            #D99592 100%
          )
        `,
        }}
      >
        <Box
          component="img"
          src="/plugin-img.svg"
          position="absolute"
          height="80%"
          width="100%"
          top="50%"
          left="50%"
          sx={{
            transform: "translate(-50%, -50%)",
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
          }}
        >
          <Typography
            fontSize="30px"
            fontFamily="e-UkraineHead"
            fontWeight={700}
          >
            Втілимо ваш плагін у реальність
          </Typography>
          <Typography
            display={{ xs: "none", md: "block" }}
            fontSize="16px"
            fontWeight={500}
            color="text.secondary"
          >
            Коли ви надсилаєте нам заявку, ми{" "}
            <Typography component="span" color="#D99592" fontSize="inherit">
              уважно{" "}
            </Typography>
            ознайомлюємося з вашою ідеєю, щоб{" "}
            <Typography component="span" color="#D99592" fontSize="inherit">
              повністю зрозуміти її задум
            </Typography>
            . Протягом усього процесу розробки ми{" "}
            <Typography component="span" color="#D99592" fontSize="inherit">
              дбаємо{" "}
            </Typography>
            про те, щоб результат не лише точно відображав вашу ідею, а й робив
            її ще{" "}
            <Typography component="span" color="#D99592" fontSize="inherit">
              яскравішою{" "}
            </Typography>
            та{" "}
            <Typography component="span" color="#D99592" fontSize="inherit">
              виразнішою
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
        >
          Втілимо ваш плагін у реальність
        </Typography>
        <Box
          zIndex={3}
          borderRadius="23px"
          p={3}
          sx={{ backgroundColor: "background.default" }}
        >
          <Typography fontSize="16px" fontWeight={500} color="text.secondary">
            Коли ви надсилаєте нам заявку, ми{" "}
            <Typography component="span" color="#D99592" fontSize="inherit">
              уважно{" "}
            </Typography>
            ознайомлюємося з вашою ідеєю, щоб{" "}
            <Typography component="span" color="#D99592" fontSize="inherit">
              повністю зрозуміти її задум
            </Typography>
            . Протягом усього процесу розробки ми{" "}
            <Typography component="span" color="#D99592" fontSize="inherit">
              дбаємо{" "}
            </Typography>
            про те, щоб результат не лише точно відображав вашу ідею, а й робив
            її ще{" "}
            <Typography component="span" color="#D99592" fontSize="inherit">
              яскравішою{" "}
            </Typography>
            та{" "}
            <Typography component="span" color="#D99592" fontSize="inherit">
              виразнішою
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
            #D99592 100%
          )
        `,
          }}
        >
          <Box
            component="img"
            src="/plugin-img.svg"
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
