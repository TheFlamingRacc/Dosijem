import { Box, Typography, Button } from "@mui/material";
import CustomLink from "./components/CustomLink";

export default function DesktopFooter() {
  return (
    <Box
      zIndex={0}
      sx={{
        backgroundColor: "background.default",
        borderRadius: "min(2.2vw, 4.4vh) min(2.2vw, 4.4vh) 0 0",
        width: "100%",
        height: "min(11vw, 18vh)",
        position: "relative",
        overflow: "hidden",
        px: "min(1vw, 2vh)",
        py: "min(2vw, 4vh)",
        display: "flex",
      }}
    >
      <Box
        zIndex={2}
        display={"flex"}
        height={"85%"}
        width={"100%"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} gap={"min(3.5vw, 7vh)"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            flexDirection={"column"}
          >
            <Box
              width={"auto"}
              height={"40%"}
              component={"img"}
              src={"/DOSIJEM.svg"}
            />
            <Typography
              color="text.secondary"
              fontSize={"clamp(0px, min(1vw, 2vh), 16px)"}
            >
              © 2025. Всі права захищені.
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            flexDirection={"column"}
          >
            <CustomLink url="https://send.monobank.ua/jar/4KSgHrLD2f" newTab>
              БЛАГОБАНКА
            </CustomLink>
            <CustomLink url="/contacts">КОНТАКТИ</CustomLink>
            <CustomLink url="/privacy&policy">
              ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ
            </CustomLink>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
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
            fontSize={"clamp(0px, min(1vw, 2vh), 16px)"}
            color="text.secondary"
            alignItems={"center"}
            display={"flex"}
            gap={"min(0.2vw, 0.4vh)"}
          >
            <Box
              height={"clamp(0px, min(1vw, 2vh), 16px)"}
              component={"img"}
              src={"/dosijem-logo.svg"}
            />
            made in
            <Typography
              fontSize={"clamp(0px, min(1vw, 2vh), 16px)"}
              component={"span"}
              color="primary.main"
            >
              DOSIJEM
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box
        zIndex={1}
        component={"img"}
        width={"105%"}
        position={"absolute"}
        src={"/footer-bg.svg"}
        sx={{
          bottom: "-28%",
          left: "-2%",
        }}
      />
    </Box>
  );
}
