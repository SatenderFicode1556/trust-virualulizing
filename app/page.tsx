import AccordionSection from "./compontens/AccordionSection";
import Footer from "./compontens/Footer";
import Header from "./compontens/Header";
import HeroSection from "./compontens/HeroSection";
import HowItWorksSection from "./compontens/HowItWorksSection";
import HighlightsSection from "./compontens/HighlightsSection";
import IndustriesSection from "./compontens/IndustriesSection";
import PageCtaSection from "./compontens/PageCtaSection";
import ServicesSection from "./compontens/ServicesSection";
import ServiceLocationsSection from "./compontens/ServiceLocationsSection";
import TestimonialsSection from "./compontens/TestimonialsSection";
import TrustedPartnersSection from "./compontens/TrustedPartnersSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#181818]">
      <Header />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <IndustriesSection />
      <HighlightsSection
        eyebrow="The TrustonServices difference"
        title="A service visit should feel clear at every step."
        description="Make a confident choice with useful service details, visible starting prices, and a team available to help with your booking."
        items={[
          { title: "Know what you are booking", detail: "Compare service types and estimated duration before choosing an option.", tag: "Clear choices" },
          { title: "See the starting price", detail: "Review the listed starting price and confirm any additional work before it begins.", tag: "Price clarity" },
          { title: "Get help when you need it", detail: "Call the team if you want help choosing a service or arranging your visit.", tag: "Booking support" },
        ]}
      />
      <TrustedPartnersSection />
      <TestimonialsSection />
      <PageCtaSection
        eyebrow="Ready when you are"
        title="Find the right service for your home."
        description="Explore the catalog, compare service options, and start a booking when you are ready."
        actionLabel="Explore services"
        actionHref="/#services"
        secondaryLabel="Call our team"
        secondaryHref="tel:+911234567890"
      />
      <ServiceLocationsSection />
      <AccordionSection />
      <Footer />
    </main>
  );
}
