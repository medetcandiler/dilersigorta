import { FC } from "react";
import { partners } from "./data";
import PartnerCard from "../PartnerCard";

const PartnersSection: FC = () => {
  return (
    <section className="bg-[#fff] paddingForSections">
      <div className="container mx-auto ">
        <h1 className="titleStyle pb-8">İş Birliği Yaptığımız Şirketler</h1>
        <h3 className="subTitleStyle">
          {" "}
          Kartların üzerine gelerek acil yardım numaralarına ulaşabilirsiniz
        </h3>
        <div className="grid place-content-center">
          <div className="flex flex-col items-center gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:justify-center md:gap-20">
            {partners.map((partner) => (
              <PartnerCard
                key={partner.id}
                imageSrc={partner.imageSrc}
                alt={partner.alt}
                size={partner.size}
                phoneNumber={partner.phoneNumber}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
