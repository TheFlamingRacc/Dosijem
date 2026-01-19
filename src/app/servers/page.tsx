import { Typography } from "@mui/material";
import ServicesLayout from "../components/ServicesLayout";

export default function Servers() {
  return (
    <ServicesLayout
      color="#3F3F4B"
      img="/servers-img.svg"
      title="Запустимо ваш ексклюзивний сервер"
    >
      <Typography component="span" color="#D9937A" fontSize="inherit">
        Створення серверів{" "}
      </Typography>
      - це справа, яку наша команда найбільше любить. Працюючи над кожним
      проєктом, ми щоразу{" "}
      <Typography component="span" color="#D9937A" fontSize="inherit">
        досягаємо нових висот{" "}
      </Typography>
      і перевершуємо самих себе. Ми вже реалізували безліч успішних серверів,
      працюючи з{" "}
      <Typography component="span" color="#D9937A" fontSize="inherit">
        відданістю{" "}
      </Typography>
      та{" "}
      <Typography component="span" color="#D9937A" fontSize="inherit">
        ентузіазмом{" "}
      </Typography>
      - і готові продовжувати в тому ж темпі з вашим сервером{" "}
    </ServicesLayout>
  );
}
