import { ProductType } from "@/types/product";
import Link from "next/link";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;

  return (
    <Link
      href={`/product/${product.attributes.slug}`}
      className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"
    >
      <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
        <p className="px-2 py-2 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
          {product.attributes.spiciness}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
