import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import RedDivider from "@/components/RedDivider";
import AboutSection from "@/components/AboutSection";
import WorkshopSection from "@/components/WorkshopSection";
import AudienceSection from "@/components/AudienceSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BootCampSection from "@/components/BootCampSection";
import FAQSection from "@/components/FAQSection";
import StayTunedSection from "@/components/StayTunedSection";
import OnlineTrainingSection from "@/components/OnlineTrainingSection";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Everyone Is a Protector — Self-Defense Workshop | FrancktheSolution",
  description:
    "A hands-on self-defense workshop in Miami built on 25+ years of real-world executive protection. No workshop currently scheduled — stay tuned for the next date.",
  alternates: { canonical: "/workshops" },
};

export default function WorkshopsPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <RedDivider />
        <WorkshopSection />
        <RedDivider />
        <GallerySection />
        <RedDivider />
        <AboutSection />
        <RedDivider />
        <AudienceSection />
        <RedDivider />
        <TestimonialsSection />
        <RedDivider />
        <ProblemSection />
        <RedDivider />
        <FAQSection />
        <RedDivider />
        <StayTunedSection />
        <BootCampSection />
        <OnlineTrainingSection />
      </main>
      <Footer />
    </>
  );
}
