import { FC } from "react";
import { aboutSectionContent } from "./data";
import AboutCard from "../AboutCard";
import Image from "next/image";

const AboutSection: FC = () => {
  const styling = {
    background:
      "radial-gradient(rgba(0, 128, 128, 0.2), rgba(0, 123, 255, 0.2))",
  };
  return (
    <div className="relative pt-[70px]">
      <div className="relative h-[50vh]" style={styling}>
        <Image
          src="/images/aboutsect.jpg"
          fill={true}
          alt="Diler sigorta about section background"
          className="object-cover -z-10"
          priority
        />
        <div className="flex justify-center items-center h-full">
          <h3 className="titleStyle text-[#fff]">Hakkımızda</h3>
        </div>
      </div>

      <div className="container mx-auto flex flex-col gap-20 py-10">
        {aboutSectionContent.map((content) => (
          <AboutCard
            key={content.id}
            title={content.title}
            content={content.content}
            imageSrc={content.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
