import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import RedDivider from "@/components/RedDivider";
import AboutSection from "@/components/AboutSection";
import WorkshopSection from "@/components/WorkshopSection";
import WorkshopDetailsSection from "@/components/WorkshopDetailsSection";
import AudienceSection from "@/components/AudienceSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BootCampSection from "@/components/BootCampSection";
import FAQSection from "@/components/FAQSection";
import RegistrationSection from "@/components/RegistrationSection";
import OnlineTrainingSection from "@/components/OnlineTrainingSection";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Everyone Is a Protector — Self-Defense Workshop | FrancktheSolution",
  description:
    "A 2-hour hands-on self-defense workshop in Miami built on 25+ years of real-world executive protection. Saturday, July 18, 2026 at KO Zone Miami. Every ticket includes a +1 free. $147 early bird through July 5.",
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
        <WorkshopDetailsSection />
        <RedDivider />
        <AudienceSection />
        <RedDivider />
        <TestimonialsSection />
        <RedDivider />
        <ProblemSection />
        <RedDivider />
        <FAQSection />
        <RedDivider />
        <RegistrationSection />
        <BootCampSection />
        <OnlineTrainingSection />
      </main>
      <Footer />
      {/* Spacer so the always-visible mobile sticky CTA doesn't cover footer content */}
      <div className="h-20 lg:hidden" aria-hidden />
      <MobileCTA />
    </>
  );
}
