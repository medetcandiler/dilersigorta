import { FC } from "react";
import HelpfullLinksSection from "../HelpfulLinksSection";
import Image from "next/image";

const HelpfullLinkPage: FC = () => {
  const styling = {
    background:
      "radial-gradient(rgba(0, 128, 128, 0.2), rgba(0, 123, 255, 0.2))",
  };
  return (
    <div className="relative pt-[70px]">
      <div className="relative h-[50vh]" style={styling}>
        <Image
          src="/images/faydalilink.jpg"
          fill={true}
          alt="Diler sigorta helpfullink section background"
          className="object-cover -z-10"
          priority
        />
        <div className="flex justify-center items-center h-full">
          <h3 className="titleStyle text-[#fff]">Faydalı Linkler</h3>
        </div>
      </div>

      <div className="container mx-auto flex flex-col gap-20 bg-[#fafafa]  ">
        <HelpfullLinksSection isSection={false} />
      </div>
    </div>
  );
};

export default HelpfullLinkPage;
