import ContactSection from "@/components/ContactsSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}
