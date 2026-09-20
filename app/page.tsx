
import Navbar from  "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureBar from "@/components/FeatureBar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Applications from "@/components/Applications";
import TrackingSection from "@/components/TrackingSection";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <FeatureBar />
      <Services />
      <HowItWorks />
      <Applications />
      <TrackingSection />
      <StatsSection />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}