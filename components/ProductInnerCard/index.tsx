import { FC } from "react";
import { IProductInnerCard } from "./interface";
import Image from "next/image";
import Link from "next/link";

const ProductInnerCard: FC<IProductInnerCard> = ({
  title,
  description,
  routePath,
  contentLength,
}) => {
  return (
    <section
      className={`relative shadow-2xl p-6 rounded-xl lg:w-1/${contentLength}`}
    >
      <div className="flex justify-between items-center py-12 px-3 rounded-lg bg-gradient-to-r from-[#0BA5E9] to-blue-700 md:px-5">
        <h1 className="text-xl text-[#fff]">
          {title.split(" ").splice(1).join(" ")}
        </h1>
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

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2">
        <Link
          href={`/urunler/${routePath}/${title}`}
          className="skySqrButton whitespace-nowrap"
        >
          Daha Fazla Bilgi Al
        </Link>
      </div>
    </section>
  );
};

export default ProductInnerCard;
