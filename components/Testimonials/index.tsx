import { FC } from "react";
import testimonials from "./data";
import TestimonialCard from "../TestimonialCard";

const Testimonials: FC = () => {
  return (
    <section className="bg-[#fafafa] px-5 md:px-16 py-20 ">
      <div className="container mx-auto">
        <h1 className="titleStyle pb-8">
          Diler Sigorta Müşteri Deneyimleri
        </h1>
        <p className="subTitleStyle">
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
