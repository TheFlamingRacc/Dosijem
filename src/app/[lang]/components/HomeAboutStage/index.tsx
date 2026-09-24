import { getDictionary, Locale } from "../../dictionaries";
import { SITE_NAME } from "../../seo";
import Footer from "../Footer";
import HomeContent from "../../home/HomeContent";
import AboutContent from "../../about/AboutContent";
import Stage, { StageSection } from "./Stage";

type Props = {
  lang: Locale;
  initial: StageSection;
};

// /home and /about render the same stage; the route decides which half is
// server-rendered and shown first. The other half is only added on desktop.
export default async function HomeAboutStage({ lang, initial }: Props) {
  const dict = await getDictionary(lang);

  return (
    <Stage
      lang={lang}
      initial={initial}
      titles={{
        // Same titles the routes' metadata produce (about uses the "%s | DOSIJEM" template).
        home: dict.seo.home.title,
        about: `${dict.seo.about.title} | ${SITE_NAME}`,
      }}
      home={<HomeContent dict={dict} optional={initial !== "home"} />}
      about={<AboutContent lang={lang} dict={dict} />}
      footer={<Footer dict={dict} />}
    />
  );
}
