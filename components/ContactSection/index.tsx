import { FC } from "react";
import GoogleMaps from "../GoogleMaps";
import ContactForm from "../ContactForm";
import Image from "next/image";

const ContactSection: FC = () => {
  const styling = {
    backgroundImage:
      "radial-gradient(rgba(0, 128, 128, 0.2), rgba(0, 123, 255, 0.1)), url('/images/dilersigortabg.jpeg')",
  };
  return (
    <div className=" pt-[70px]">
      <div className="bg-cover bg-center h-[50vh]" style={styling}>
        <div className="flex justify-center items-center h-full">
          <h3 className="titleStyle text-[#fff]">İletişim</h3>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center gap-10 py-14 px-12 md:px-0">
        <div className="flex flex-col items-center gap-5">
          <h3 className="titleStyle md:text-3xl lg:text-4xl">Bize Ulaşın</h3>
          <div className=" subTitleStyle text-neutral-500 pb-0">
            <p className="relative px-2 md:px-6">
              <Image
                className="absolute top-1 -left-2  md:top-1/2 md:-translate-y-1/2 "
                src="/icons/location.svg"
                height={16}
                width={16}
                alt="location logo"
              />
              Atalar, Diler Sigorta, Üsküdar Cd. NO:117, 34862 Kartal/İstanbul
            </p>
          </div>
          <div className="subTitleStyle text-neutral-500 pb-0">
            <p className="relative px-3 sm:px-5 md:px-6">
              <Image
                className="absolute top-1 -left-2  md:top-1/2 md:-translate-y-1/2 "
                src="/icons/location.svg"
                height={16}
                width={16}
                alt="location logo"
              />
              Örnek Mahallesi, Cahar Dudayev Cad., Ferah Feza Sok., No:9,
              Ataşehir/İstanbul
            </p>
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
