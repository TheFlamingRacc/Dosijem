import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import Footer from "../components/Footer";

export default function ContactsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        minHeight="100%"
        minWidth="100%"
        px={{ md: "min(4vw, 8vh)", lg: "min(6vw, 12vh)" }}
        py={{ md: "min(12vw, 24vh)", lg: "min(7vw, 14vh)" }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}
