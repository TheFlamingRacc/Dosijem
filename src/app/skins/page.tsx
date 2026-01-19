import { Typography } from "@mui/material";
import ServicesLayout from "../components/ServicesLayout";

export default function Skins() {
  return (
    <ServicesLayout
      color="#B6865E"
      img="/skins-img.svg"
      title="Намалюємо для вас ваш власний скін"
    >
      Над{" "}
      <Typography component="span" color="#B6865E" fontSize="inherit">
        усіма{" "}
      </Typography>
      скінами, які нам довіряють, працюють найкращі дизайнери та арти у{" "}
      <Typography component="span" color="#B6865E" fontSize="inherit">
        DOSIJEM{" "}
      </Typography>
      вони вміють як ніхто втілювати{" "}
      <Typography component="span" color="#B6865E" fontSize="inherit">
        ваші ідеї{" "}
      </Typography>
      та{" "}
      <Typography component="span" color="#B6865E" fontSize="inherit">
        побажання{" "}
      </Typography>
      в унікальні скіни, створені{" "}
      <Typography component="span" color="#B6865E" fontSize="inherit">
        саме для вас
      </Typography>
      .
    </ServicesLayout>
  );
}
