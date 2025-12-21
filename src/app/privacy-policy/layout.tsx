import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import MobileNavBar from "../components/SidePanel/MobileNavBar";
import Footer from "../components/Footer";

export default function PrivacyPolicyLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Box
        width="100%"
        minHeight="100vh"
        px={{ xs: 2, md: 4, lg: 9 }}
        py={{ xs: 0, md: 5, lg: 12 }}
        pb={{ xs: 5 }}
      >
        <MobileNavBar colors="default" />
        {children}
      </Box>
      <Footer />
    </>
  );
}
