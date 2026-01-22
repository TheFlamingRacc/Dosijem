import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export default function PrimaryDarkSpan({ children }: PropsWithChildren) {
  return (
    <Typography
      component="span"
      color="primary.dark"
      fontFamily="inherit"
      fontSize="inherit"
      fontWeight="inherit"
    >
      {children}
    </Typography>
  );
}
