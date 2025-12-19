"use client";

import { Stack, TextField, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function TextForm({ value, setValue }: Props) {
  const pathname = usePathname();
  const isEnglish = pathname.includes("/en");

  return (
    <Stack spacing={1} flex={1}>
      <Typography
        fontSize="1.25rem"
        fontFamily={"e-UkraineHead"}
        fontWeight={500}
        color="white"
      >
        {isEnglish ? "Message " : "Повідомлення "}
        <Typography component="span" color="text.secondary" fontSize="0.75rem">
          {isEnglish ? "(optional)" : "(не обов'язково)"}
        </Typography>
      </Typography>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        fullWidth
        multiline
        minRows={7}
        variant="outlined"
        sx={{
          height: "100%",
          "& .MuiOutlinedInput-root": {
            overflow: "auto !important",
            height: "100%",
            alignItems: "flex-start",
            "& fieldset": {
              borderColor: "background.paper",
              borderWidth: "3px",
              transition: "border-color ease 0.2s",
            },
            borderRadius: "25px",
          },
        }}
      />
    </Stack>
  );
}
