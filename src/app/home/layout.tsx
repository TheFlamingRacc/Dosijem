import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Box minHeight="100%" maxWidth="100vw" px={2}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
