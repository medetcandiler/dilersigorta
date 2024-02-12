import { FC } from "react";
import { IHelpfullLinkCard } from "./interface";

const HelpfullLinkCard: FC<IHelpfullLinkCard> = ({
  title,
  description,
  url,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className="group flex items-center w-full relative"
    >
      <div className="flex size-12 bg-[#0E7AB3] rounded-full p-2 z-10 transition duration-300 group-hover:scale-110">
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
      </div>
      <span className="text-center bg-sky-300 z-0 -ml-3 py-2 px-5 text-[#fff] rounded-r-full whitespace-nowrap transition duration-300 group-hover:rounded-r-md">
        {title}
      </span>
      <span className="text-center absolute -bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </span>
    </a>
  );
};

export default HelpfullLinkCard;
