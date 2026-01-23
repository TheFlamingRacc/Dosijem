import { Box, Stack, Typography } from "@mui/material";
import { getDictionary } from "./[lang]/dictionaries";
import Footer from "./[lang]/components/Footer";
import MobileNavBar from "./components/SidePanel/MobileNavBar";
import PrimarySpan from "./[lang]/about/components/PrimarySpan";
import SocialsLink from "./[lang]/contacts/components/SocialsLink";
import CustomDivider from "./[lang]/contacts/components/CustomDivider";

export default async function NotFound() {
  const dict = await getDictionary("en");
  return (
    <>
      <Stack
        position="relative"
        minHeight={{ xs: "100vh", md: "100%" }}
        minWidth="100%"
        pl={{
          xs: 2,
          md: "min(4vw, 8vh)",
          lg: "clamp(0px, min(5vw, 10vh), 120px)",
        }}
        pr={{ xs: 2, md: 0 }}
        py={{ xs: 0, md: 11, lg: "min(12vw, 6vw)" }}
      >
        <MobileNavBar />
        <Box overflow="hidden" mb={{ xs: 4, md: 7, lg: "min(10vh, 5vw)" }}>
          <Box
            component="img"
            src="/DOSIJEM.svg"
            width={{ xs: 250, md: 441, lg: 600 }}
            mt={{ xs: 10, md: 0 }}
            sx={{
              transform: "translateY(100%)",
              animation: "SlideInTop 0.7s ease forwards",
              animationDelay: "0.2s",
            }}
          />
        </Box>
        <Typography
          mb={3}
          fontSize={{ xs: "1.2rem", md: "1.5rem" }}
          color="primary.main"
          letterSpacing="-3%"
          sx={{
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
            animationDelay: "0.2s",
          }}
        >
          {dict.not_found.title}
        </Typography>
        <Typography
          maxWidth={{ xs: "none", md: 500, lg: 900 }}
          fontSize={{ xs: "1.2rem", md: "1.5rem" }}
          color="#c2c2c2"
          letterSpacing="-3%"
          mb={{ xs: 7, md: 5, lg: 7 }}
          sx={{
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
            animationDelay: "0.3s",
          }}
        >
          {dict.not_found.description[0]}
          <PrimarySpan>404 </PrimarySpan>
          {dict.not_found.description[1]}
          <Typography
            component="span"
            fontSize="inherit"
            letterSpacing="-3%"
            color="#fff"
          >
            {dict.not_found.description[2]}
          </Typography>
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={{ xs: 8, md: 3, lg: 4 }}
          alignItems={{ md: "flex-start", lg: "center" }}
        >
          <Stack
            direction={{ xs: "column", lg: "row" }}
            alignItems="center"
            width={{ xs: 250, lg: "auto" }}
            spacing={{ xs: 2, md: 3, lg: 4 }}
          >
            <Box
              position="relative"
              width={{ xs: 250, lg: 270 }}
              borderRadius="25px"
              border="solid rgba(255, 255, 255, 0.2) 1px"
              p={1.4}
              display="flex"
              alignItems="flex-end"
              gap={1.4}
              sx={{
                opacity: 0,
                animation: "FadeIn 1s ease forwards",
                animationDelay: "0.4s",
              }}
            >
              <Box
                height="4.6875rem"
                borderRadius={{
                  xs: "15px",
                  md: "min(1.4vw, 2.8vh)",
                  lg: "15px",
                }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  aspectRatio: "1",
                  backgroundColor: "background.default",
                }}
              >
                <Box
                  height="80%"
                  component="img"
                  src="/contacts-icon-t.svg"
                  sx={{
                    aspectRatio: 1,
                  }}
                />
              </Box>
              <Typography
                fontFamily="Manrope"
                display="flex"
                flexDirection="column"
                letterSpacing="-5%"
                fontSize={{ xs: "0.9375rem", md: "0.75rem", lg: "0.9375rem" }}
              >
                {dict.not_found.support[0]}
                <Typography
                  component="span"
                  fontFamily="Manrope"
                  fontSize={{ xs: "0.9375rem", md: "0.75rem", lg: "0.9375rem" }}
                  letterSpacing="-5%"
                  noWrap
                >
                  {dict.not_found.support[1]}
                </Typography>
              </Typography>
              <Box
                component="img"
                src="/dosijem-logo.svg"
                width="1.5rem"
                height="1.5rem"
                position="absolute"
                top={14}
                right={14}
                sx={{
                  opacity: 0,
                  animation: "FadeIn 1s ease forwards",
                  animationDelay: "0.5s",
                }}
              />
            </Box>
            <Stack spacing={1}>
              <Box
                display="flex"
                gap={1}
                sx={{
                  opacity: 0,
                  animation: "FadeIn 1s ease forwards",
                  animationDelay: "0.6s",
                }}
              >
                <SocialsLink telegram url="https://t.me/DOSIJEM_channel">
                  Telegram
                </SocialsLink>
                <CustomDivider />
                <SocialsLink
                  discord
                  url="https://discord.com/channels/@me/1433059393485672580"
                >
                  Discord
                </SocialsLink>
              </Box>
              <Stack spacing={1} alignSelf={{ xs: "center", md: "flex-start" }}>
                <Typography
                  fontFamily="manrope"
                  fontWeight={700}
                  fontSize="0.875rem"
                  color="text.secondary"
                  sx={{
                    opacity: 0,
                    animation: "FadeIn 1s ease forwards",
                    animationDelay: "0.7s",
                  }}
                >
                  {dict.not_found.or_via_email}
                </Typography>
                <Box
                  alignItems="center"
                  display="flex"
                  gap={0.5}
                  sx={{
                    opacity: 0,
                    animation: "FadeIn 1s ease forwards",
                    animationDelay: "0.8s",
                  }}
                >
                  <Box
                    width="3px"
                    borderRadius="3px"
                    height="1rem"
                    sx={{
                      backgroundColor: "primary.main",
                    }}
                  />
                  <Typography fontSize="0.875rem">
                    dosijemhelp@gmail.com
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Typography
            fontWeight={{ xs: "0.875rem", md: "1rem" }}
            maxWidth={400}
            letterSpacing="-3%"
            color="#929292"
            sx={{
              opacity: 0,
              animation: "FadeIn 1s ease forwards",
              animationDelay: "0.9s",
            }}
          >
            {dict.not_found.addition}
          </Typography>
        </Stack>
        <Box
          component="img"
          src="/404.svg"
          height="100%"
          position="absolute"
          top={0}
          right={0}
          display={{ xs: "none", lg: "block" }}
          sx={{
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
            animationDelay: "1s",
          }}
        />
      </Stack>
      <Footer dict={dict} />
    </>
  );
}
