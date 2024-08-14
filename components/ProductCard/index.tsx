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
      className={`flex flex-col items-center links-hover drop-shadow rounded-lg-md hover:hoverTranslateY ${
        activeLink ? "text-[#0E7AB3] shadow-blue-300" : ""
      }`}
    >
      <div
        className={`flex flex-col gap-1.5 items-center justify-center rounded-xl bg-[#fefefe] ${
          isNav
            ? "px-6 py-3 size-28 lg:size-32"
            : "px-10 py-4 size-32 md:size-36 md:px-12 md:py-6"
        }`}
      >
        <div className="flex items-center justify-center ">
          <Image
            src={imageSrc}
            alt={title}
            width={isNav ? 50 : 100}
            height={isNav ? 50 : 100}
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
