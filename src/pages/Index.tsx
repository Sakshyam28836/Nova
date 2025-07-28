
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import CallToAction from "@/components/CallToAction";
import TrustedPartners from "@/components/TrustedPartners";
import Footer from "@/components/Footer";
import { useHashNavigation } from "@/hooks/useHashNavigation";

const Index = () => {
  useHashNavigation();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Statistics />
      <CallToAction />
      <TrustedPartners />
      <Footer />
    </div>
  );
};

export default Index;
