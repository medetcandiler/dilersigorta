import React, { FC, ReactNode } from "react";
import { Metadata } from "next";

interface IIletisimLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Diler Sigorta | İletişim",
  description:
    "Diler Sigorta İstanbul ilinin Kartal ilçesinde faaliyet gösteren bir sigorta acentedir. Sorularınızı sormak, geri bildirimde bulunmak veya teklif almak için bize ulaşın.",
};

const IletisimLayout: FC<IIletisimLayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default IletisimLayout;
