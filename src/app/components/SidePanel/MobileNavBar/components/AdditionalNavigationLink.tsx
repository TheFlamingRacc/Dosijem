"use client";

import { Box, Typography } from "@mui/material";
import { useRouter, usePathname, useParams } from "next/navigation";

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

export default function AdditionalNavigationLink({ component }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const { lang } = useParams();
  const isCurrentLocation = pathname.includes(`/${component}`);
  const isCharity = component === "charitybox";

  return (
    <Typography
      fontFamily="e-UkraineHead"
      fontWeight={500}
      color={
        isCharity ? "#E4D873" : isCurrentLocation ? "white" : "text.secondary"
      }
      fontSize="0.875rem"
      display="flex"
      alignItems="center"
      gap={1}
      sx={{ cursor: "pointer" }}
      onClick={() =>
        isCharity
          ? window.open(
              "https://send.monobank.ua/jar/4KSgHrLD2f",
              "_blank",
              "noopener,noreferrer",
            )
          : router.push(`/${lang}/${component}`)
      }
    >
      {titles[lang as "uk" | "en"][component]}
      {isCharity && <Box component="img" src="/ua-icon.svg" width="1rem" />}
    </Typography>
  );
}
