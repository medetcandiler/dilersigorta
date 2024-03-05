import { FC } from "react";
import { IProductInnerCard } from "./interface";
import Image from "next/image";

const ProductInnerCard: FC<IProductInnerCard> = ({ title, description }) => {
  return (
    <div className="relative shadow-2xl p-6 rounded-xl lg:w-1/2">
      <div className="flex justify-between items-center py-12 px-5 rounded-lg bg-gradient-to-r from-[#0BA5E9] to-blue-700">
        <h1 className="text-xl text-[#fff]">{title}</h1>
        <Image
          src="/images/whitedilerlogo.png"
          width={100}
          height={100}
          alt="dilersigorta logo"
          className="opacity-20"
        />
      </div>
      <div className="pt-10 pb-20">
        <h1>{description}</h1>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button className="skySqrButton whitespace-nowrap">Daha Fazla Bilgi Al</button>
      </div>
    </div>
  );
};

export default ProductInnerCard;
