import { Metadata } from "next";
import { FC, ReactNode } from "react";

interface IAboutLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Diler Sigorta | Faydalı Linkler'
}

const AboutLayout: FC<IAboutLayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default AboutLayout;
