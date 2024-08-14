import React, { FC } from "react";
import { IPartnerCard } from "./interface";
import Image from "next/image";

const PartnerCard: FC<IPartnerCard> = ({
  imageSrc,
  alt,
  size,
  phoneNumber,
}) => {
  const formattedPhoneNumber = phoneNumber.substring(4, phoneNumber.length);
  return (
    <div className="flip-card flex justify-center h-32 w-60 relative cursor-pointer  md:h-40">
      <div className="flip-card-inner">
        <div className="flip-card-front flex justify-center items-center  px-5 bg-[#fff]  drop-shadow-md rounded-xl ">
          <Image className="w-2/3 md:w-auto" src={imageSrc} width={size} height={size} alt={alt} />
        </div>

        <div className="flip-card-back bg-[#0BA5E9] flex flex-col items-center justify-center gap-2 md:gap-2 drop-shadow-md text-white  rounded-xl ">
          <div className="flex gap-1 p-2 rounded-lg transition duration-300 hover:scale-105 hover:bg-[#0877c0] md:gap-2.5  ">
            <Image
              src="/icons/bluePhone.svg"
              alt="phone"
              className="my-auto w-[18px] h-[18px] "
              width={24}
              height={24}
            />
            <a
              href={`tel:${phoneNumber}`}
              className="text whitespace-nowrap"
            >
              {formattedPhoneNumber}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
