import { FC } from "react";
import Arrow from "../Arrow";

const OfferButton: FC<{ isOnMobile: boolean }> = ({ isOnMobile }) => {
  return (
    <button
      className={`${
        isOnMobile ? "flex" : "hidden md:flex"
      } items-center gap-1 px-4 py-3 bg-sky-500 text-[#fff] rounded-md hover:rounded-full `}
    >
      <span className="font-semibold">Teklif Al</span>
      <Arrow
        color="white"
        type="right"
        width={20}
        height={18}
        isChildArrow={false}
      />
    </button>
  );
};

export default OfferButton;
