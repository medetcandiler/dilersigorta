import { FC } from "react";
import { ITestimonialsCard } from "./interface";

const TestimonialCard: FC<ITestimonialsCard> = ({ content, name }) => {
  return (
    <div className="flex flex-col w-full shadow-2xl px-10 py-10 md:py-8">
      <p className="font-medium tracking-normal text-start">{content}</p>
      <p className="text-md font-semibold tracking-wide text-right">{name}</p>
    </div>
  );
};

export default TestimonialCard;
