import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { promotions, vendors, popularStores } from "@/lib/data";
import { VendorCard } from "@/components/qruz/vendor-card";
import { Star, UtensilsCrossed, ShoppingCart } from "lucide-react";
import { CategorySelectionCard } from "@/components/qruz/category-selection-card";
import { CuisineCarousel } from "@/components/qruz/cuisine-carousel";

const StoreCard = ({ name, logo, rating, distance }: { name: string, logo: string, rating: number, distance: string }) => (
    <Link href="#" className="block flex-shrink-0 w-[140px]">
        <Card className="w-full overflow-hidden border-none shadow-none bg-transparent">
            <CardContent className="p-0 flex flex-col items-start text-left">
                 <div className="w-full h-24 rounded-lg overflow-hidden mb-2">
                    <Image src={logo} alt={`${name} logo`} width={140} height={96} className="w-full h-full object-cover"/>
                 </div>
                 <h3 className="font-bold text-base font-headline">{name}</h3>
                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{rating}</span>
                    <span className="text-xs">&#x2022; {distance}</span>
                 </div>
            </CardContent>
        </Card>
    </Link>
);


export default function Home() {
  return (
    <div className="space-y-8 p-4 md:p-6 pb-24">
      <section className="grid grid-cols-2 gap-4">
        <CategorySelectionCard 
            href="/food"
            icon={<UtensilsCrossed className="w-6 h-6 text-primary" />}
            title="Food"
            subtitle="Hungry? Order Now!!!"
            className="h-full"
        />
        <CategorySelectionCard 
            href="/shop"
            icon={<ShoppingCart className="w-6 h-6 text-primary" />}
            title="Shop"
            subtitle="Groceries at your doorstep"
            className="h-full"
        />
      </section>

      <CuisineCarousel />

      <section>
        <h2 className="font-headline text-xl font-bold mb-3">
          Featured
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {promotions.map((promo, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 basis-5/6 pl-4">
                 <Card className="overflow-hidden rounded-xl">
                    <CardContent className="p-0">
                      <Image
                        src={promo.image}
                        alt={promo.alt}
                        width={300}
                        height={150}
                        className="w-full h-auto object-cover"
                      />
                    </CardContent>
                  </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section>
        <h2 className="font-headline text-xl font-bold mb-3">
          Popular Stores nearby
        </h2>
         <div className="flex space-x-4 overflow-x-auto pb-2 -mx-4 px-4">
          {popularStores.map((store) => (
              <StoreCard key={store.name} {...store} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-headline text-xl font-bold mb-3">
          Best sellers
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.name} {...vendor} />
          ))}
        </div>
      </section>
    </div>
  );
}
