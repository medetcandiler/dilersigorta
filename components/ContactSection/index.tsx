import { FC } from "react";
import GoogleMaps from "../GoogleMaps";
import ContactForm from "../ContactForm";
import Image from "next/image";
import { IContentSectionProps } from "./interface";
import ContactSectionAdress from "../ContactSectionAdress";

const ContactSection: FC<IContentSectionProps> = ({ isPage }) => {
  const styling = {
    backgroundImage:
      "radial-gradient(rgba(0, 128, 128, 0.2), rgba(0, 123, 255, 0.1)), url('/images/dilersigortabg.jpeg')",
  };
  return (
    <div className={`${isPage ? "pt-[70px]" : ""}`}>
      {isPage ? (
        <div className="bg-cover bg-center h-[50vh]" style={styling}>
          <div className="flex justify-center items-center h-full">
            <h3 className="titleStyle text-[#fff]">İletişim</h3>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="container mx-auto flex flex-col items-center gap-10 py-14 px-12 md:px-0">
        <div className="flex flex-col items-center gap-6">
          <h3 className="titleStyle md:text-3xl lg:text-4xl">Bize Ulaşın</h3>
          <ContactSectionAdress address="Atalar, Diler Sigorta, Üsküdar Cd. NO:117, 34862 Kartal/İstanbul" />
          <ContactSectionAdress address="Örnek Mahallesi,Cahar Dudayev Cad.Ferah Feza Sok. No:9 Ataşehir/İstanbul" />
          <GoogleMaps />
        </div>

        <div className="container mx-auto flex flex-col items-center gap-10 ">
          <div className="px-5">
            <h3 className="titleStyle md:text-3xl lg:text-4x">
              Bizimle İletişime Geçin
            </h3>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
