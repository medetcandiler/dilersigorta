import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/BenefitsSection";
import InsuranceServicesSection from "@/components/InsuranceServicesSection";
import ProductsSection from "@/components/ProductsSection";
import Testimonials from "@/components/Testimonials";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <main className=" ">
      <HeroSection />
      <ProductsSection />
      <Benefits />
      <InsuranceServicesSection />
      <Testimonials />
      <PartnersSection />
    </main>
  );
}
