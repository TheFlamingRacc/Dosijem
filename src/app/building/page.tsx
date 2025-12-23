import { Typography } from "@mui/material";
import ServicesLayout from "../components/ServicesLayout";

export default function Building() {
  return (
    <ServicesLayout
      title="Збудуємо ваші амбітні проєкти"
      img="/buildings-img.svg"
      color="#E1AAA2"
    >
      Створюючи різні проєкти, наші білдери завжди працюють{" "}
      <Typography component="span" color="#E1AAA2" fontSize="inherit">
        на повну{" "}
      </Typography>
      , адже займаються улюбленою справою -{" "}
      <Typography component="span" color="#E1AAA2" fontSize="inherit">
        втіленням ідей{" "}
      </Typography>
      у неймовірно красиві будівлі та карти. Співпрацюючи з нашими білдерами, ви{" "}
      <Typography component="span" color="#E1AAA2" fontSize="inherit">
        можете бути певні
      </Typography>
      : свій проєкт ви довіряєте{" "}
      <Typography component="span" color="#E1AAA2" fontSize="inherit">
        справжнім професіоналам{" "}
      </Typography>
      .
    </ServicesLayout>
  );
}
