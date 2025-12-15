import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export default function MobileLayout({ children }: PropsWithChildren) {
  return (
    <Box width="100%" minHeight="100vh" display={{ sm: "block", md: "none" }}>
      {children}
    </Box>
  );
}
