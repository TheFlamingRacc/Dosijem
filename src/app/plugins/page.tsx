import { Typography } from "@mui/material";
import ServicesLayout from "../components/ServicesLayout";

export default function Plugins() {
  return (
    <ServicesLayout
      color="#D99592"
      img="/plugin-img.svg"
      title="Втілимо ваш плагін у реальність"
    >
      Коли ви надсилаєте нам заявку, ми{" "}
      <Typography component="span" color="#D99592" fontSize="inherit">
        уважно{" "}
      </Typography>
      ознайомлюємося з вашою ідеєю, щоб{" "}
      <Typography component="span" color="#D99592" fontSize="inherit">
        повністю зрозуміти її задум
      </Typography>
      . Протягом усього процесу розробки ми{" "}
      <Typography component="span" color="#D99592" fontSize="inherit">
        дбаємо{" "}
      </Typography>
      про те, щоб результат не лише точно відображав вашу ідею, а й робив її ще{" "}
      <Typography component="span" color="#D99592" fontSize="inherit">
        яскравішою{" "}
      </Typography>
      та{" "}
      <Typography component="span" color="#D99592" fontSize="inherit">
        виразнішою
      </Typography>
      .
    </ServicesLayout>
  );
}
