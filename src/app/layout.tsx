import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import MainLayout from "./components/Layouts/MainLayout";
import TabletLayout from "./components/Layouts/TabletLayout";
import MobileLayout from "./components/Layouts/MobileLayout";
// import AdaptiveLayout from "./components/Layouts/AdaptiveLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dosijem",
  description: "Dosijem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable}`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <MainLayout>{children}</MainLayout>
            <TabletLayout>{children}</TabletLayout>
            <MobileLayout>{children}</MobileLayout>
            {/* <AdaptiveLayout>{children}</AdaptiveLayout> */}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
