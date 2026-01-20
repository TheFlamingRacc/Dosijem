"use client";

import { Box, Stack, Typography } from "@mui/material";
import OurTeamBlock from "../components/OurTeamBlock";
import Tapes from "../components/Tapes";
import ALittleStatictics from "../components/ALittleStatistics";
import InShort from "../components/InShort";
import CustomLink from "../components/CustomLink";
import SidesCard from "../components/SidesCard";
import PrimarySpan from "../components/PrimarySpan";
import StageComponent from "../components/StageComponent";
import StagesDivider from "../components/StagesDivider";
import { motion } from "framer-motion";
import DeliverFinishedProduct from "../components/DeliverFinishedProduct";

export default function AboutEn() {
  return (
    <>
      <Stack
        mx="auto"
        maxWidth={{ md: 609, lg: "min(914px, 70%)" }}
        pt={14}
        zIndex={-1}
        gap={4}
        position="relative"
      >
        <Box
          component="img"
          src="/DOSIJEM.svg"
          width="100%"
          sx={{
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
          }}
        />
        <Box
          component="img"
          src="/about-title-en.svg"
          width="100%"
          sx={{
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
            animationDelay: "0.2s",
          }}
        />
        <Box
          component="img"
          src="/Woman.svg"
          height="100%"
          position="absolute"
          zIndex={1}
          bottom={{ md: "-30%", lg: "-25%" }}
          left="50%"
          sx={{
            transform: "translateX(-50%)",
            opacity: 0,
            animation: "FadeIn 1s ease forwards",
            animationDelay: "0.4s",
          }}
        />
      </Stack>
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
          <OurTeamBlock en />
          <InShort en />
          <ALittleStatictics en />
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
          <ALittleStatictics en alignItems="center" />
          <Box display="flex" gap={4}>
            <OurTeamBlock en />
            <InShort en />
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
          <InShort en alignItems="center" />
          <ALittleStatictics en alignItems="center" spacing={1} />
          <OurTeamBlock en alignItems="center" />
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
                Our tools that we use in working on{" "}
                <Typography
                  component="span"
                  fontFamily="inherit"
                  fontSize="inherit"
                  color="primary.dark"
                  fontWeight="inherit"
                >
                  your ideas
                </Typography>
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
                CHARITY
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
                We would also like to emphasize that for each order, we donate a
                percentage of the funds to support the{" "}
                <Typography
                  component="span"
                  fontFamily="inherit"
                  fontSize="inherit"
                  color="primary.main"
                  fontWeight="inherit"
                >
                  Armed Forces of Ukraine
                </Typography>
                . We consider this an important aspect not only for us but also
                for others.
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
                So, if you want to support this initiative, you can donate to
                the Red Cross or any fund of your choice, or use our{" "}
                <CustomLink blank url="https://send.monobank.ua/jar/4KSgHrLD2f">
                  charitybox
                </CustomLink>
                .
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
                We publish reports on donations to support the country in our{" "}
                <CustomLink blank url="https://t.me/DOSIJEM_channel">
                  Telegram
                </CustomLink>
                <Typography
                  component="span"
                  fontFamily="inherit"
                  fontSize="inherit"
                  color="primary.main"
                  fontWeight="inherit"
                >
                  channel
                </Typography>
                .
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
                Thank you for helping our homeland.{" "}
                <Typography
                  component="span"
                  fontFamily="inherit"
                  fontSize="inherit"
                  color="primary.main"
                  fontWeight="inherit"
                >
                  DOSIJEM
                </Typography>{" "}
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
            <SidesCard number={1} accent title="CONNECTION" icon="/brain.svg">
              <PrimarySpan>Analyzing your ideas</PrimarySpan>, understanding the
              audience&apos;s needs, and helping to make the product
              <PrimarySpan> convenient and well thought-out</PrimarySpan>.
            </SidesCard>

            <SidesCard number={2} title="SPEED" icon="/speedometer.svg">
              We <PrimarySpan>work fast</PrimarySpan>, but{" "}
              <PrimarySpan>never</PrimarySpan>at the expense of{" "}
              <PrimarySpan>quality</PrimarySpan>. Every project is handled with{" "}
              <PrimarySpan>complete dedication</PrimarySpan>, because we
              become truly <PrimarySpan>passionate about your idea</PrimarySpan>
              , just like you are.
            </SidesCard>

            <SidesCard number={2} title="CARE" icon="/hugging.svg">
              We <PrimarySpan>provide daily updates</PrimarySpan>, discuss every
              stage, and <PrimarySpan>respond to your input</PrimarySpan> . We
              don&apos;t just complete tasks -we genuinely care about your
              satisfaction with the <PrimarySpan>final result</PrimarySpan>.
            </SidesCard>

            <SidesCard number={1} title="HONESTY" icon="/file-protection.svg">
              <PrimarySpan>We do&apos;t hide details</PrimarySpan> or drag out
              deadlines. We <PrimarySpan>always </PrimarySpan>
              give an <PrimarySpan>honest estimate</PrimarySpan> of the time
              required-and often deliver <PrimarySpan>even faster</PrimarySpan>.
              We are a team that <PrimarySpan>keeps its word</PrimarySpan>.
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
            Our tools that we use in working on{" "}
            <Typography
              component="span"
              fontFamily="inherit"
              fontSize="inherit"
              color="primary.dark"
              fontWeight="inherit"
            >
              your ideas
            </Typography>
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
              How we work
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
              Basic roadmap of the stages for implementing ideas
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
                title="Application"
                description="We have received your application"
              />
              <StagesDivider number={1} />
              <StageComponent
                number={2}
                title="Valuation"
                description="We evaluate your idea"
              />
              <StagesDivider number={2} />
              <StageComponent
                number={3}
                title="Agreement"
                description="We agree on the cost and deadline"
              />
            </Stack>
            <Box
              sx={{
                "@media (min-width: 601px) and (max-width: 1400px)": {
                  display: "none",
                },
                "@media (max-height: 800px)": { display: "none" },
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
                title="Payment"
                description="We receive the payment"
              />
              <StagesDivider number={4} />
              <StageComponent
                number={5}
                title="Start of work"
                description="We begin implementation"
              />
              <StagesDivider number={5} />
              <StageComponent
                number={6}
                title="Finish"
                description="We test and finalize"
              />
            </Stack>
          </Stack>
          <DeliverFinishedProduct>
            We deliver the <PrimarySpan>finished</PrimarySpan> product!
          </DeliverFinishedProduct>
        </Box>
      </Stack>
    </>
  );
}
