import { FC } from "react";
import GoogleMaps from "../GoogleMaps";
import ContactForm from "../ContactForm";
import Image from "next/image";
import { IContentSectionProps } from "./interface";
import ContactSectionAdress from "../ContactSectionAdress";

const ContactSection: FC<IContentSectionProps> = ({ isPage }) => {
  const styling = {
    backgroundImage:
      "radial-gradient(rgba(0, 128, 128, 0.2), rgba(0, 123, 255, 0.1)), url('/images/dilersigortabg2.png')",
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

      <div className="container mx-auto flex flex-col items-center gap-14 py-14 px-5 md:px-0">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-5 items-center">
            <h1 className="titleStyle md:text-3xl lg:text-4xl">Bize Ulaşın</h1>
            <h3 className="text-center text-xl font-medium text-neutral-500">
              Diler Sigorta Ofis Lokasyonlarımız
            </h3>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <ContactSectionAdress address="Atalar, Diler Sigorta, Üsküdar Cd. NO: 117, 34862 Kartal/İstanbul" />
            <ContactSectionAdress address="Örnek Mahallesi,Cahar Dudayev Cad.Ferah Feza Sok.No:9 Ataşehir/İstanbul" />
          </div>
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
