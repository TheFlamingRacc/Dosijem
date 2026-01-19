import { Box } from "@mui/material";
import SidePanel from "../SidePanel";
import { PropsWithChildren } from "react";

export default function TabletLayout({ children }: PropsWithChildren) {
  return (
    <Box
      height="100vh"
      width="100vw"
      display={{ xs: "none", md: "flex", lg: "none" }}
    >
      <SidePanel />
      <Box
        width="100%"
        sx={{
          overflowY: "scroll",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
