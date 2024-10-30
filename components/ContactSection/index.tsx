import { FC } from "react";
import GoogleMaps from "../GoogleMaps";
import ContactForm from "../ContactForm";
import Image from "next/image";
import Link from "next/link";
import { IContentSectionProps } from "./interface";
import ContactSectionAdress from "../ContactSectionAdress";

const ContactSection: FC<IContentSectionProps> = ({ isPage }) => {
  const styling = {
    background:
      "radial-gradient(rgba(0, 128, 128, 0.2), rgba(0, 123, 255, 0.2))",
  };
  return (
    <div className={`${isPage ? "pt-[70px]" : ""}`}>
      {isPage ? (
        <div className="relative h-[50vh]" style={styling}>
          <Image
            src="/images/dilersigortabg2.png"
            fill={true}
            alt="Diler sigorta contact section background"
            className="object-cover -z-10"
            priority
          />
          <div className="flex justify-center items-center h-full">
            <h3 className="titleStyle text-[#fff]">İletişim</h3>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="container mx-auto flex flex-col items-center gap-14 paddingForSections md:px-0">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-5 items-center">
            <h1 className="titleStyle md:text-3xl lg:text-4xl">Bize Ulaşın</h1>
            <div className="flex flex-col gap-5  justify-between md:flex-row md:gap-12">
              <div className="flex  gap-2.5 justify-between group">
                <Image
                  src="/icons/phone.svg"
                  alt="diler sigorta phone icon"
                  className="my-auto w-[24px] h-[24px] transition duration-300 group-hover:scale-125 "
                  width={24}
                  height={24}
                />
                <Link
                  href="tel:+905392343777"
                  className="flex-auto links-hover subTitleStyle pb-0 text-center text-xl font-medium "
                >
                  (539) 234 37 77
                </Link>
              </div>

              <div className="flex gap-2.5 justify-between group">
                <Image
                  src="/icons/phone.svg"
                  alt="diler sigorta phone icon"
                  className="my-auto w-[24px] h-[24px] transition duration-300 group-hover:scale-125 "
                  width={24}
                  height={24}
                />
                <Link
                  href="tel:+902163534892"
                  className="flex-auto links-hover subTitleStyle pb-0 text-center text-xl font-medium "
                >
                  (216) 353 48 92
                </Link>
              </div>
            </div>

            <h3 className="subTitleStyle pb-0 text-center text-xl font-medium ">
              Diler Sigorta Ofis Lokasyonlarımız
            </h3>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <ContactSectionAdress
              address="Atalar, Diler Sigorta, Üsküdar Cd. NO: 117, 34862 Kartal/İstanbul"
              linkToMap="www.google.com/maps/dir//Atalar,+Diler+Sigorta,+%C3%9Csk%C3%BCdar+Cd.+NO:117,+34862+Kartal%2F%C4%B0stanbul/@40.9021467,29.083375,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cac38ba3ac041d:0xba966ab998541c9!2m2!1d29.1658033!2d40.9021946?entry=ttu"
            />
            <ContactSectionAdress
              address="Örnek Mahallesi,Cahar Dudayev Cad.Ferah Feza Sok.No:9 Ataşehir/İstanbul"
              linkToMap="www.google.com/maps/dir//%C3%96rnek,+Ferah+Feza+Sk.+No:9,+34704+Ata%C5%9Fehir%2F%C4%B0stanbul/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14cac7dac57c8bf9:0x34dbfdafd9a528f?sa=X&ved=1t:707&ictx=111"
            />
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
