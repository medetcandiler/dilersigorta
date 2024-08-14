import { FC } from "react";
import { IHelpfullLinkCard } from "./interface";

const HelpfullLinkCard: FC<IHelpfullLinkCard> = ({
  title,
  description,
  url,
}) => {
  return (
    <div className="group flex items-center w-full relative">
      <a
        href={url}
        target="_blank"
        className="flex size-12 bg-[#0E7AB3] rounded-full p-2 z-10 transition duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:drop-shadow-xl hover:bg-[#0091D5]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </a>
      <span className="text-center bg-[#fff] text-black drop-shadow-md z-0 -ml-3 py-2 px-5 rounded-r-full whitespace-nowrap transition duration-300 group-hover:bg-sky-500 group-hover:text-[#fff] ">
        {title}
      </span>
      <span className="text-center absolute -bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </span>
    </div>
  );
};

export default HelpfullLinkCard;
