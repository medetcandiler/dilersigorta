import { FC } from "react";
import { helpfullLinks } from "./data";
import HelpfullLinkCard from "../HelpfullLinkCard";

const HelpfullLinksSection: FC = () => {
  return (
    <section className="bg-[#fff] paddingForSections px-10">
      <h1 className="titleStyle pb-8">Yararlı Bağlantılar</h1>
      <h3 className="subTitleStyle">
        Bağlantıya geçmek için kartlara tıklayabilirsiniz.
      </h3>

      <div className="container mx-auto flex justify-center md:px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-20 lg:grid-cols-3">
          {helpfullLinks.map((link) => (
            <HelpfullLinkCard
              key={link.id}
              title={link.title}
              description={link.description}
              url={link.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpfullLinksSection;