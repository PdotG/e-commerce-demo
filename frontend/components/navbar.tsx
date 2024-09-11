"use client";
import { Heart, Menu, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between p-4 mx-auto sm:max-w-4xl md:max-w-6xl">
      <div className="text-red-600 hover:text-red-200 cursor-pointer">
        <h1
          className="text-3xl hover:text-red-500"
          onClick={() => router.push("/")}
        >
          Flavor
          <span className="font-bold">Waves</span>
        </h1>
      </div>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <ShoppingCart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />
        <Heart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/loved-products")}
        />
        <User
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />
      </div>
    </div>
  );
};

export default Navbar; // Export the component so it can be used in other files
