"use client";

import { Box, Typography, Divider } from "@mui/material";

export default function Contacts() {
  return (
    <>
      <Typography
        color="primary.main"
        fontSize={{
          md: "clamp(0px, min(2.7vw, 5.4vh), 25px)",
          lg: "clamp(0px, min(1.5vw, 3vh), 20px)",
        }}
        fontWeight={500}
      >
        Зв'язок з нами
      </Typography>
      <Typography
        fontSize={{
          md: "clamp(0px, min(6vw, 11vh), 75px)",
          lg: "clamp(0px, min(2.8vw, 5.6vh), 50px)",
        }}
        fontFamily={"e-UkraineHead"}
        fontWeight={700}
      >
        Хочеш поговорити?
      </Typography>
      <Typography
        fontWeight={300}
        fontSize={{
          md: "clamp(0px, min(2.7vw, 5.4vh), 25px)",
          lg: "clamp(0px, min(1.5vw, 3vh), 20px)",
        }}
        color="text.secondary"
        maxWidth={"750px"}
        mt={{ md: "min(2vw, 4vh)", lg: "min(1.5vw, 3vh)" }}
        lineHeight={"110%"}
      >
        Якщо вам потрібна допомога, є запитання, хочете консультацію щодо ідеї
        або просто написати - скористайтеся наведеними нижче контактами щоб
        зв’язатися з{" "}
        <Typography
          component={"span"}
          fontWeight={500}
          color="primary.main"
          fontSize={{
            md: "clamp(0px, min(2.7vw, 5.4vh), 25px)",
            lg: "clamp(0px, min(1.5vw, 3vh), 20px)",
          }}
        >
          DOSIJEM
        </Typography>
      </Typography>
      <Box
        display={"flex"}
        mt={"min(2.8vw, 5.6vh)"}
        gap={"min(2vw, 4vh)"}
        flexDirection={{ xs: "column", lg: "row" }}
      >
        <Typography
          fontFamily={"e-UkraineHead"}
          fontWeight={400}
          fontSize={{
            md: "clamp(0px, min(6vw, 11vh), 75px)",
            lg: "clamp(0px, min(2.8vw, 5.6vh), 50px)",
          }}
          color="primary.main"
          lineHeight={"100%"}
        >
          Зв'яжися
        </Typography>
        {/* Block */}
        <Box
          display={"flex"}
          justifyContent={{ md: "space-between", lg: "flex-start" }}
          gap={{ xs: "0", lg: "min(1vw, 2vh)" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            position={"relative"}
            height={{
              md: "clamp(0px, min(22vw, 44vh), 210px)",
              lg: "min(10.5vw, 21vh)",
            }}
            width={{
              md: "clamp(0px, min(25vw, 50vh), 233px)",
              lg: "clamp(0px, min(14vw, 28vh), 233px)",
            }}
          >
            <Box
              width={{
                md: "clamp(0px, min(25vw, 50vh), 233px)",
                lg: "clamp(0px, min(14vw, 28vh), 233px)",
              }}
              height={{
                md: "clamp(0px, min(16vw, 32vh), 110px)",
                lg: "min(5vw, 10vw)",
              }}
              borderRadius={{
                md: "min(2.5vw, 5vh)",
                lg: "min(1.3vw, 2.6vh)",
              }}
              border={"solid rgba(255, 255, 255, 0.2) 1px"}
              p={{ md: "min(1.2vw, 2.4vh)", lg: "min(0.6vw, 1.2vh)" }}
              display={"flex"}
              alignItems={"flex-end"}
              gap={{ md: "min(1.2vw, 2.4vh)", lg: "min(0.6vw, 1.2vh)" }}
            >
              <Box
                height={"100%"}
                borderRadius={{
                  md: "min(1.4vw, 2.8vh)",
                  lg: "min(0.8vw, 1.6vh)",
                }}
                display={"flex"}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: "1",
                  backgroundColor: "background.default",
                }}
              >
                <Box
                  height={"80%"}
                  component={"img"}
                  src="/contacts-icon-t.svg"
                  sx={{
                    aspectRatio: 1,
                  }}
                />
              </Box>
              <Typography
                letterSpacing={"-5%"}
                fontSize={{
                  md: "clamp(0px, min(1.1vw, 2.2vh), 12px)",
                  lg: "clamp(0px, min(0.8vw, 1.6vh), 12px)",
                }}
              >
                Підтримка
                <Typography
                  fontSize={{
                    md: "clamp(0px, min(1.1vw, 2.2vh), 12px)",
                    lg: "clamp(0px, min(0.8vw, 1.6vh), 12px)",
                  }}
                  letterSpacing={"-5%"}
                >
                  Клієнт.підтримка
                </Typography>
              </Typography>
              <Box
                component={"img"}
                src={"/dosijem-logo.svg"}
                width={{ md: "min(2.2vw, 4.4vh)", lg: "min(1.5vw, 3vh)" }}
                position={"absolute"}
                top={{ md: "min(1.2vw, 2.4vh)", lg: "min(0.6vw, 1.2vh)" }}
                right={{ md: "min(1.2vw, 2.4vh)", lg: "min(0.6vw, 1.2vh)" }}
              />
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography
                color="rgba(106, 171, 255, 1)"
                fontSize={{
                  md: "clamp(0px, min(2.2vw, 4.4vh), 25px)",
                  lg: "clamp(0px, min(1.3vw, 2.6vh), 20px)",
                }}
                sx={{
                  cursor: "pointer",
                  transition: "0.5s ease color",
                  textDecoration: "underline",
                  textUnderlineOffset: "6px",
                  "&:hover": {
                    color: "rgba(106, 171, 255, 0.5)",
                  },
                }}
              >
                Telegram
              </Typography>
              <Divider
                orientation="vertical"
                sx={{
                  mx: { md: "min(1.1vw, 2.2vh)", lg: "min(0.6vw, 1.2vh)" },
                  width: "1px",
                  height: "100%",
                  border: "none",
                  background: (theme) =>
                    `linear-gradient(
        to bottom,
        ${theme.palette.background.main} 0%,
        #3D3A44 10%,
        #3D3A44 90%,
        ${theme.palette.background.main} 100%
      )`,
                }}
              />
              <Typography
                color="rgba(123, 106, 255, 1)"
                fontSize={{
                  md: "clamp(0px, min(2.2vw, 4.4vh), 25px)",
                  lg: "clamp(0px, min(1.3vw, 2.6vh), 20px)",
                }}
                sx={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  textUnderlineOffset: "6px",
                  transition: "0.5s ease color",
                  "&:hover": {
                    color: "rgba(123, 106, 255, 0.5)",
                  },
                }}
              >
                Discord
              </Typography>
            </Box>
            <Typography
              fontSize={{
                md: "clamp(0px, min(1.5vw, 3vh), 12px)",
                lg: "clamp(0px, min(0.8vw, 1.6vh), 12px)",
              }}
              color="text.secondary"
            >
              або через пошту
            </Typography>
            <Box
              alignItems={"center"}
              display={"flex"}
              gap={"min(0.2vw, 0.4vh)"}
            >
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  width: "3px",
                  borderRadius: "3px",
                  height: "70%",
                }}
              />
              <Typography
                fontSize={{
                  md: "clamp(0px, min(1.5vw, 3vh), 12px)",
                  lg: "clamp(0px, min(0.8vw, 1.6vh), 12px)",
                }}
              >
                dosijemhelp@gmail.com
              </Typography>
            </Box>
          </Box>
          {/* Другий блок — Кар'єра */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            position={"relative"}
            height={{
              md: "clamp(0px, min(22vw, 44vh), 210px)",
              lg: "min(10.5vw, 21vh)",
            }}
            width={{
              md: "clamp(0px, min(25vw, 50vh), 233px)",
              lg: "clamp(0px, min(14vw, 28vh), 233px)",
            }}
          >
            <Box
              width={{
                md: "clamp(0px, min(25vw, 50vh), 233px)",
                lg: "clamp(0px, min(14vw, 28vh), 233px)",
              }}
              height={{
                md: "clamp(0px, min(16vw, 32vh), 110px)",
                lg: "min(5vw, 10vw)",
              }}
              borderRadius={{
                md: "min(2.5vw, 5vh)",
                lg: "min(1.3vw, 2.6vh)",
              }}
              border={"solid rgba(255, 255, 255, 0.2) 1px"}
              p={{ md: "min(1.2vw, 2.4vh)", lg: "min(0.6vw, 1.2vh)" }}
              display={"flex"}
              alignItems={"flex-end"}
              gap={{ md: "min(1.2vw, 2.4vh)", lg: "min(0.6vw, 1.2vh)" }}
            >
              <Box
                height={"100%"}
                borderRadius={{
                  md: "min(1.4vw, 2.8vh)",
                  lg: "min(0.8vw, 1.6vh)",
                }}
                display={"flex"}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: "1",
                  backgroundColor: "background.default",
                }}
              >
                <Box
                  height={{ md: "80%", lg: "70%" }}
                  component={"img"}
                  src="/career-icon.svg"
                  sx={{ aspectRatio: 1 }}
                />
              </Box>
              <Typography
                letterSpacing={"-5%"}
                fontSize={{
                  md: "clamp(0px, min(1.1vw, 2.2vh), 12px)",
                  lg: "clamp(0px, min(0.8vw, 1.6vh), 12px)",
                }}
              >
                Кар'єра
                <Typography
                  fontSize={{
                    md: "clamp(0px, min(1.1vw, 2.2vh), 12px)",
                    lg: "clamp(0px, min(0.8vw, 1.6vh), 12px)",
                  }}
                  letterSpacing={"-5%"}
                  noWrap
                >
                  Хочеш у команду?
                </Typography>
              </Typography>
              <Box
                component={"img"}
                src={"/dosijem-logo.svg"}
                width={{ md: "min(2.2vw, 4.4vh)", lg: "min(1.5vw, 3vh)" }}
                position={"absolute"}
                top={{ md: "min(1.2vw, 2.4vh)", lg: "min(0.6vw, 1.2vh)" }}
                right={{ md: "min(1.2vw, 2.4vh)", lg: "min(0.6vw, 1.2vh)" }}
              />
            </Box>
            <Typography
              color="rgba(106, 171, 255, 1)"
              fontSize={{
                md: "clamp(0px, min(2.2vw, 4.4vh), 25px)",
                lg: "clamp(0px, min(1.3vw, 2.6vh), 20px)",
              }}
              sx={{
                cursor: "pointer",
                transition: "0.5s ease color",
                textDecoration: "underline",
                textUnderlineOffset: "6px",
                "&:hover": { color: "rgba(106, 171, 255, 0.5)" },
              }}
            >
              Telegram
            </Typography>
            <Typography
              fontSize={{
                md: "clamp(0px, min(1.5vw, 3vh), 12px)",
                lg: "clamp(0px, min(0.8vw, 1.6vh), 12px)",
              }}
              color="text.secondary"
            >
              або через пошту
            </Typography>
            <Box
              alignItems={"center"}
              display={"flex"}
              gap={"min(0.2vw, 0.4vh)"}
            >
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  width: "3px",
                  borderRadius: "3px",
                  height: "70%",
                }}
              />
              <Typography
                fontSize={{
                  md: "clamp(0px, min(1.5vw, 3vh), 12px)",
                  lg: "clamp(0px, min(0.8vw, 1.6vh), 12px)",
                }}
              >
                hrdosijem@gmail.com
              </Typography>
            </Box>
          </Box>

          {/* Третій блок — Партнерам */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            position={"relative"}
            height={{
              md: "clamp(0px, min(22vw, 44vh), 210px)",
              lg: "min(10.5vw, 21vh)",
            }}
            width={{
              md: "clamp(0px, min(25vw, 50vh), 233px)",
              lg: "clamp(0px, min(14vw, 28vh), 233px)",
            }}
          >
            <Box
              position={"relative"}
              width={{
                md: "clamp(0px, min(25vw, 50vh), 233px)",
                lg: "clamp(0px, min(14vw, 28vh), 233px)",
              }}
              height={{
                md: "clamp(0px, min(16vw, 32vh), 110px)",
                lg: "min(5vw, 10vw)",
              }}
              borderRadius={{
                md: "min(2.5vw, 5vh)",
                lg: "min(1.3vw, 2.6vh)",
              }}
              border={"solid rgba(255, 255, 255, 0.2) 1px"}
              p={{ md: "min(1.2vw, 2.4vh)", lg: "min(0.6vw, 1.2vh)" }}
              display={"flex"}
              alignItems={"flex-end"}
              gap={{ md: "min(1.2vw, 2.4vh)", lg: "min(0.6vw, 1.2vh)" }}
            >
              <Box
                height={"100%"}
                borderRadius={{
                  md: "min(1.4vw, 2.8vh)",
                  lg: "min(0.8vw, 1.6vh)",
                }}
                display={"flex"}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: "1",
                  backgroundColor: "background.default",
                }}
              >
                <Box
                  height={{ md: "80%", lg: "70%" }}
                  component={"img"}
                  src="/partnership-icon.svg"
                  sx={{ aspectRatio: 1 }}
                />
              </Box>
              <Typography
                letterSpacing={"-5%"}
                fontSize={{
                  md: "clamp(0px, min(1.1vw, 2.2vh), 12px)",
                  lg: "clamp(0px, min(0.8vw, 1.6vh), 12px)",
                }}
              >
                Партнерам
                <Typography
                  fontSize={{
                    md: "clamp(0px, min(1.1vw, 2.2vh), 12px)",
                    lg: "clamp(0px, min(0.8vw, 1.6vh), 12px)",
                  }}
                  letterSpacing={"-5%"}
                >
                  Давай разом)
                </Typography>
              </Typography>
              <Box
                component={"img"}
                src={"/dosijem-logo.svg"}
                width={{ md: "min(2.2vw, 4.4vh)", lg: "min(1.5vw, 3vh)" }}
                position={"absolute"}
                top={{ md: "min(1.2vw, 2.4vh)", lg: "min(0.6vw, 1.2vh)" }}
                right={{ md: "min(1.2vw, 2.4vh)", lg: "min(0.6vw, 1.2vh)" }}
              />
            </Box>

            <Typography
              fontSize={{
                md: "clamp(0px, min(1.5vw, 3vh), 12px)",
                lg: "clamp(0px, min(0.8vw, 1.6vh), 12px)",
              }}
              color="text.secondary"
              flexWrap={"wrap"}
            >
              Ми{" "}
              <Typography
                component={"span"}
                fontSize={{
                  md: "clamp(0px, min(1.5vw, 3vh), 12px)",
                  lg: "clamp(0px, min(0.8vw, 1.6vh), 12px)",
                }}
                color="primary.main"
              >
                завжди
              </Typography>{" "}
              шукаємо блогерів та партнерів для спільного розвитку.
            </Typography>

            <Box
              alignItems={"center"}
              display={"flex"}
              gap={"min(0.2vw, 0.4vh)"}
            >
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  width: "3px",
                  borderRadius: "3px",
                  height: "70%",
                }}
              />
              <Typography
                fontSize={{
                  md: "clamp(0px, min(1.5vw, 3vh), 12px)",
                  lg: "clamp(0px, min(0.8vw, 1.6vh), 12px)",
                }}
              >
                dosijemhelp@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
