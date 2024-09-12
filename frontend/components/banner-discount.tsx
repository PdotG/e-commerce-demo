import { buttonVariants } from "./ui/button";
import Link from "next/link";

const BannerDiscount = () => {
  return (
    <div className="p-5 sm:p-20 text-center">
      <h2 className="uppercase font-black text-2xl">
        Get up to 25% off
      </h2>
      <h3 className="mt-3 font-semibold">
        Get your discount on purchases over 50€ with the code "PORONGO"
      </h3>
      <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
        <Link href="#" className={buttonVariants()}>
          Buy
        </Link>
        <Link href="#" className={buttonVariants({ variant: "outline" })}>
          More Info
        </Link>
      </div>
    </div>
  );
};

export default BannerDiscount;
