import ServicesLayout from "@/app/components/ServicesLayout";
import { Typography } from "@mui/material";

export default function ModsEn() {
  return (
    <ServicesLayout
      title="We will bring your mod to reality"
      img="/mods-img.svg"
      color="#BB8EFF"
    >
      In our team of mod developers most have{" "}
      <Typography component="span" color="primary.main" fontSize="inherit">
        over 9k{" "}
      </Typography>
      hours in Minecraft. We don’t just play we create favorite mods and{" "}
      <Typography component="span" color="primary.main" fontSize="inherit">
        deeply understand
      </Typography>
      how to bring your idea to life so that the result{" "}
      <Typography component="span" color="primary.main" fontSize="inherit">
        fully{" "}
      </Typography>
      matches your{" "}
      <Typography component="span" color="primary.main" fontSize="inherit">
        vision{" "}
      </Typography>
      .
    </ServicesLayout>
  );
}
