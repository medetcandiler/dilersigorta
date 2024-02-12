import { FC } from "react";
import { IHelpfullLinkCard } from "./interface";

const HelpfullLinkCard: FC<IHelpfullLinkCard> = ({
  title,
  description,
  url,
}) => {
  return (
    <div className="flex flex-col items-center w-full flex-grow">
      <h3 className="mt-2.5 contentHeader text-center">{title}</h3>
      <p className="mt-2.5 contentText text-center">{description}</p>
      <a
        href={url}
        className="mt-2.5 text-blue-500 underline hover:text-blue-700"
      >
        Go to Link
      </a>
    </div>
  );
};

export default HelpfullLinkCard;
