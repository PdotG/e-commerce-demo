"use client";
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";

const FeaturedProducts = () => {
  const { loading, result } = useGetFeaturedProducts();
  console.log(result);
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Popular products</h3>
    </div>
  );
};

export default FeaturedProducts;
