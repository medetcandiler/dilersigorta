import React, { FC } from "react";
import { IPartnerCard } from "./interface";
import Image from "next/image";

const PartnerCard: FC<IPartnerCard> = ({ imageSrc, alt, size }) => {
  return (
    <div className="flex justify-center items-center transition duration-300 cursor-pointer px-5 bg-[#fff] p-5 h-32 shadow-2xl rounded-xl md:h-40 ">
      <Image src={imageSrc} width={size} height={size} alt={alt} />
    </div>
  );
};

export default PartnerCard;
