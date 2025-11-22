import { Box } from "@mui/material";
import AuroraBackground from "../AuroraBackground";
import { PropsWithChildren } from "react";
import SidePanel from "../SidePanel";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={{ xs: "none", lg: "flex" }}
      alignItems={"center"}
      justifyContent={"center"}
      position={"relative"}
      py={"min(7vw, 10vh)"}
      px={"min(2vw, 4vh)"}
    >
      <Box
        overflow={"hidden"}
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        zIndex={"-1"}
        top={0}
      >
        <AuroraBackground speed={0.5} />
      </Box>
      <Box
        zIndex={1}
        height={"100%"}
        display={"flex"}
        overflow={"hidden"}
        borderRadius={"2vw"}
        sx={{
          backgroundColor: "background.main",
          aspectRatio: "16/9",
          outline: "solid rgba(217, 217, 217, 0.2) 20px",
        }}
      >
        <SidePanel>
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            position={"relative"}
            sx={{
              overflowY: "scroll",
              scrollbarWidth: 0,
              "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari, Edge
            }}
          >
            <Box>{children}</Box>
          </Box>
        </SidePanel>
      </Box>
    </Box>
  );
}
