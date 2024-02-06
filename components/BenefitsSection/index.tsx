import { FC } from "react";
import BenefitCard from "../BenefitCard";
import { benefits } from "./data";

const Benefits: FC = () => {
  return (
    <section className="bg-[#fafafa]">
      <div className="container mx-auto px-10 paddingForSections md:px-5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              imageSrc={benefit.imageUrl}
              title={benefit.title}
              description={benefit.description}
              bgColor={benefit.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
