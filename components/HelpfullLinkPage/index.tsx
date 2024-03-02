import { FC } from "react";
import HelpfullLinksSection from "../HelpfulLinksSection";

const HelpfullLinkPage: FC = () => {
  const styling = {
    backgroundImage:
      "radial-gradient(rgba(0, 128, 128, 0.2), rgba(0, 123, 255, 0.1)), url('/images/faydalilink.jpg')",
  };
  return (
    <div className="relative pt-[70px]">
      <div className="bg-cover bg-center h-[50vh]" style={styling}>
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
