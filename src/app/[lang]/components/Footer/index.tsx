import { Dictionary } from "../../dictionaries";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";
import TabletFooter from "./TabletFooter";

type Props = {
  dict: Dictionary;
};

export default function Footer({ dict }: Props) {
  return (
    <>
      <DesktopFooter dict={dict} />
      <TabletFooter dict={dict} />
      <MobileFooter dict={dict} />
    </>
  );
}
