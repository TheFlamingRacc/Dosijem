import ServicesLayout from "@/app/components/ServicesLayout";
import { Typography } from "@mui/material";

export default function ServersEn() {
  return (
    <ServicesLayout
      color="#3F3F4B"
      title="We will launch your exclusive server"
      img="/servers-img.svg"
    >
      <Typography component="span" color="#D9937A" fontSize="inherit">
        Server creation is the work our team is most passionate about.{" "}
      </Typography>
      With every project we undertake, we reach new heights and push our own
      boundaries. We have already launched 
      <Typography component="span" color="#D9937A" fontSize="inherit">
        numerous successful servers
      </Typography>
      , driven by dedication and infectious enthusiasm - and we are ready to
      bring that same energy and momentum to your server.
    </ServicesLayout>
  );
}
