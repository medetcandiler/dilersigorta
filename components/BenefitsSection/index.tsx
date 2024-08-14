import { FC } from "react";
import BenefitCard from "../BenefitCard";
import { benefits } from "./data";

const Benefits: FC = () => {
  return (
    <section className="bg-[#fafafa]">
      <div className="container mx-auto paddingForSections ">
        <div className="grid justify-items-center grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"> 
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
