import { FC } from "react";
import Arrow from "../Arrow";
import Link from "next/link";

const OfferButton: FC<{ isOnMobile: boolean; wp: string }> = ({
  isOnMobile,
  wp,
}) => {
  return (
    <Link
      href={`https://api.whatsapp.com/send/?phone=905392343777&text=${wp}&type=phone_number&app_absent=0`}
      target="_blank"
      className={`${
        isOnMobile ? "flex" : "hidden md:flex"
      } items-center gap-1 px-4 py-3 bg-sky-500 text-[#fff] rounded-md transition duration-300 hover:bg-sky-600`}
    >
      <span className="font-semibold whitespace-nowrap">Teklif Al</span>
      <Arrow
        color="white"
        type="right"
        width={18}
        height={16}
        isChildArrow={false}
      />
    </Link>
  );
};

export default OfferButton;
