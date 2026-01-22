import { Box, Typography, Stack } from "@mui/material";
import HeadingBlock from "./components/HeadingBlock";
import SocialsLink from "./components/SocialsLink";
import CustomDivider from "./components/CustomDivider";
import { getDictionary, hasLocale } from "../dictionaries";
import { notFound } from "next/navigation";

export default async function Contacts({
  params,
}: PageProps<"/[lang]/contacts">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const { contact_us, want_to_talk, info, title, heading_block } = (
    await getDictionary(lang)
  ).contacts;
  return (
    <>
      <Typography
        color="primary.main"
        fontSize={{ xs: "0.875rem", md: "1.25rem" }}
        fontWeight={500}
        mt={12}
        sx={{
          opacity: 0,
          animation: "FadeSlideIn 1s ease forwards",
        }}
      >
        {contact_us}
      </Typography>
      <Typography
        fontSize={{ xs: "1.5625rem", md: "3.125rem" }}
        fontFamily="e-UkraineHead"
        fontWeight={700}
        noWrap
        sx={{
          "@media (min-width:600px) and (max-width:660px)": {
            fontSize: "2.9rem",
          },
          opacity: 0,
          animation: "FadeSlideIn 1s ease forwards",
          animationDelay: "0.2s",
        }}
      >
        {want_to_talk}
      </Typography>
      <Typography
        fontWeight={500}
        fontSize={{ xs: "0.9375rem", md: "1.25rem" }}
        color="text.secondary"
        maxWidth="80%"
        mt={{ xs: 2, md: "min(2vw, 4vh)", lg: "min(1.5vw, 3vh)" }}
        lineHeight="110%"
        sx={{
          opacity: 0,
          animation: "FadeSlideIn 1s ease forwards",
          animationDelay: "0.4s",
        }}
      >
        {info}{" "}
        <Typography
          component="span"
          fontWeight={500}
          color="primary.main"
          fontSize="inherit"
        >
          DOSIJEM
        </Typography>
      </Typography>
      <Stack
        mt={{ xs: 4, md: "min(2.8vw, 5.6vh)" }}
        gap={{ xs: 4, md: "min(2vw, 4vh)" }}
        flexWrap="wrap"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "normal" }}
      >
        <Typography
          fontFamily="e-UkraineHead"
          fontWeight={400}
          fontSize={{ xs: "1.5625rem", md: "3.125rem" }}
          color="primary.main"
          lineHeight="100%"
          sx={{
            opacity: 0,
            animation: "FadeSlideIn 1s ease forwards",
            animationDelay: "0.6s",
          }}
        >
          {title}
        </Typography>
        <Box
          display="flex"
          width={{ md: "100%", lg: "auto" }}
          justifyContent={{
            xs: "space-between",
            md: "space-between",
            lg: "flex-start",
          }}
          gap={{ xs: "0", md: 0, lg: "min(1vw, 2vh)" }}
          mr={{ xs: 0, md: "min(4vw, 8vh)", lg: 0 }}
          sx={{
            "@media (max-width: 800px)": {
              flexDirection: "column",
              gap: 4,
            },
            opacity: 0,
            animation: "FadeSlideIn 1s ease forwards",
            animationDelay: "0.8s",
          }}
        >
          <HeadingBlock
            title={heading_block[1].title}
            description={heading_block[1].sub_title}
            img="/contacts-icon-t.svg"
          >
            <Box display="flex" gap={1}>
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
            <Typography
              fontFamily="manrope"
              fontWeight={700}
              fontSize="0.875rem"
              color="text.secondary"
            >
              {heading_block[1].description}
            </Typography>
            <Box alignItems="center" display="flex" gap={0.5}>
              <Box
                width="3px"
                borderRadius="3px"
                height="1rem"
                sx={{ backgroundColor: "primary.main" }}
              />
              <Typography fontSize="0.875rem">dosijemhelp@gmail.com</Typography>
            </Box>
          </HeadingBlock>
          <HeadingBlock
            img="/career-icon.svg"
            title={heading_block[2].title}
            description={heading_block[2].sub_title}
          >
            <SocialsLink telegram url="https://t.me/DOSIJEM_Reviews">
              Telegram
            </SocialsLink>
            <Typography
              fontFamily="manrope"
              fontWeight={700}
              fontSize="0.875rem"
              color="text.secondary"
            >
              {heading_block[2].description}
            </Typography>
            <Box alignItems="center" display="flex" gap={0.5}>
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  width: "3px",
                  borderRadius: "3px",
                  height: "1rem",
                }}
              />
              <Typography fontSize="0.875rem">hrdosijem@gmail.com</Typography>
            </Box>
          </HeadingBlock>
          <HeadingBlock
            img="/partnership-icon.svg"
            title={heading_block[3].title}
            description={heading_block[3].sub_title}
          >
            <Typography
              fontSize="0.875rem"
              color="text.secondary"
              flexWrap="wrap"
              fontFamily="manrope"
              fontWeight={700}
              maxWidth={"220px"}
            >
              {heading_block[3].description.part1}{" "}
              <Typography
                component="span"
                fontSize="inherit"
                color="primary.main"
              >
                {heading_block[3].description.part2}
              </Typography>{" "}
              {heading_block[3].description.part3}
            </Typography>

            <Box alignItems="center" display="flex" gap={0.5}>
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  width: "3px",
                  borderRadius: "3px",
                  height: "1rem",
                }}
              />
              <Typography fontSize="0.875rem">dosijemhelp@gmail.com</Typography>
            </Box>
          </HeadingBlock>
        </Box>
      </Stack>
    </>
  );
}
