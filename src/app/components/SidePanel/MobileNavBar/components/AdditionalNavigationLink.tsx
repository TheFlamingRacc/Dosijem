"use client";

import { Box, Typography } from "@mui/material";
import { usePathname, useParams } from "next/navigation";
import NextLink from "next/link";

type Props = {
  component: "about" | "reviews" | "contacts" | "charitybox";
};

const titles = {
  uk: {
    about: "ПРО НАС",
    reviews: "ВІДГУКИ",
    contacts: "КОНТАКТИ",
    charitybox: "БЛАГОБАНКА",
  },
  en: {
    about: "ABOUT US",
    reviews: "FEEDBACKS",
    contacts: "CONTACTS",
    charitybox: "CHARITYBOX",
  },
};

const CHARITY_URL = "https://send.monobank.ua/jar/3w2wqkKxtd";

export default function AdditionalNavigationLink({ component }: Props) {
  const pathname = usePathname();

  const { lang } = useParams();
  const language = lang && lang !== "undefined" ? lang : "uk";

  const isCurrentLocation = pathname.includes(`/${component}`);
  const isCharity = component === "charitybox";

  const linkProps = isCharity
    ? {
        component: "a" as const,
        href: CHARITY_URL,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : { component: NextLink, href: `/${language}/${component}` };

  return (
    <Typography
      {...linkProps}
      fontFamily="e-UkraineHead"
      fontWeight={500}
      color={
        isCharity ? "#E4D873" : isCurrentLocation ? "white" : "text.secondary"
      }
      fontSize="0.875rem"
      display="flex"
      alignItems="center"
      gap={1}
      sx={{ textDecoration: "none" }}
    >
      {titles[language as "uk" | "en"][component]}
      {isCharity && <Box component="img" src="/ua-icon.svg" width="1rem" />}
    </Typography>
  );
}
