import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DriverSection from '@/components/DriverSection';
import SafetySection from '@/components/SafetySection';
import CitiesSection from '@/components/CitiesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <DriverSection />
      <SafetySection />
      <CitiesSection />
      <Footer />
    </main>
  );
}