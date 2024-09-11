"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Spicy Sauce",
    href: "/sauce/spicy",
    description:
      "A sauce with a spicy touch, ideal to accompany your favorite meals.",
  },
  {
    title: "Green Sauce",
    href: "/souce/green",
    description:
      "Fresh and delicious, perfect for tacos and other Mexican dishes.",
  },
  {
    title: "Tomato Sauce",
    href: "/souce/tomato",
    description: "Classic tomato sauce, ideal for pasta and pizzas.",
  },
  {
    title: "Garlic Sauce",
    href: "/souces/garlic",
    description:
      "Sauce with an intense garlic flavor, perfect for meats and seafood.",
  },
  {
    title: "Barbecue Sauce",
    href: "/souce/barbecue",
    description: "Sweet and smoky, ideal to accompany your barbecues.",
  },
  {
    title: "Mango Sauce",
    href: "/souce/mango",
    description: "A sweet and spicy sauce with a tropical mango touch.",
  },
];

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      FlavorWaves
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      We are a group of obsessed artisans that creates modern
                      sauces for creative people. Discover unique flavors and
                      elevate your culinary creations.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Shop">
                Visit our shop in order to find the best sauces for your meals.
              </ListItem>
              <ListItem href="/shop/offers" title="Offers">
                Check out the offers we have for you.
              </ListItem>
              <ListItem href="/shop/accesories" title="Accesories">
                To improve your culinary experience, check out our accessories.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sauces</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/waves-experience" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Waves Experience
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MenuList;
