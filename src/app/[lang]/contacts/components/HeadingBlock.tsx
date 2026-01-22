import { Box, Typography, Stack } from "@mui/material";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  img: string;
  title: string;
  description: string;
};

export default function HeadingBlock({
  img,
  title,
  description,
  children,
}: Props) {
  return (
    <Stack
      justifyContent="space-between"
      position="relative"
      spacing={1}
      width={{ xs: "250px", md: "220px", lg: "250px" }}
    >
      <Box
        borderRadius="25px"
        border="solid rgba(255, 255, 255, 0.2) 1px"
        p={1.4}
        display="flex"
        alignItems="flex-end"
        gap={1.4}
      >
        <Box
          height="4.6875rem"
          borderRadius={{
            xs: "15px",
            md: "min(1.4vw, 2.8vh)",
            lg: "15px",
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            aspectRatio: "1",
            backgroundColor: "background.default",
          }}
        >
          <Box
            height="80%"
            component="img"
            src={img}
            sx={{
              aspectRatio: 1,
            }}
          />
        </Box>
        <Typography
          fontFamily="Manrope"
          display="flex"
          flexDirection="column"
          letterSpacing="-5%"
          fontSize={{ xs: "0.9375rem", md: "0.75rem", lg: "0.9375rem" }}
        >
          {title}
          <Typography
            component="span"
            fontFamily="Manrope"
            fontSize={{ xs: "0.9375rem", md: "0.75rem", lg: "0.9375rem" }}
            letterSpacing="-5%"
            noWrap
          >
            {description}
          </Typography>
        </Typography>
        <Box
          component="img"
          src="/dosijem-logo.svg"
          width="1.5rem"
          height="1.5rem"
          position="absolute"
          top={14}
          right={14}
        />
      </Box>
      <Stack spacing={1} alignSelf={{ xs: "center", md: "flex-start" }}>
        {children}
      </Stack>
    </Stack>
  );
}
