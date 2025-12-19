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
            #B6865E 100%
          )
        `,
        }}
      >
        <Box
          component="img"
          src="/skins-img.svg"
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
            Намалюємо для вас ваш власний скін
          </Typography>
          <Typography
            display={{ xs: "none", md: "block" }}
            fontSize="16px"
            fontWeight={500}
            color="text.secondary"
          >
            Над{" "}
            <Typography component="span" color="#B6865E" fontSize="inherit">
              усіма{" "}
            </Typography>
            скінами, які нам довіряють, працюють найкращі дизайнери та арти у{" "}
            <Typography component="span" color="#B6865E" fontSize="inherit">
              DOSIJEM
            </Typography>
            вони вміють як ніхто втілювати{" "}
            <Typography component="span" color="#B6865E" fontSize="inherit">
              ваші ідеї{" "}
            </Typography>
            та{" "}
            <Typography component="span" color="#B6865E" fontSize="inherit">
              побажання{" "}
            </Typography>
            в унікальні скіни, створені{" "}
            <Typography component="span" color="#B6865E" fontSize="inherit">
              саме для вас
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
          Намалюємо для вас ваш власний скін
        </Typography>
        <Box
          zIndex={3}
          borderRadius="23px"
          p={3}
          sx={{ backgroundColor: "background.default" }}
        >
          <Typography fontSize="16px" fontWeight={500} color="text.secondary">
            Над{" "}
            <Typography component="span" color="#B6865E" fontSize="inherit">
              усіма{" "}
            </Typography>
            скінами, які нам довіряють, працюють найкращі дизайнери та арти у{" "}
            <Typography component="span" color="#B6865E" fontSize="inherit">
              DOSIJEM
            </Typography>
            вони вміють як ніхто втілювати{" "}
            <Typography component="span" color="#B6865E" fontSize="inherit">
              ваші ідеї{" "}
            </Typography>
            та{" "}
            <Typography component="span" color="#B6865E" fontSize="inherit">
              побажання{" "}
            </Typography>
            в унікальні скіни, створені{" "}
            <Typography component="span" color="#B6865E" fontSize="inherit">
              саме для вас
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
            #3F3F4B 100%
          )
        `,
          }}
        >
          <Box
            component="img"
            src="/skins-img.svg"
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
