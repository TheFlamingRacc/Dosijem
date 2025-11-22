import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import DesktopFooter from "../components/Footer/DesktopFooter";

export default function ContactsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={{ xs: "100vh", lg: "calc(90vh - min(7vw, 10vh))" }}
        maxWidth={"90.5%"}
        px={{ md: "min(4vw, 8vh)", lg: "min(6vw, 12vh)" }}
        py={{ md: "min(12vw, 24vh)", lg: "min(7vw, 14vh)" }}
      >
        {children}
      </Box>
      <DesktopFooter />
    </>
  );
}
