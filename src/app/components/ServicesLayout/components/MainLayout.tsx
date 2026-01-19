import { Box, Typography, Stack } from "@mui/material";
import { ServicesProps } from "..";
import SplitText from "../../SplitText";

export default function MainLayout({
  children,
  color,
  title,
  img,
}: ServicesProps) {
  return (
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
            ${color} 100%
          )
        `,
        opacity: 0,
        animation: "FadeIn 1s ease forwards",
      }}
    >
      <Box
        component="img"
        src={img}
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
        <SplitText fontSize="30px" fontFamily="e-UkraineHead" fontWeight={700}>
          {title}
        </SplitText>
        <Typography
          display={{ xs: "none", md: "block" }}
          fontSize="1rem"
          fontWeight={500}
          color="text.secondary"
          sx={{
            opacity: 0,
            animation: "FadeSlideIn 1s ease forwards",
            animationDelay: "0.9s",
          }}
        >
          {children}
        </Typography>
      </Stack>
    </Box>
  );
}
