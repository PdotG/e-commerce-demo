import CarouselTextBanner from "@/components/carousel-text-banner";
import FeaturedProducts from "@/components/featured-products";
import BannerDiscount from "@/components/banner-discount";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
    </main>
  );
}
