import AboutSection from "./About";
import ContactSection from "./Contact";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./Testimonials";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
