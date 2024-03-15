import React, { FC, ReactNode } from "react";
import { Metadata } from "next";

interface IKvkkLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Diler Sigorta | KVKK Aydınlatma Metni",
  description:
    "Diler Sigorta'nın Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında hazırladığı aydınlatma metnini inceleyin. Kişisel verilerinizin işlenmesi hakkında detaylı bilgi alın.",
};

const KvkkLayout: FC<IKvkkLayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default KvkkLayout;
