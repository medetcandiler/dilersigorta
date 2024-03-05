import React, { FC, ReactNode } from "react";
import { Metadata } from "next";

interface ITermsOfUseProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Diler Sigorta | Kullanım Şartları",
};
const IletisimLayout: FC<ITermsOfUseProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default IletisimLayout;
