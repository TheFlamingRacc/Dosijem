import { Box, Stack, Typography } from "@mui/material";
import CustomLink from "./components/CustomLink";

export default function DesktopFooter() {
  return (
    <Box
      px={4}
      py={6}
      position="relative"
      overflow="hidden"
      borderRadius="min(2.2vw, 4.4vh) min(2.2vw, 4.4vh) 0 0"
      sx={{ backgroundColor: "background.default" }}
    >
      <Box zIndex={2} display="flex" justifyContent="space-between">
        <Box display="flex" gap={7}>
          <Stack justifyContent="space-between">
            <Box component="img" src="/DOSIJEM.svg" alt="DOSIJEM" width={150} />
            <Typography color="text.secondary" fontSize="1rem">
              © 2025. Всі права захищені.
            </Typography>
          </Stack>
          <Stack>
            <CustomLink url="https://send.monobank.ua/jar/4KSgHrLD2f" newTab>
              БЛАГОБАНКА
            </CustomLink>
            <CustomLink url="/contacts">КОНТАКТИ</CustomLink>
            <CustomLink url="/privacy&policy">
              ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ
            </CustomLink>
          </Stack>
        </Box>
        <Stack justifyContent="space-between">
          <Box display="flex" justifyContent="space-between">
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
          >
            <Box height="1rem" component="img" src="/dosijem-logo.svg" />
            made in
            <Typography fontSize="1rem" component="span" color="primary.main">
              DOSIJEM
            </Typography>
          </Typography>
        </Stack>
      </Box>
      <Box
        zIndex={1}
        component="img"
        width="105%"
        position="absolute"
        src="/footer-bg.svg"
        bottom="-28%"
        left="-2%"
        aria-hidden
        draggable={false}
      />
    </Box>
  );
}
