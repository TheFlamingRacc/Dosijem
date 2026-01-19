import ServicesLayout from "@/app/components/ServicesLayout";
import { Typography } from "@mui/material";

export default function BuildingEn() {
  return (
    <ServicesLayout
      img="/buildings-img.svg"
      color="#E1AAA2"
      title="We will bring your ambitious projects to life"
    >
      <Typography component="span" color="#E1AAA2" fontSize="inherit">
        While working on diverse projects, our builders always give their all{" "}
      </Typography>
      , fueled by their passion for transforming ideas into stunning builds and
      maps. When you collaborate with our build team, you can be certain of one
      thing:{" "}
      <Typography component="span" color="#E1AAA2" fontSize="inherit">
        your project is in the hands of true professionals.
      </Typography>
    </ServicesLayout>
  );
}
