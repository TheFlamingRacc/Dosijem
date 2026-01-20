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

export default function About() {
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
          src="/about-title.svg"
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
          <OurTeamBlock />
          <InShort />
          <ALittleStatictics />
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
          <ALittleStatictics alignItems="center" />
          <Box display="flex" gap={4}>
            <OurTeamBlock />
            <InShort />
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
          <InShort alignItems="center" />
          <ALittleStatictics alignItems="center" spacing={1} />
          <OurTeamBlock alignItems="center" />
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
                Наші сторони, які ми застосовуємо у роботі над вашими{" "}
                <Typography
                  component="span"
                  fontFamily="inherit"
                  fontSize="inherit"
                  color="primary.dark"
                  fontWeight="inherit"
                >
                  ідеями
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
                БЛАГОДІЙНІСТЬ
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
                Також ми хотіли б наголосити, що з кожного замовлення ми
                віддаємо відсоток коштів на допомогу{" "}
                <Typography
                  component="span"
                  fontFamily="inherit"
                  fontSize="inherit"
                  color="primary.main"
                  fontWeight="inherit"
                >
                  ЗСУ
                </Typography>
                . Ми вважаємо це важливою складовою не лише для нас, але й для
                інших людей.
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
                Тож, якщо ви хочете підтримати цю ініціативу, ви можете
                задонатити кошти у фонди червоного хресту або фондам на ваш
                вибір або скористатися нашою{" "}
                <CustomLink blank url="https://send.monobank.ua/jar/4KSgHrLD2f">
                  благобанкою
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
                Звіти про донати на допомогу країні ми публікуємо у нашому{" "}
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
                  -каналі
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
                Дякуємо, за допомогу батьківщині{" "}
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
            <SidesCard number={1} accent title="ЗВ’ЯЗОК" icon="/brain.svg">
              Ми <PrimarySpan>завжди</PrimarySpan> на зв’язку — аналізуємо ваші
              ідеї, розуміємо потреби аудиторії, допомагаємо зробити продукт
              <PrimarySpan> зручним та продуманим</PrimarySpan>.
            </SidesCard>

            <SidesCard number={2} title="ШВИДКІСТЬ" icon="/speedometer.svg">
              Ми працюємо <PrimarySpan>швидко</PrimarySpan>, але{" "}
              <PrimarySpan>не за рахунок якості</PrimarySpan>. Кожен проєкт ми
              виконуємо з повною віддачею, бо{" "}
              <PrimarySpan>щиро горимо</PrimarySpan> вашою ідеєю так само,{" "}
              <PrimarySpan>як і ви</PrimarySpan>.
            </SidesCard>

            <SidesCard number={2} title="ТУРБОТА" icon="/hugging.svg">
              <PrimarySpan>Щодня</PrimarySpan> надсилаємо оновлення, обговорюємо
              кожен етап, <PrimarySpan>реагуємо</PrimarySpan> на ваші побажання.
              Ми не просто виконуємо роботу -{" "}
              <PrimarySpan>ми дбаємо</PrimarySpan>, щоб ви були задоволені{" "}
              <PrimarySpan>Результатом</PrimarySpan>.
            </SidesCard>

            <SidesCard number={1} title="ЧЕСНІСТЬ" icon="/file-protection.svg">
              Ми <PrimarySpan>не приховуємо</PrimarySpan> деталей і{" "}
              <PrimarySpan>не затягуємо</PrimarySpan>
              терміни. Завжди <PrimarySpan>чесно оцінюємо</PrimarySpan>, скільки
              часу потрібно, і <PrimarySpan>виконуємо</PrimarySpan>
              навіть швидше. Ми - команда, що{" "}
              <PrimarySpan>тримає слово</PrimarySpan>.
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
            Наші сторони, які ми застосовуємо у роботі над вашими{" "}
            <Typography
              component="span"
              fontFamily="inherit"
              fontSize="inherit"
              color="primary.dark"
              fontWeight="inherit"
            >
              ідеями
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
              Як ми працюємо
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
              Базова карта етапів роботи над втіленням ідей
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
                title="заявка"
                description="Отримуємо вашу заявку"
              />
              <StagesDivider number={1} />
              <StageComponent
                number={2}
                title="оцінка"
                description="Оцінюємо вашу ідею"
              />
              <StagesDivider number={2} />
              <StageComponent
                number={3}
                title="погодження"
                description="Погоджуємо вартість та дедлайн"
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
                title="оплата"
                description="Отримуємо оплату"
              />
              <StagesDivider number={4} />
              <StageComponent
                number={5}
                title="старт роботи"
                description="Починаємо втілювати"
              />
              <StagesDivider number={5} />
              <StageComponent
                number={6}
                title="фініш"
                description="Тестуємо та завершуємо"
              />
            </Stack>
          </Stack>
          <DeliverFinishedProduct>
            Віддаємо <PrimarySpan>готовий</PrimarySpan> продукт!
          </DeliverFinishedProduct>
        </Box>
      </Stack>
    </>
  );
}
