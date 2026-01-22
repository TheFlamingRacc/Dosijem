"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import ContactsForm from "./components/ContactsForm";
import TextForm from "./components/TextForm";
import SendSection from "./components/SendSection";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function FormSection() {
  const pathname = usePathname();
  const isEn = pathname.includes("/en");
  const pageType = pathname.split("/")[3];

  const [nicknameField, setNicknameField] = useState("");
  const [socialsField, setSocialsField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [messageField, setMessageField] = useState("");

  const [nicknameError, setNicknameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [failed, setFailed] = useState(true);

  const onSubmit = async () => {
    setLoading(true);
    const isNicknameValid = nicknameField.trim().length > 1;
    const isEmailValid = emailRegex.test(emailField);

    setNicknameError(!isNicknameValid);
    setEmailError(!isEmailValid);

    if (!isNicknameValid || !isEmailValid) {
      return;
    }
    try {
      const res = await fetch("https://api.dosijem.com/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickname: nicknameField,
          email: emailField,
          socials: socialsField,
          message: messageField,
          type: pageType,
          lang: isEn ? "en" : "ua",
        }),
      });

      if (res.ok) {
        setNicknameField("");
        setSocialsField("");
        setEmailField("");
        setMessageField("");
        setFailed(false);
        setSuccessful(true);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
      setFailed(true);
      setSuccessful(false);
    } finally {
      setLoading(false);
      setDisabled(true);
    }
  };

  useEffect(() => {
    setNicknameField("");
    setSocialsField("");
    setEmailField("");
    setMessageField("");
    setLoading(false);
    setDisabled(false);
    setFailed(false);
    setSuccessful(false);
  }, [pathname]);

  return (
    <Box position="relative" overflow="hidden" borderRadius="29px">
      <Box
        display="flex"
        flexDirection="row"
        height="100%"
        borderRadius="30px"
        p={{ xs: 2, md: 3 }}
        pt={4}
        gap={2.5}
        sx={{
          overflow: "hidden",
          pointerEvents: disabled ? "none" : "all",
          filter: disabled ? "blur(10px)" : "blur(0px)",
          transition: "filter 0.5s ease",
          backgroundColor: { xs: "var(--bg-main)", md: "background.default" },
          "@media (max-width: 850px)": {
            flexDirection: "column",
          },
          opacity: 0,
          animation: "FadeIn 1s ease forwards",
        }}
      >
        <ContactsForm
          nicknameValue={nicknameField}
          setNicknameValue={setNicknameField}
          nicknameError={nicknameError}
          socialsValue={socialsField}
          setSocialsValue={setSocialsField}
          emailValue={emailField}
          setEmailValue={setEmailField}
          emailError={emailError}
        />
        <TextForm value={messageField} setValue={setMessageField} />
        <SendSection loading={loading} onSubmit={onSubmit} />
      </Box>
      {disabled && (
        <Stack
          px={2}
          position="absolute"
          zIndex={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="29px"
          height={{ xs: 200, lg: 240 }}
          width={{ xs: 300, md: 340, lg: 450 }}
          sx={{
            backgroundColor: "background.default",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0,
            animation: "FadeIn 0.5s ease forwards",
          }}
        >
          {failed && (
            <Box
              height={{ xs: 40, lg: 56 }}
              mb={1}
              component="img"
              src="/error.svg"
              sx={{ aspectRatio: 1 }}
            />
          )}
          {successful && (
            <Box
              height={{ xs: 40, lg: 56 }}
              borderRadius={50}
              mb={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="solid 3px"
              sx={{
                borderColor: "primary.main",
                aspectRatio: 1,
              }}
            >
              <Box
                width={{ xs: 18, lg: 25 }}
                component="img"
                src="/done-icon.svg"
              />
            </Box>
          )}
          <Typography fontSize={{ xs: "1.25rem", lg: "1.5rem" }} color="#fff">
            {successful && (isEn ? "Thank you!" : "Дякуємо!")}
            {failed && (isEn ? "Oops!" : "Упс!")}
          </Typography>

          <Typography
            fontSize={{ xs: "0.65rem", lg: "0.75rem" }}
            color="text.secondary"
            mb={3}
            textAlign="center"
          >
            {successful &&
              (isEn
                ? "We will contact you soon."
                : "Ми скоро зв’яжемося з вами.")}
            {failed &&
              (isEn ? "Something went off plan" : "Щось пішло не по плану")}
          </Typography>
          <Button
            onClick={() => setDisabled(false)}
            variant="contained"
            sx={{
              borderRadius: "99px",
              width: { xs: 200, lg: 240 },
              height: 30,
              p: 0,
              fontSize: "0.75rem",
              fontWeight: 700,
              backgroundColor: failed ? "#fff" : "primary.main",
              "&:hover": {
                backgroundColor: failed ? "#c5c5c5" : "primary.dark",
              },
            }}
          >
            {isEn ? "CLOSE" : "ЗАКРИТИ"}
          </Button>
        </Stack>
      )}
    </Box>
  );
}
