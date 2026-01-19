import ServicesLayout from "@/app/components/ServicesLayout";
import { Typography } from "@mui/material";

export default function DesignEn() {
  return (
    <ServicesLayout
      title="We will create a unique design for your server"
      color="#B39E8D"
      img="/design-img.svg"
    >
      <Typography component="span" color="#EADDD4" fontSize="inherit">
        DOSIJEM{" "}
      </Typography>
      constantly creates designs, drawing on extensive experience and a creative
      vision. We will develop{" "}
      <Typography component="span" color="#EADDD4" fontSize="inherit">
        a unique and recognizable style specifically for your server{" "}
      </Typography>
      because we understand how much{" "}
      <Typography component="span" color="#EADDD4" fontSize="inherit">
        the visual appearance influences the perception of a project.{" "}
      </Typography>
    </ServicesLayout>
  );
}
