import { Box, Typography } from "@mui/material";
import DomeGallery from "./components/DomeGallery";
import TelegramLink from "./components/TelegramLink";

export default function Feedbacks() {
  return (
    <Box width="100%" height={{ xs: "100vh", md: "100%" }} position="relative">
      <DomeGallery
        maxVerticalRotationDeg={0}
        fit={0.6}
        grayscale={false}
        images={["/dosijem-logo.svg", "/feedback.svg"]}
        minRadius={400}
        maxRadius={600}
      />
      <Typography
        display={{ xs: "none", md: "flex" }}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        zIndex={50}
        position="absolute"
        fontFamily="e-UkraineHead"
        bottom={30}
        fontSize="2rem"
        component="span"
        fontWeight={700}
        gap={1}
        left="50%"
        noWrap
        sx={{
          transform: "translateX(-50%)",
          filter: `
    drop-shadow(0 0 30px var(--bg-main))
    drop-shadow(0 0 30px var(--bg-main))
    drop-shadow(0 0 30px var(--bg-main))
    drop-shadow(0 0 30px var(--bg-main))
  `,
        }}
      >
        Це наша сфера{" "}
        <Typography
          component="span"
          color="primary.main"
          fontSize="inherit"
          fontFamily="inherit"
          fontWeight="inherit"
        >
          відгуків
        </Typography>{" "}
        <Typography component="span" color="#C2C2C2">
          Усі відгуки беруться з <TelegramLink />
          -каналу з відгуками клієнтів
        </Typography>
      </Typography>
      <Typography
        display={{ xs: "block", md: "none" }}
        color="primary.main"
        fontSize="1rem"
        position="absolute"
        fontWeight={700}
        top={100}
        left={20}
      >
        Відгуки
      </Typography>
      <Typography
        display={{ xs: "block", md: "none" }}
        position="absolute"
        top={125}
        left={20}
        fontWeight={700}
        fontFamily="e-UkraineHead"
        fontSize="1.3rem"
      >
        Це наша сфера{" "}
        <Typography
          component="span"
          color="primary.main"
          fontSize="inherit"
          fontWeight="inherit"
        >
          відгуків
        </Typography>
      </Typography>
      <Typography
        display={{ xs: "block", md: "none" }}
        position="absolute"
        bottom={100}
        left={20}
        fontSize="0.9rem"
        color="#C2C2C2"
      >
        Усі відгуки беруться з <TelegramLink />
        -каналу з відгуками клієнтів
      </Typography>
    </Box>
  );
}
