import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export default function SectionHeader({ children }: PropsWithChildren) {
  return (
    <Typography
      component="span"
      fontSize={{ xs: "1.5rem", md: "2rem", lg: "2.5rem" }}
      fontWeight={400}
      color="#fff"
      py={{ xs: 3, md: 0 }}
    >
      {children}
    </Typography>
  );
}
