import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import AdaptiveLayout from "./components/Layouts/AdaptiveLayout";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "./[lang]/seo";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const description =
  "DOSIJEM - цифрова студія повного циклу, що створює технологічні та ігрові рішення для онлайн-проєктів Minecraft ком’юніті і не тільки. Ми перетворюємо ідеї на стабільні, масштабовані продукти - від концепції до запуску та розвитку...";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DOSIJEM — цифрова студія розробки для Minecraft",
    template: "%s | DOSIJEM",
  },
  description,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "uk_UA",
    images: [{ url: OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get("x-locale") ?? "uk";

  return (
    <html lang={locale}>
      <body className={manrope.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AdaptiveLayout>{children}</AdaptiveLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
