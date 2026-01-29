"use client";

import { Box, Stack, Typography } from "@mui/material";
import CustomLink from "./components/CustomLink";
import { useParams } from "next/navigation";
import { Dictionary } from "../../dictionaries";

type Props = {
  dict: Dictionary;
};

export default function TabletFooter({ dict }: Props) {
  const { lang } = useParams();
  const language = lang && lang !== "undefined" ? lang : "uk";

  return (
    <Box
      px={4}
      py={6}
      position="relative"
      overflow="hidden"
      display={{ xs: "none", md: "block", lg: "none" }}
      borderRadius="min(3vw, 6vh) min(3vw, 6vh) 0 0"
      sx={{
        backgroundColor: "background.default",
        "@media(max-width: 650px)": { px: 1, py: 3 },
      }}
    >
      <Box
        zIndex={2}
        position="relative"
        display="flex"
        justifyContent="space-between"
      >
        <Stack justifyContent="space-between">
          <Box component="img" src="/DOSIJEM.svg" alt="DOSIJEM" width={150} />
          <Typography color="text.secondary" fontSize="1rem" fontWeight={500}>
            © 2025. {dict.footer.rights}
          </Typography>
        </Stack>
        <Stack>
          <CustomLink url="https://send.monobank.ua/jar/3w2wqkKxtd" newTab>
            {dict.footer.links.charitybox}
          </CustomLink>
          <CustomLink url={`/${language}/contacts`}>
            {dict.footer.links.contacts}
          </CustomLink>
          <CustomLink url={`/${language}/policies/privacy-policy`}>
            {dict.footer.links.privacy}
          </CustomLink>
        </Stack>
        <Stack justifyContent="space-between" alignItems="flex-end">
          <Box display="flex" justifyContent="space-between" gap={1.5}>
            <CustomLink
              url="https://mail.google.com/mail/?view=cm&fs=1&to=dosijemhelp@gmail.com"
              newTab
            >
              EMAIL
            </CustomLink>
            <CustomLink url="https://t.me/DOSIJEM_channel" newTab>
              TELEGRAM
            </CustomLink>
          </Box>
          <Typography
            fontSize="1rem"
            color="text.secondary"
            alignItems="center"
            display="flex"
            gap="0.2rem"
            noWrap
            fontWeight={500}
          >
            <Box height="1rem" component="img" src="/dosijem-logo.svg" />
            made in
            <Typography
              fontSize="1rem"
              component="span"
              color="primary.main"
              fontWeight={500}
            >
              DOSIJEM
            </Typography>
          </Typography>
        </Stack>
      </Box>
      <Box
        zIndex={1}
        component="img"
        height={110}
        position="absolute"
        src="/footer-bg.svg"
        bottom="-60px"
        left="-2%"
        aria-hidden
        draggable={false}
      />
    </Box>
  );
}
