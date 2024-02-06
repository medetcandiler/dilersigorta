import { FC } from "react";
import { partners } from "./data";
import PartnerCard from "../PartnerCard";

const PartnersSection: FC = () => {
  return (
    <section className="bg-[#fff] paddingForSections px-5 md:px-16">
      <div className="container mx-auto ">
        <h1 className="titleStyle pb-16">
          İş Birliği Yaptığımız Şirketler
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              imageSrc={partner.imageSrc}
              alt={partner.alt}
              size={partner.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
