import Image from "next/image";
import { FC } from "react";
import { aboutSectionContent } from "./data";
import AboutCard from "../AboutCard";

const AboutSection: FC = () => {
  const styling = {
    backgroundImage:
      "radial-gradient(rgba(0, 128, 128, 0.2), rgba(0, 123, 255, 0.1)), url('/images/aboutsect.jpg')",
  };
  return (
    <div className="relative pt-[70px]">
      <div className="bg-cover bg-center h-[50vh]" style={styling}>
        <div className="flex justify-center items-center h-full">
          <h3 className="text-[#fff] text-5xl">Hakkımızda</h3>
        </div>
      </div>

      <div className="container mx-auto flex flex-col gap-20 py-10">
        {aboutSectionContent.map(content => (
          <AboutCard key={content.id} title={content.title} content={content.content} imageSrc={content.imageSrc}/>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
