import { Box, Stack, Typography } from "@mui/material";

export default function Design() {
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
            #B39E8D 100%
          )
        `,
        }}
      >
        <Box
          component="img"
          src="/design-img.svg"
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
            Створимо унікальний дизайн для вашого сервера
          </Typography>
          <Typography
            display={{ xs: "none", md: "block" }}
            fontSize="16px"
            fontWeight={500}
            color="text.secondary"
          >
            <Typography component="span" color="#EADDD4" fontSize="inherit">
              DOSIJEM{" "}
            </Typography>
            постійно створює дизайни, маючи великий досвід і креативне бачення.
            Ми розробимо{" "}
            <Typography component="span" color="#EADDD4" fontSize="inherit">
              унікальний{" "}
            </Typography>
            і{" "}
            <Typography component="span" color="#EADDD4" fontSize="inherit">
              впізнаваний{" "}
            </Typography>
            стиль саме для вашого сервера, адже розуміємо, наскільки{" "}
            <Typography component="span" color="#EADDD4" fontSize="inherit">
              зовнішній вигляд впливає на сприйняття проєкту.
            </Typography>
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
          Створимо унікальний дизайн для вашого сервера
        </Typography>
        <Box
          zIndex={3}
          borderRadius="23px"
          p={3}
          sx={{ backgroundColor: "background.default" }}
        >
          <Typography fontSize="16px" fontWeight={500} color="text.secondary">
            <Typography component="span" color="#EADDD4" fontSize="inherit">
              DOSIJEM{" "}
            </Typography>
            постійно створює дизайни, маючи великий досвід і креативне бачення.
            Ми розробимо{" "}
            <Typography component="span" color="#EADDD4" fontSize="inherit">
              унікальний{" "}
            </Typography>
            і{" "}
            <Typography component="span" color="#EADDD4" fontSize="inherit">
              впізнаваний{" "}
            </Typography>
            стиль саме для вашого сервера, адже розуміємо, наскільки{" "}
            <Typography component="span" color="#EADDD4" fontSize="inherit">
              зовнішній вигляд впливає на сприйняття проєкту.
            </Typography>
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
            #B39E8D 100%
          )
        `,
          }}
        >
          <Box
            component="img"
            src="/design-img.svg"
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
