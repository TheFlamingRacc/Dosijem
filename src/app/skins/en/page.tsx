import ServicesLayout from "@/app/components/ServicesLayout";
import { Typography } from "@mui/material";

export default function SkinsEn() {
  return (
    <ServicesLayout
      img="/skins-img.svg"
      title="We'll create a custom skin just for you"
      color="#B6865E"
    >
      <Typography component="span" color="#B6865E" fontSize="inherit">
        All the skins entrusted to us{" "}
      </Typography>
      are handled by the best designers and artists at DOSIJEM. They are
      uniquely skilled at bringing your ideas and wishes to life in the form of{" "}
      <Typography component="span" color="#B6865E" fontSize="inherit">
        unique, tailor-made skins created just for you.
      </Typography>
    </ServicesLayout>
  );
}
