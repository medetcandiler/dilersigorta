import { FC } from "react";
import { ITestimonialsCard } from "./interface";

const TestimonialCard: FC<ITestimonialsCard> = ({ content, name }) => {
  return (
    <div className="relative flex flex-col bg-[#fff] w-[300px] shadow-md my-10 mx-3.5 md:mx-0 md:shadow-lg px-5 sm:px-10 rounded-lg py-10 md:py-8 md:m-5 lg:w-[350px] xl:w-auto ">
      <p className="font-normal tracking-normal text-start">{content}</p>
      <p className="text-md font-semibold tracking-wide text-right">{name}</p>
    </div>
  );
};

export default TestimonialCard;
