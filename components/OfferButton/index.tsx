import { FC } from "react";
import Arrow from "../Arrow";
import Link from "next/link";

const OfferButton: FC<{ isOnMobile: boolean }> = ({ isOnMobile }) => {
  return (
    <Link
      href="/iletisim"
      className={`${
        isOnMobile ? "flex" : "hidden md:flex"
      } items-center gap-1 px-4 py-3 bg-sky-500 text-[#fff] rounded-md transition duration-300 hover:bg-sky-600`}
    >
      <span className="font-semibold whitespace-nowrap">Teklif Al</span>
      <Arrow
        color="white"
        type="right"
        width={20}
        height={18}
        isChildArrow={false}
      />
    </Link>
  );
};

export default OfferButton;
