"use client";

import { Box } from "@mui/material";
import ContactsForm from "./components/ContactsForm";
import TextForm from "./components/TextForm";
import SendSection from "./components/SendSection";
import { useState } from "react";
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

  const onSubmit = async () => {
    const isNicknameValid = nicknameField.trim().length > 1;
    const isEmailValid = emailRegex.test(emailField);

    setNicknameError(!isNicknameValid);
    setEmailError(!isEmailValid);

    if (!isNicknameValid || !isEmailValid) {
      return;
    }

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
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      height="100%"
      borderRadius="30px"
      p={{ xs: 2, md: 3 }}
      pt={4}
      gap={2.5}
      sx={{
        backgroundColor: { xs: "transparent", md: "background.default" },
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
      <SendSection onSubmit={onSubmit} />
    </Box>
  );
}
