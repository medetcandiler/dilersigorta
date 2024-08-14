import { insuranceServices } from "./data";
import InsuranceServiceCard from "../InsuranceServiceCard";

const InsuranceServicesSection = () => {
  return (
    <section className=" bg-[#fff] ">
      <div className="container mx-auto paddingForSections ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
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
