import { FC } from "react";
import { IProductCard } from "./interface";
import Image from "next/image";
import Link from "next/link";

const ProductCard: FC<IProductCard> = ({ title, imageSrc }) => {
  return (
    <Link href='/' className="flex flex-col items-center links-hover">
      <div className="flex flex-col gap-2 items-center justify-center drop-shadow-2xl px-12 py-6 rounded-xl bg-[#fefefe] h-40 w-60 lg:h-44 lg:w-80">
        <Image src={imageSrc} alt={title} width={100} height={100} />
        <h3 className="text-center font-semibold ">{title}</h3>
      </div>
    </Link>
  );
};

export default ProductCard;