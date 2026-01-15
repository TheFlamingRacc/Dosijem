import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export default function PrimarySpan({ children }: PropsWithChildren) {
  return (
    <Typography
      component="span"
      color="primary.main"
      fontFamily="inherit"
      fontSize="inherit"
    >
      {children}
    </Typography>
  );
}
