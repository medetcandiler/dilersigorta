import { Metadata } from "next";
import { FC, ReactNode } from "react";

interface IAboutLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Diler Sigorta | Hakkımızda",
  description:
    "Diler Sigorta hakkında daha fazla bilgi edinin. Misyonumuz, vizyonumuz ve değerlerimiz hakkında detaylı bilgilere ulaşın.",
};

const AboutLayout: FC<IAboutLayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default AboutLayout;
