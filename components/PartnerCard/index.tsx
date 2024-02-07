import React, { FC } from "react";
import { IPartnerCard } from "./interface";
import Image from "next/image";

const PartnerCard: FC<IPartnerCard> = ({ imageSrc, alt, size }) => {
  return (
    <div className="flex justify-center items-center transition duration-300 cursor-pointer hoverTranslateY bg-[#fff] p-5 h-28 shadow-2xl rounded-xl md:h-40 ">
      <img src={imageSrc} width={size} height={size} alt={alt}  />
    </div>
  );
};

export default PartnerCard;
