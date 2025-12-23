import ServicesLayout from "@/app/components/ServicesLayout";
import { Box, Stack, Typography } from "@mui/material";

export default function PluginsEn() {
  return (
    <ServicesLayout
      color="#D99592"
      title="We will bring your plugin to reality"
      img="/plugin-img.svg"
    >
      When you submit your application, we carefully review your idea to fully
      understand its concept. Throughout the entire{" "}
      <Typography component="span" color="#D99592" fontSize="inherit">
        development process
      </Typography>
      , we ensure that the result not only accurately reflects your idea but
      also makes it even more{" "}
      <Typography component="span" color="#D99592" fontSize="inherit">
        vibrant and expressive
      </Typography>
      .
    </ServicesLayout>
  );
}
