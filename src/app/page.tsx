import Navbar from "@/components/Navbar";
import BrandHero from "@/components/home/BrandHero";
import HomeStats from "@/components/home/HomeStats";
import BioSection from "@/components/home/BioSection";
import PillarsSection from "@/components/home/PillarsSection";
import Manifesto from "@/components/home/Manifesto";
import FeaturedWorkshopCTA from "@/components/home/FeaturedWorkshopCTA";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        <BrandHero />
        <HomeStats />
        <BioSection />
        <PillarsSection />
        <Manifesto />
        <GallerySection />
        <TestimonialsSection />
        <FeaturedWorkshopCTA />
      </main>
      <Footer />
    </>
  );
}
