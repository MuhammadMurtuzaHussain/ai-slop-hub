import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ToolDirectory from "@/components/ToolDirectory";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ToolDirectory />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
