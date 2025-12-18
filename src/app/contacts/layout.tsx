import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import MobileNavBar from "../components/SidePanel/MobileNavBar";

export default function ContactsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        minHeight="100%"
        minWidth="100%"
        pl={{
          xs: 2,
          md: "min(4vw, 8vh)",
          lg: "clamp(0px, min(5vw, 10vh), 120px)",
        }}
        pr={{ xs: 2, md: 0 }}
        pb={{ xs: 6, md: "min(12vw, 24vh)", lg: "min(7vw, 14vh)" }}
      >
        <MobileNavBar colors="default" />
        {children}
      </Box>
      <Footer />
    </>
  );
}
