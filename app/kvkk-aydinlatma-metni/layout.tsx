import React, { FC, ReactNode } from "react";
import { Metadata } from "next";

interface IIletisimLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Diler Sigorta | KVKK Aydınlatma Metni",
};
const IletisimLayout: FC<IIletisimLayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default IletisimLayout;
