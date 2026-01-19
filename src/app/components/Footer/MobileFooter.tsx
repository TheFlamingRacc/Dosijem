"use client";

import { Box, Stack, Typography } from "@mui/material";
import CustomLink from "./components/CustomLink";
import { usePathname } from "next/navigation";

export default function MobileFooter() {
  const isEnglish = usePathname().includes("/en");
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
            © 2025. {isEnglish ? "All rights reserved" : "Всі права захищені"}.
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
        <CustomLink url="/contacts">
          {isEnglish ? "CONTACTS" : "КОНТАКТИ"}
        </CustomLink>
        <CustomLink url="/privacy-policy">
          {isEnglish ? "PRIVACY POLICY" : "ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ"}
        </CustomLink>
        <CustomLink url="https://send.monobank.ua/jar/4KSgHrLD2f" newTab>
          {isEnglish ? "CHARITYBOX" : "БЛАГОБАНКА"}
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
