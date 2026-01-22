"use client";

import { Box, Stack, Typography } from "@mui/material";
import CustomLink from "./components/CustomLink";
import { useParams } from "next/navigation";
import { Dictionary } from "../../dictionaries";

type Props = {
  dict: Dictionary;
};

export default function DesktopFooter({ dict }: Props) {
  const { lang } = useParams();

  return (
    <Box
      px={4}
      py={6}
      position="relative"
      overflow="hidden"
      display={{ xs: "none", lg: "block" }}
      borderRadius="min(2.2vw, 4.4vh) min(2.2vw, 4.4vh) 0 0"
      sx={{ backgroundColor: "background.default" }}
    >
      <Box
        zIndex={1}
        position="relative"
        display="flex"
        justifyContent="space-between"
      >
        <Box display="flex" gap="min(2vw, 4vh)">
          <Stack justifyContent="space-between">
            <Box component="img" src="/DOSIJEM.svg" alt="DOSIJEM" width={150} />
            <Typography color="text.secondary" fontSize="1rem" fontWeight={500}>
              © 2025. {dict.footer.rights}
            </Typography>
          </Stack>
          <Stack>
            <CustomLink url="https://send.monobank.ua/jar/4KSgHrLD2f" newTab>
              {dict.footer.links.charitybox}
            </CustomLink>
            <CustomLink url={`/${lang}/contacts`}>
              {dict.footer.links.contacts}
            </CustomLink>
            <CustomLink url={`/${lang}/privacy-policy`}>
              {dict.footer.links.privacy}
            </CustomLink>
          </Stack>
        </Box>
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
            gap="min(0.2vw, 0.4vh)"
            noWrap
            fontWeight={500}
          >
            <Box height="1rem" component="img" src="/dosijem-logo.svg" />
            made in
            <Typography
              fontWeight={500}
              fontSize="1rem"
              component="span"
              color="primary.main"
            >
              DOSIJEM
            </Typography>
          </Typography>
        </Stack>
      </Box>
      <Box
        zIndex={0}
        component="img"
        height={110}
        position="absolute"
        src="/footer-bg.svg"
        bottom="-55px"
        left="-2%"
        aria-hidden
        draggable={false}
      />
    </Box>
  );
}
