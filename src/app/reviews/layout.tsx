import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import MobileNavBar from "../components/SidePanel/MobileNavBar";
import Footer from "../components/Footer";

export default function FeedbacksLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Box width="100%" height="100%">
        <MobileNavBar px={2} colors="default" />
        {children}
      </Box>
      <Footer />
    </>
  );
}
