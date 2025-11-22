import { Box } from "@mui/material";
import SidePanel from "../SidePanel";
import { PropsWithChildren } from "react";

export default function TabletLayout({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{ backgroundColor: "background.main" }}
      height={"100vh"}
      display={{ xs: "none", md: "flex", lg: "none" }}
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
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Box>{children}</Box>
        </Box>
      </SidePanel>
    </Box>
  );
}
