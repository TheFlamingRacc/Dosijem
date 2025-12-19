import { Box } from "@mui/material";
import AuroraBackground from "../AuroraBackground";
import { PropsWithChildren } from "react";
import SidePanel from "../SidePanel";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Box
      width="100%"
      height="100vh"
      display={{ xs: "none", lg: "flex" }}
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Box overflow="hidden" position="absolute" width="100%" height="100%">
        <AuroraBackground speed={0.5} />
      </Box>
      <Box
        zIndex={1}
        display="flex"
        maxHeight="min(calc(100vh - 50px), 750px)"
        maxWidth="calc(100vw - 50px)"
        overflow="hidden"
        borderRadius="2vw"
        sx={{
          backgroundColor: "var(--bg-main)",
          aspectRatio: "16/9",
          outline: "solid rgba(217, 217, 217, 0.2) 20px",
        }}
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
    </Box>
  );
}
