import { Typography } from "@mui/material";
import ServicesLayout from "../components/ServicesLayout";

export default function Mods() {
  return (
    <ServicesLayout
      img="/mods-img.svg"
      title="Втілимо ваш мод у реальність"
      color="#BB8EFF"
    >
      У нашій команді розробників модів більшість має{" "}
      <Typography component="span" color="primary.main" fontSize="inherit">
        понад 9k{" "}
      </Typography>
      годин у Minecraft. Ми не просто граємо ми створюємо улюблені моди та{" "}
      <Typography component="span" color="primary.main" fontSize="inherit">
        чудово розуміємо
      </Typography>
      , як втілити твою ідею так, щоб результат{" "}
      <Typography component="span" color="primary.main" fontSize="inherit">
        повністю{" "}
      </Typography>
      відповідав{" "}
      <Typography component="span" color="primary.main" fontSize="inherit">
        твоєму баченню{" "}
      </Typography>
      .
    </ServicesLayout>
  );
}
