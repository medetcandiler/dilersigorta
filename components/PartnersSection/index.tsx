import { FC } from "react";
import { partners } from "./data";
import PartnerCard from "../PartnerCard";

const PartnersSection: FC = () => {
  return (
    <section className="bg-[#fafafa] paddingForSections px-5 md:px-16">
      <div className="container mx-auto ">
        <h1 className="titleStyle pb-8">İş Birliği Yaptığımız Şirketler</h1>
        <h3 className="subTitleStyle">
          {" "}
          Kartların üzerine gelerek iletişim bilgilerini görüntüleyebilirsiniz
        </h3>
        <div className="grid place-content-center">
          <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 md:justify-center gap-10 md:gap-40">
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
