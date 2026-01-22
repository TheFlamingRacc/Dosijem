"use client";

import { Box, Stack, Typography } from "@mui/material";
import CustomLink from "./components/CustomLink";
import { useParams } from "next/navigation";
import { Dictionary } from "../../dictionaries";

type Props = {
  dict: Dictionary;
};

export default function MobileFooter({ dict }: Props) {
  const { lang } = useParams();
  const language = lang && lang !== "undefined" ? lang : "uk";

  return (
    <Box
      px={2}
      py={5}
      position="relative"
      overflow="hidden"
      display={{ sm: "block", md: "none" }}
      borderRadius="min(8vw, 16vh) min(8vw, 16vh) 0 0"
      sx={{
        backgroundColor: "background.default",
      }}
    >
      <Box
        zIndex={2}
        position="relative"
        display="flex"
        justifyContent="space-between"
      >
        <Stack spacing={1}>
          <Box component="img" src="/DOSIJEM.svg" alt="DOSIJEM" width={94} />
          <Typography
            color="text.secondary"
            fontSize="0.4375rem"
            fontWeight={500}
          >
            © 2025. {dict.footer.rights}
          </Typography>
        </Stack>
        <Stack justifyContent="space-between" alignItems="flex-end">
          <Box display="flex" justifyContent="space-between" gap={0.5}>
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
            fontSize="0.4375rem"
            fontWeight={500}
            color="text.secondary"
            alignItems="center"
            display="flex"
            gap={"0.1rem"}
            noWrap
          >
            <Box height="0.4375rem" component="img" src="/dosijem-logo.svg" />
            made in
            <Typography
              fontSize="0.4375rem"
              component="span"
              color="primary.main"
              fontWeight={500}
            >
              DOSIJEM
            </Typography>
          </Typography>
        </Stack>
      </Box>
      <Stack
        py={2}
        zIndex={2}
        position="relative"
        direction={"row"}
        justifyContent="space-between"
      >
        <CustomLink url={`/${language}/contacts`}>
          {dict.footer.links.contacts}
        </CustomLink>
        <CustomLink url={`/${language}/privacy-policy`}>
          {dict.footer.links.privacy}
        </CustomLink>
        <CustomLink url="https://send.monobank.ua/jar/4KSgHrLD2f" newTab>
          {dict.footer.links.charitybox}
        </CustomLink>
      </Stack>
      <Box
        zIndex={1}
        component="img"
        height={69}
        position="absolute"
        src="/footer-bg.svg"
        bottom="-34px"
        left="-2%"
        aria-hidden
        draggable={false}
      />
    </Box>
  );
}
