import React, { FC, ReactNode } from "react";
import { Metadata } from "next";

interface ITermsOfUseProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Diler Sigorta | Kullanım Şartları",
  description:
    "Diler Sigorta'nın web sitesini kullanırken geçerli olan kullanım şartlarını öğrenin. Web sitemizi kullanarak kabul ettiğiniz koşulları buradan inceleyin.",
};

const TermsOfUseLayout: FC<ITermsOfUseProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default TermsOfUseLayout;
