"use client";
import { FC } from "react";
import { IProductCard } from "./interface";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProductCard: FC<IProductCard> = ({ title, imageSrc, isNav, route }) => {
  const pathname = usePathname();
  const activeLink =
    pathname === `/urunler/${route}` ||
    pathname.includes(`/urunler/${route}/${route}`);
  return (
    <Link
      href={`/urunler/${route}`}
      className={`flex flex-col items-center links-hover shadow-lg rounded-lg hover:hoverTranslateY ${
        activeLink ? "text-[#0E7AB3] shadow-blue-300" : ""
      }`}
    >
      <div
        className={`flex flex-col gap-1.5 items-center justify-center  px-12 py-6 rounded-xl bg-[#fefefe] size-32 ${
          isNav ? "" : "md:size-48"
        }`}
      >
        <div className="flex items-center justify-center ">
          <Image
            src={imageSrc}
            alt={title}
            width={isNav ? 50 : 80}
            height={isNav ? 50 : 80}
            priority
          />
        </div>
        <h3 className="text-center text-md font-semibold whitespace-nowrap">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default ProductCard;
