import CarouselTextBanner from "@/components/carousel-text-banner";
import FeaturedProducts from "@/components/featured-products";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
    </main>
  );
}
