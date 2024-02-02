import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/BenefitsSection";
import InsuranceServicesSection from "@/components/InsuranceServicesSection";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <Benefits />
      <InsuranceServicesSection />
    </main>
  );
}
