import { FC } from "react";
import { IProductCard } from "./interface";
import Image from "next/image";
import Link from "next/link";

const ProductCard: FC<IProductCard> = ({ title, imageSrc, isNav }) => {
  return (
    <Link
      href={`/urunler/${title.toLocaleLowerCase()}`}
      className="flex flex-col items-center links-hover hoverTranslateY"
    >
      <div
        className={`flex flex-col gap-1.5 items-center justify-center drop-shadow-xl px-12 py-6 rounded-xl bg-[#fefefe] size-34 ${
          isNav ? "" : "md:size-48"
        }`}
      >
        <div className="flex items-center justify-center ">
          <Image
            src={imageSrc}
            alt={title}
            width={isNav ? 50 : 80}
            height={isNav ? 50 : 80}
          />
        </div>
        <h3 className="text-center text-sm font-semibold ">{title}</h3>
      </div>
    </Link>
  );
};

export default ProductCard;
