import { Stack, Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  title: string;
};

export default function StatsBlock({ children, title }: Props) {
  return (
    <Stack
      spacing={0.4}
      width={161}
      borderRadius="23px"
      overflow="hidden"
      sx={{
        "@media (max-width: 370px)": {
          width: "130px",
          borderRadius: '18px'
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={99.5}
        width="100%"
        sx={{
          backgroundColor: "background.paper",
          "@media (max-width: 370px)": {
            height: "75px",
          },
        }}
      >
        {children}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={40.5}
        width="100%"
        sx={{
          backgroundColor: "background.paper",
          "@media (max-width: 370px)": {
            height: "30px",
          },
        }}
      >
        <Typography
          fontFamily="e-UkraineHead"
          fontSize="0.75rem"
          sx={{
            "@media (max-width: 370px)": {
              fontSize: "0.65rem",
            },
          }}
          color="text.primary"
        >
          {title}
        </Typography>
      </Box>
    </Stack>
  );
}
