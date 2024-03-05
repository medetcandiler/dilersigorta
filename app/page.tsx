import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/BenefitsSection";
import InsuranceServicesSection from "@/components/InsuranceServicesSection";
import ProductsSection from "@/components/ProductsSection";
import Testimonials from "@/components/Testimonials";
import PartnersSection from "@/components/PartnersSection";
import HelpfullLinksSection from "@/components/HelpfulLinksSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className=" ">
      <HeroSection />
      <ProductsSection isNav={false} />
      <Benefits />
      <InsuranceServicesSection />
      <Testimonials />
      <PartnersSection />
      <HelpfullLinksSection isSection={true} />
      <ContactSection isPage={false} />
    </main>
  );
}
