import { FC } from "react";
import { ITestimonialsCard } from "./interface";

const TestimonialCard: FC<ITestimonialsCard> = ({ content, name }) => {
  return (
    <div className="relative flex flex-col gap-3 bg-[#fff] w-[300px]  drop-shadow-md my-10 mx-3.5 md:mx-0 p-10 py-8 md:py-10 md:p-10 rounded-lg lg:py-12 md:m-5 lg:w-[350px] lg:h-auto xl:w-auto ">
      <p className="font-normal tracking-normal text-start contentText">{content}</p>
      <p className="absolute bottom-6 right-10 text-md font-semibold tracking-wide text-right lg:right-10 lg:bottom-6">
        {name}
      </p>
    </div>
  );
};

export default TestimonialCard;
