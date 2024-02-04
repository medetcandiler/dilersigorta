import { FC } from "react";
import testimonials from "./data";
import TestimonialCard from "../TestimonialCard";

const Testimonials: FC = () => {
  return (
    <section className="bg-[#fafafa] px-5 md:px-16 py-36 ">
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl pb-8">
          Diler Sigorta Müşteri Deneyimleri
        </h1>
        <p className="text-center text-lg pb-6 text-neutral-500">
          Siz de Deneyimleyin ve Güvenin Adresine Katılın.
        </p>
        <div id="scroll" className="grid grid-flow-col gap-5 sm:gap-20 overflow-x-auto scroll-smooth ">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
