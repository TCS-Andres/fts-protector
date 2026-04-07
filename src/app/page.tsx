import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import RedDivider from "@/components/RedDivider";
import AboutSection from "@/components/AboutSection";
import WorkshopSection from "@/components/WorkshopSection";
import AudienceSection from "@/components/AudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import RegistrationSection from "@/components/RegistrationSection";
import OnlineTrainingSection from "@/components/OnlineTrainingSection";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <RedDivider />
        <ProblemSection />
        <RedDivider />
        <AboutSection />
        <RedDivider />
        <WorkshopSection />
        <RedDivider />
        <AudienceSection />
        <RedDivider />
        <TestimonialsSection />
        <RedDivider />
        <FAQSection />
        <RedDivider />
        <RegistrationSection />
        <OnlineTrainingSection />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
