import { FC } from "react";
import testimonials from "./data";
import TestimonialCard from "../TestimonialCard";

const Testimonials: FC = () => {
  return (
    <section className="bg-[#fafafa]">
      <div className="container mx-auto paddingForSections">
        <h1 className="titleStyle pb-8">Diler Sigorta Müşteri Deneyimleri</h1>
        <h3 className="subTitleStyle">
          Siz de Deneyimleyin ve Güvenin Adresine Katılın.
        </h3>
        <div
          id="scroll"
          className="grid grid-flow-col gap-4 md:gap-10 lg:gap-20 overflow-x-auto scroll-smooth"
        >
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
