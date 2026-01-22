"use client";

import { Box, Stack, Typography } from "@mui/material";
import OurTeamBlock from "./components/OurTeamBlock";
import Tapes from "./components/Tapes";
import ALittleStatictics from "./components/ALittleStatistics";
import InShort from "./components/InShort";
import CustomLink from "./components/CustomLink";
import SidesCard from "./components/SidesCard";
import PrimarySpan from "./components/PrimarySpan";
import StageComponent from "./components/StageComponent";
import StagesDivider from "./components/StagesDivider";
import { motion } from "framer-motion";
import DeliverFinishedProduct from "./components/DeliverFinishedProduct";

import { Dictionary } from "../dictionaries";
import PrimaryDarkSpan from "./components/PrimaryDarkSpan";
import { renderWithAccent } from "../services/renderData";

type Props = {
  dict: Dictionary["about"];
};

export default function PageContent({ dict }: Props) {
  const {
    our_team_block,
    join_our_team_button_title,
    in_short_block,
    a_little_stats,
    sides_title,
    charity_title,
    sides_description,
    sides_cards,
    how_we_work,
  } = dict;
  return (
    <Stack
      mt={8}
      position="relative"
      px={{ xs: 1, md: 2, lg: 3.8 }}
      py={4}
      borderRadius={{ xs: "23px", md: "47px" }}
      sx={{
        backgroundColor: "background.default",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        gap={1}
        sx={{
          "@media (max-width:1450px), (max-height:840px)": {
            display: "none",
          },
        }}
      >
        <OurTeamBlock
          section_title={our_team_block.section_title}
          join_our_team_button_title={join_our_team_button_title}
          exp_title={our_team_block.exp_title}
          years={our_team_block.years}
          in_team_title={our_team_block.in_team_title}
        />
        <InShort
          section_title={in_short_block.section_title}
          desc={in_short_block.description}
        />
        <ALittleStatictics
          rate_title={a_little_stats.rate_title}
          section_title={a_little_stats.section_title}
          deadline_title={a_little_stats.deadline_title}
          days={a_little_stats.days}
          java_devs_title={a_little_stats.java_devs_title}
        />
      </Box>
      <Stack
        display={{ xs: "none" }}
        sx={{
          "@media (max-width:1450px), (max-height:840px)": {
            display: "flex",
          },
          "@media (max-width: 750px)": {
            display: "none",
          },
        }}
        spacing={4}
        alignItems="center"
      >
        <ALittleStatictics
          rate_title={a_little_stats.rate_title}
          section_title={a_little_stats.section_title}
          deadline_title={a_little_stats.deadline_title}
          days={a_little_stats.days}
          java_devs_title={a_little_stats.java_devs_title}
          alignItems="center"
        />
        <Box display="flex" gap={4}>
          <OurTeamBlock
            section_title={our_team_block.section_title}
            join_our_team_button_title={join_our_team_button_title}
            exp_title={our_team_block.exp_title}
            years={our_team_block.years}
            in_team_title={our_team_block.in_team_title}
          />
          <InShort
            section_title={in_short_block.section_title}
            desc={in_short_block.description}
          />
        </Box>
      </Stack>
      <Stack
        spacing={1.6}
        display="flex"
        sx={{
          "@media(min-width: 750px)": {
            display: "none",
          },
        }}
      >
        <InShort
          section_title={in_short_block.section_title}
          desc={in_short_block.description}
          alignItems="center"
        />
        <ALittleStatictics
          rate_title={a_little_stats.rate_title}
          section_title={a_little_stats.section_title}
          deadline_title={a_little_stats.deadline_title}
          days={a_little_stats.days}
          java_devs_title={a_little_stats.java_devs_title}
          alignItems="center"
          spacing={1}
        />
        <OurTeamBlock
          section_title={our_team_block.section_title}
          join_our_team_button_title={join_our_team_button_title}
          exp_title={our_team_block.exp_title}
          years={our_team_block.years}
          in_team_title={our_team_block.in_team_title}
          alignItems="center"
        />
      </Stack>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.01 }}
        position="relative"
        my={11}
      >
        <Tapes />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        gap={{ xs: 1, md: 5 }}
        sx={{
          "@media (max-width: 1300px)": {
            flexDirection: "column-reverse",
            alignItems: "center",
          },
        }}
      >
        <Stack
          maxWidth={518}
          spacing={3}
          sx={{
            "@media (max-width: 1300px)": {
              maxWidth: "614px",
            },
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.01 }}
          >
            <Typography
              fontFamily="e-UkraineHead"
              fontSize="2.2rem"
              color="#fff"
              fontWeight={700}
              sx={{
                "@media (max-width: 750px)": {
                  display: "none",
                },
              }}
            >
              {renderWithAccent(sides_title, PrimaryDarkSpan)}
            </Typography>
          </Box>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Typography
              fontFamily="e-UkraineHead"
              fontSize="1rem"
              color="#fff"
              display="none"
              textAlign="center"
              sx={{
                "@media (max-width: 750px)": {
                  display: "block",
                },
              }}
            >
              {charity_title}
            </Typography>
          </Box>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Typography
              fontSize={{ xs: "0.875rem", md: "1.125rem" }}
              fontFamily="e-Ukraine"
              color="text.secondary"
              fontWeight={500}
            >
              {renderWithAccent(
                sides_description.paragraphs[0] as string[],
                PrimarySpan,
              )}
            </Typography>
          </Box>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Typography
              fontSize={{ xs: "0.875rem", md: "1.125rem" }}
              fontFamily="e-Ukraine"
              color="text.secondary"
              fontWeight={500}
            >
              {renderWithAccent(
                sides_description.paragraphs[1] as string[],
                ({ children }) => (
                  <CustomLink
                    blank
                    url="https://send.monobank.ua/jar/4KSgHrLD2f"
                  >
                    {children}
                  </CustomLink>
                ),
              )}
            </Typography>
          </Box>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Typography
              fontSize={{ xs: "0.875rem", md: "1.125rem" }}
              fontFamily="e-Ukraine"
              color="text.secondary"
              fontWeight={500}
            >
              {sides_description.paragraphs[2][0]}
              <CustomLink blank url="https://t.me/DOSIJEM_channel">
                Telegram
              </CustomLink>
              <PrimarySpan>{sides_description.paragraphs[2][1]}</PrimarySpan>.
            </Typography>
          </Box>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Typography
              fontSize={{ xs: "0.875rem", md: "1.125rem" }}
              fontFamily="e-Ukraine"
              color="#fff"
              fontWeight={500}
            >
              {sides_description.paragraphs[3]}
              <PrimarySpan>DOSIJEM</PrimarySpan>{" "}
              <Box component="img" src="/ua-icon.svg" />
            </Typography>
          </Box>
        </Stack>
        <Box
          display="grid"
          gridAutoRows="300px"
          gridTemplateColumns="repeat(2, 1fr)"
          gap={1.4}
          sx={{
            "@media (max-width: 750px)": {
              gap: 2,
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <SidesCard
            number={1}
            accent
            title={sides_cards[0].title}
            icon="/brain.svg"
          >
            {renderWithAccent(sides_cards[0].desc, PrimarySpan)}
          </SidesCard>

          <SidesCard
            number={2}
            title={sides_cards[1].title}
            icon="/speedometer.svg"
          >
            {renderWithAccent(sides_cards[1].desc, PrimarySpan)}
          </SidesCard>

          <SidesCard
            number={2}
            title={sides_cards[2].title}
            icon="/hugging.svg"
          >
            {renderWithAccent(sides_cards[2].desc, PrimarySpan, false)}
          </SidesCard>

          <SidesCard
            number={1}
            title={sides_cards[3].title}
            icon="/file-protection.svg"
          >
            {renderWithAccent(sides_cards[3].desc, PrimarySpan)}
          </SidesCard>
        </Box>
        <Typography
          fontFamily="e-UkraineHead"
          display="none"
          fontSize={{ xs: "1.25rem", md: "2.2rem" }}
          color="#fff"
          fontWeight={700}
          sx={{
            "@media (max-width: 750px)": {
              display: "block",
              mb: 1,
            },
          }}
        >
          {renderWithAccent(sides_title, PrimaryDarkSpan)}
        </Typography>
      </Box>
      <Stack
        my={5}
        sx={{
          "@media (max-width: 1400px)": {
            mb: 15,
          },
          "@media (max-width: 750px)": {
            mb: 5,
          },
        }}
        alignItems="center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Typography
            fontFamily="e-UkraineHead"
            fontSize={{ xs: "1.5rem", md: "2.2rem" }}
            fontWeight={700}
            color="#fff"
          >
            {how_we_work.title}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Typography
            fontSize={{ xs: "1rem", md: "1.25rem" }}
            color="text.secondary"
            fontWeight={500}
            textAlign="center"
          >
            {how_we_work.sub_title}
          </Typography>
        </motion.div>
      </Stack>

      <Box
        display="flex"
        gap={8}
        justifyContent="center"
        sx={{
          "@media (min-width: 751px and max-width: 1400px)": {
            mb: -10,
          },
          "@media (max-width: 750px)": {
            flexDirection: "column",
            gap: 1,
            mb: 0,
          },
          "@media (max-height: 800px) and (min-width: 1400px)": {
            mt: 10,
            mb: -10,
          },
        }}
      >
        <Stack
          ml={8.1}
          gap={2}
          direction="row"
          alignItems="center"
          height={150}
          sx={{
            "@media (max-width: 600px)": {
              m: 0,
              flexDirection: "column",
              height: "auto",
              gap: 2,
            },
            "@media (min-width: 601px) and (max-width: 750px)": {
              flexDirection: "column",
              ml: 0,
              height: "auto",
              gap: "153px",
              mt: 8,
              mb: 10,
            },
            "@media (min-width: 751px) and (max-width: 1400px)": {
              flexDirection: "column",
              height: 360,
              ml: 7,
              gap: "153px",
            },
            "@media (max-height: 800px) and (min-width: 751px)": {
              flexDirection: "column",
              height: 360,
              gap: "153px",
            },
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems="center"
          >
            <StageComponent
              number={1}
              title={how_we_work.stages[1].title}
              description={how_we_work.stages[1].description}
            />
            <StagesDivider number={1} />
            <StageComponent
              number={2}
              title={how_we_work.stages[2].title}
              description={how_we_work.stages[2].description}
            />
            <StagesDivider number={2} />
            <StageComponent
              number={3}
              title={how_we_work.stages[3].title}
              description={how_we_work.stages[3].description}
            />
          </Stack>
          <Box
            sx={{
              "@media (min-width: 601px) and (max-width: 1400px)": {
                display: "none",
              },
              "@media (max-height: 800px) and (min-width: 601px)": {
                display: "none",
              },
            }}
          >
            <StagesDivider number={3} />
          </Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems="center"
          >
            <StageComponent
              number={4}
              title={how_we_work.stages[4].title}
              description={how_we_work.stages[4].description}
            />
            <StagesDivider number={4} />
            <StageComponent
              number={5}
              title={how_we_work.stages[5].title}
              description={how_we_work.stages[5].description}
            />
            <StagesDivider number={5} />
            <StageComponent
              number={6}
              title={how_we_work.stages[6].title}
              description={how_we_work.stages[6].description}
            />
          </Stack>
        </Stack>
        <DeliverFinishedProduct>
          {renderWithAccent(how_we_work.stages["summary"], PrimarySpan)}
        </DeliverFinishedProduct>
      </Box>
    </Stack>
  );
}
