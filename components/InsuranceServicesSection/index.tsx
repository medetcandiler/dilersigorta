import { insuranceServices } from "./data";
import InsuranceServiceCard from "../InsuranceServiceCard";

const InsuranceServicesSection = () => {
  return (
    <section className=" bg-[#fff] p-20 ">
      <div className="container mx-auto md:px-5">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
          {insuranceServices.map((service) => (
            <InsuranceServiceCard
              key={service.title}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceServicesSection;
