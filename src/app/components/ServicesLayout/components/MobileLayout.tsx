import { ServicesProps } from "..";
import { Stack, Typography, Box } from "@mui/material";

export default function MobileLayout({
  children,
  title,
  img,
  color,
}: ServicesProps) {
  return (
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
        {title}
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
          {children}
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
            ${color} 100%
          )
        `,
        }}
      >
        <Box
          component="img"
          src={img}
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
  );
}
