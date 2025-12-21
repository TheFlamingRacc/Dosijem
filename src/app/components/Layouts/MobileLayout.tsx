import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export default function MobileLayout({ children }: PropsWithChildren) {
  return (
    <Box width="100%" display={{ sm: "block", md: "none" }}>
      {children}
    </Box>
  );
}
