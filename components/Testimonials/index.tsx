import { FC } from "react";
import testimonials from "./data";
import TestimonialCard from "../TestimonialCard";

const Testimonials: FC = () => {
  return (
    <section className=" bg-[#fff] px-6 sm:px-28 py-20 md:px-16 ">
      <div className="container mx-auto md:px-5">
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl pb-8">
          Diler Sigorta Müşteri Deneyimleri
        </h1>
        <p className="text-center text-lg pb-6 text-neutral-500">
          Siz de Deneyimleyin ve Güvenin Adresine Katılın.
        </p>
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
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
