import Navbar from "@/components/Navbar";
import BrandHero from "@/components/home/BrandHero";
import HomeStats from "@/components/home/HomeStats";
import BioSection from "@/components/home/BioSection";
import PillarsSection from "@/components/home/PillarsSection";
import TrainingTypesSection from "@/components/home/TrainingTypesSection";
import InventorSection from "@/components/home/InventorSection";
import AuthorSection from "@/components/home/AuthorSection";
import ShopSection from "@/components/home/ShopSection";
import Manifesto from "@/components/home/Manifesto";
import FeaturedWorkshopCTA from "@/components/home/FeaturedWorkshopCTA";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

// Live Shopify products power the Shop section, so refresh the page periodically.
export const revalidate = 60;

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
        <TrainingTypesSection />
        <InventorSection />
        <AuthorSection />
        <ShopSection />
        <Manifesto />
        <GallerySection />
        <TestimonialsSection />
        <FeaturedWorkshopCTA />
      </main>
      <Footer />
    </>
  );
}
