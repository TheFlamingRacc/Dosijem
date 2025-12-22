import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import MobileNavBar from "../components/SidePanel/MobileNavBar";
import Footer from "../components/Footer";

export default function ReviewsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Box width="100%" height="100%">
        <Box position="sticky" top={20} zIndex={100} px={{ xs: 2, md: 0 }}>
          <MobileNavBar colors="default" />
        </Box>
        {children}
      </Box>
      <Footer />
    </>
  );
}
