import ServicesLayout from "@/app/components/ServicesLayout";
import { Typography } from "@mui/material";

export default function SitesEn() {
  return (
    <ServicesLayout
      color="#B18C72"
      title="We will bring your website idea to life"
      img="/sites-img.svg"
    >
      <Typography component="span" color="#B18C72" fontSize="inherit">
        Websites are our true expertise.{" "}
      </Typography>
      At DOSIJEM, we transform every concept into a site that is{" "}
      <Typography component="span" color="#B18C72" fontSize="inherit">
        more polished and contemporary{" "}
      </Typography>
      than anything else in its niche.
    </ServicesLayout>
  );
}
