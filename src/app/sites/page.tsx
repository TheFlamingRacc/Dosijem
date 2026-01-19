import { Typography } from "@mui/material";
import ServicesLayout from "../components/ServicesLayout";

export default function Sites() {
  return (
    <ServicesLayout
      color="#B18C72"
      img="/sites-img.svg"
      title="Втілимо вашу задумку у сайт"
    >
      <Typography component="span" color="#B18C72" fontSize="inherit">
        Сайти{" "}
      </Typography>
      - це наша{" "}
      <Typography component="span" color="#B18C72" fontSize="inherit">
        сильна{" "}
      </Typography>
      сторона. У{" "}
      <Typography component="span" color="#B18C72" fontSize="inherit">
        DOSIJEM{" "}
      </Typography>
      ми втілюємо кожну ідею у сайт, який виглядає{" "}
      <Typography component="span" color="#B18C72" fontSize="inherit">
        якісніше{" "}
      </Typography>
      та{" "}
      <Typography component="span" color="#B18C72" fontSize="inherit">
        сучасніше
      </Typography>
      за будь-який інший у своїй ніші.
    </ServicesLayout>
  );
}
