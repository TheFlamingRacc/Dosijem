import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";
export default function Span({ children }: PropsWithChildren) {
  return (
    <Typography
      component="span"
      fontWeight={500}
      fontSize="inherit"
      color="#fff"
    >
      {children}
    </Typography>
  );
}
