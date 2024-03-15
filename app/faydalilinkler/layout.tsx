import { Metadata } from "next";
import { FC, ReactNode } from "react";

interface IHelpfulLinksLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Diler Sigorta | Faydalı Linkler",
  description:
    "Diler Sigorta'nın sunduğu faydalı bağlantılara göz atın. Sigorta hizmetleri, sigorta bilgileri ve daha fazlası için yararlı kaynaklara erişin.",
};

const HelpfulLinksLayout: FC<IHelpfulLinksLayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default HelpfulLinksLayout;
