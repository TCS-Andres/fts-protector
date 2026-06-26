import Navbar from "@/components/Navbar";
import BrandHero from "@/components/home/BrandHero";
import BioSection from "@/components/home/BioSection";
import PillarsSection from "@/components/home/PillarsSection";
import FeaturedWorkshopCTA from "@/components/home/FeaturedWorkshopCTA";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RedDivider from "@/components/RedDivider";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        <BrandHero />
        <BioSection />
        <RedDivider />
        <PillarsSection />
        <RedDivider />
        <GallerySection />
        <RedDivider />
        <TestimonialsSection />
        <FeaturedWorkshopCTA />
      </main>
      <Footer />
    </>
  );
}
