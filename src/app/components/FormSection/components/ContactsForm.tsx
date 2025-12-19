"use client";

import { Stack, TextField, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  nicknameValue: string;
  setNicknameValue: React.Dispatch<React.SetStateAction<string>>;

  socialsValue: string;
  setSocialsValue: React.Dispatch<React.SetStateAction<string>>;

  emailValue: string;
  setEmailValue: React.Dispatch<React.SetStateAction<string>>;

  nicknameError: boolean;

  emailError: boolean;
};

export default function ContactsForm({
  nicknameValue,
  setNicknameValue,
  socialsValue,
  setSocialsValue,
  emailValue,
  setEmailValue,
  nicknameError,
  emailError,
}: Props) {
  const pathname = usePathname();
  const isEnglish = pathname.includes("/en");

  return (
    <Stack flex={1} spacing={1}>
      <Typography
        fontSize="1.25rem"
        fontFamily={"e-UkraineHead"}
        fontWeight={500}
        color="white"
      >
        {isEnglish ? "Contacts" : "Контакти"}
      </Typography>
      <Stack
        height="100%"
        justifyContent="space-between"
        borderRadius="25px"
        p={{ xs: 4, md: 3, lg: "min(min(2vw, 4vh), 30px)" }}
        sx={{ backgroundColor: "background.paper" }}
        spacing={1.5}
      >
        <TextField
          value={nicknameValue}
          error={nicknameError}
          onChange={(e) => setNicknameValue(e.target.value)}
          variant="standard"
          label={isEnglish ? "Your nickname" : "Твій нікнейм"}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          sx={{
            "& .MuiInputLabel-root": { color: "#fff" },
            "& .MuiInputLabel-root.Mui-focused": { color: "#fff" },
            "& .MuiInputLabel-root.Mui-error": {
              color: "#fff",
            },

            "& .MuiInput-underline:before": {
              borderBottomColor: "#3A324F",
            },
            "& .MuiInputBase-input": { color: "#fff" },
          }}
        />
        <TextField
          value={socialsValue}
          onChange={(e) => setSocialsValue(e.target.value)}
          variant="standard"
          label={
            <>
              <Typography component="span">
                {isEnglish ? "Telegram or Discord " : "Telegram або Discord "}
              </Typography>
              <Typography color="text.secondary" component="span">
                {isEnglish ? "(optional)" : "(не обов'язково)"}
              </Typography>
            </>
          }
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          sx={{
            "& .MuiInputLabel-root": { color: "#fff" },
            "& .MuiInputLabel-root.Mui-focused": { color: "#fff" },
            "& .MuiInputLabel-root.Mui-error": {
              color: "#fff",
            },

            "& .MuiInput-underline:before": {
              borderBottomColor: "#3A324F",
            },
            "& .MuiInputBase-input": { color: "#fff" },
          }}
        />
        <TextField
          error={emailError}
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          label={"E-mail"}
          variant="standard"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          sx={{
            "& .MuiInputLabel-root": { color: "#fff" },
            "& .MuiInputLabel-root.Mui-focused": { color: "#fff" },
            "& .MuiInputLabel-root.Mui-error": {
              color: "#fff",
            },

            "& .MuiInput-underline:before": {
              borderBottomColor: "#3A324F",
            },
            "& .MuiInputBase-input": { color: "#fff" },
          }}
        />
      </Stack>
    </Stack>
  );
}
