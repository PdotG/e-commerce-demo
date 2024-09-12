"use client"

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay"

export const dataCarouselTop = [
    {
        id: 1,
        title: "Ship in 24 hours",
        description: "Get your order quickly with our fast shipping service.",
        link: "#!"
    },
    {
        id: 2,
        title: "New Spicy Collection",
        description: "Discover our bold and fiery new flavors, perfect for heat lovers.",
        link: "#!"
    },
    {
        id: 3,
        title: "Free Shipping on Orders Over $50",
        description: "Enjoy free shipping when you spend $50 or more on your favorite sauces.",
        link: "#!"
    },
    {
        id: 4,
        title: "Award-Winning Flavors",
        description: "Try our best-selling sauces, loved by chefs and home cooks alike.",
        link: "#!"
    }
];


const CarouselTextBanner = () => {

    const router = useRouter();

    return(
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto" plugins={
                [
                    Autoplay({
                        delay: 4000
                    })
                ]
            }>
               
                <CarouselContent>

                
                
                {
                    dataCarouselTop.map(({id, title, description, link}) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                        <p className="sm:text-lg text-wrap dark:text-black font-bold">{title}</p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-black font-semibold">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))
                }
                </CarouselContent>
            </Carousel>
        </div>
    )
}
export default CarouselTextBanner