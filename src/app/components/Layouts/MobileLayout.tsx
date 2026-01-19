import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export default function MobileLayout({ children }: PropsWithChildren) {
  return (
    <Box width="100%" maxWidth="100vw" display={{ sm: "block", md: "none" }}>
      {children}
    </Box>
  );
}
