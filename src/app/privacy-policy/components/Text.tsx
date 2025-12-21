import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Text({ children }: PropsWithChildren) {
  return (
    <Typography
      component="span"
      fontWeight={300}
      fontSize={{ xs: "0.915rem", md: "1rem", lg: "1.25rem" }}
      color="text.secondary"
    >
      {children}
    </Typography>
  );
}
