import { Box } from "@mui/material";
import SidePanel from "../SidePanel";
import { PropsWithChildren } from "react";

export default function TabletLayout({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{ backgroundColor: "var(--bg-main)" }}
      height="100vh"
      width="100vw"
      display={{ xs: "none", md: "flex", lg: "none" }}
    >
      <SidePanel />
      <Box
        width="100%"
        sx={{
          overflowY: "scroll",
          scrollbarWidth: 0,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
