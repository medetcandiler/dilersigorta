import React, { FC, ReactNode } from "react";
import { Metadata } from "next";

interface ITermsOfUseProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Diler Sigorta | Kartal İlçesi Kullanım Şartları",
  description:
    "Diler Sigorta’nın Kartal ilçesinde güvenilir sigorta hizmetleri sunan web sitesi için kullanım şartlarını öğrenin. Kartal ve çevresindeki müşterilerimize yönelik sunduğumuz güvenli sigorta çözümleri hakkında bilgi sahibi olun.",
};

const TermsOfUseLayout: FC<ITermsOfUseProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default TermsOfUseLayout;
