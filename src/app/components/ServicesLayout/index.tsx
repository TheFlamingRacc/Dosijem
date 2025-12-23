import { PropsWithChildren } from "react";
import MobileLayout from "./components/MobileLayout";
import MainLayout from "./components/MainLayout";

export type ServicesProps = PropsWithChildren & {
  color: string;
  title: string;
  img: string;
};

export default function ServicesLayout({
  children,
  color,
  title,
  img,
}: ServicesProps) {
  return (
    <>
      <MainLayout color={color} img={img} title={title}>
        {children}
      </MainLayout>
      <MobileLayout color={color} img={img} title={title}>
        {children}
      </MobileLayout>
    </>
  );
}
