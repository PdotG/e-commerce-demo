import { buttonVariants } from "./ui/button";
import Link from "next/link";

const BannerProduct = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Discover bold and exciting flavors with every drop.</p>
        <h4 className="mt-2 text-5xl font-extrabold">FlavourWaves</h4>
        <p className="my-2 text-lg">
          From mild to wild, there's a sauce for every taste!
        </p>
        <Link href="#" className={buttonVariants()}>
          Buy Now
        </Link>
      </div>
      <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/placeholder.jpg')] bg-center mt-5" />
    </>
  );
};

export default BannerProduct;
