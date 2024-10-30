import { Metadata } from "next";
import { FC, ReactNode } from "react";

interface IAboutLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Diler Sigorta | Hakkımızda",
  description:
    "Diler Sigorta, İstanbul Kartal’da uzman bir sigorta acentesi olarak, müşteri odaklı hizmet anlayışıyla araç, konut, sağlık ve işyeri sigorta çözümleri sunmaktadır. Güvenilirliğe ve sürdürülebilir ilişkilere odaklanarak, bireysel ve kurumsal müşterilerimizin sigorta ihtiyaçlarını karşılıyoruz.",
};

const AboutLayout: FC<IAboutLayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default AboutLayout;
