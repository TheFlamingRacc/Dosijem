import { Typography } from "@mui/material";
import ServicesLayout from "../components/ServicesLayout";

export default function Design() {
  return (
    <ServicesLayout
      title="Створимо унікальний дизайн для вашого сервера"
      color="#B39E8D"
      img="/design-img.svg"
    >
      <Typography component="span" color="#EADDD4" fontSize="inherit">
        DOSIJEM{" "}
      </Typography>
      постійно створює дизайни, маючи великий досвід і креативне бачення. Ми
      розробимо{" "}
      <Typography component="span" color="#EADDD4" fontSize="inherit">
        унікальний{" "}
      </Typography>
      і{" "}
      <Typography component="span" color="#EADDD4" fontSize="inherit">
        впізнаваний{" "}
      </Typography>
      стиль саме для вашого сервера, адже розуміємо, наскільки{" "}
      <Typography component="span" color="#EADDD4" fontSize="inherit">
        зовнішній вигляд впливає на сприйняття проєкту.
      </Typography>
    </ServicesLayout>
  );
}
