"use client";

import useGetCategoryProduct from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import FiltersControlsCategory from "../components/filters-controls-category";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "../components/product-card";
import { ProductType } from "@/types/product";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug); // categorySlug is the name of the dynamic route
  const router = useRouter();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result != null && !loading && (
        <h1 className="text-3xl font-medium">
          Category: {result[0].attributes.category.data.attributes.categoryName}
        </h1>
      )}

      <Separator />
      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory />
        <div className="grid gap-5 m5-8 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}
          {result != null &&
            !loading &&
            result.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
