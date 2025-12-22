import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import MobileNavBar from "../components/SidePanel/MobileNavBar";
import Footer from "../components/Footer";

export default function ReviewsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Box width="100%" height="100%" px={2}>
        <MobileNavBar colors="default" />
        {children}
      </Box>
      <Footer />
    </>
  );
}
