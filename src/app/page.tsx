import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CategoryCard } from "@/components/qruz/category-card";
import { VendorCard } from "@/components/qruz/vendor-card";
import { Header } from "@/components/qruz/header";
import { promotions, vendors, categories } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 space-y-8 p-4 pt-6 md:p-8 md:pt-10 pb-24">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </section>

        <section>
          <h2 className="font-headline text-2xl font-semibold mb-4">
            Promotions
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {promotions.map((promo, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={promo.image}
                          alt={promo.alt}
                          width={600}
                          height={400}
                          className="aspect-video w-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </section>

        <section>
          <h2 className="font-headline text-2xl font-semibold mb-4">
            Popular Vendors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {vendors.map((vendor) => (
              <VendorCard key={vendor.name} {...vendor} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-headline text-2xl font-semibold mb-4">
            Cultural Recommendations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {vendors
              .slice(0, 4)
              .reverse()
              .map((vendor) => (
                <VendorCard key={vendor.name} {...vendor} />
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}
