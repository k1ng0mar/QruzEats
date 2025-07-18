
"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin, Info, UtensilsCrossed, Sparkles, Heart, Landmark } from "lucide-react";
import { featuredCuisines, curatedMarkets } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

const InfoSection = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        <div className="text-muted-foreground mt-1">{icon}</div>
        <div>
            <h4 className="font-bold text-foreground">{title}</h4>
            <p className="text-muted-foreground text-sm">{children}</p>
        </div>
    </div>
);


export function CuisineCarousel() {
  const [selectedCuisine, setSelectedCuisine] = useState(featuredCuisines[0]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [api, setApi] = React.useState<any>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    const updateCuisine = () => {
      const currentSnap = api.selectedScrollSnap();
      setCurrent(currentSnap);
      const cuisineIndex = currentSnap % featuredCuisines.length;
      setSelectedCuisine(featuredCuisines[cuisineIndex]);
    };

    updateCuisine();

    api.on("select", updateCuisine);

    return () => {
      api.off("select", updateCuisine);
    };
  }, [api])


  const handleLearnMore = () => {
    setIsDialogOpen(true);
  };

  const currentMarket = curatedMarkets[current % curatedMarkets.length];

  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-headline text-xl font-bold flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          Curated for You
        </h2>
        <div className="flex items-center gap-1">
            {curatedMarkets.map((_, i) => (
                <span key={i} className={cn("w-2 h-2 rounded-full transition-colors", current % curatedMarkets.length === i ? 'bg-primary' : 'bg-muted-foreground/50')}></span>
            ))}
        </div>
      </div>

      <Carousel setApi={setApi} opts={{ align: "center", loop: true, }} className="w-full">
        <CarouselContent className="-ml-4">
          {curatedMarkets.map((market, index) => (
            <CarouselItem key={index} className="pl-4">
              <Card className="overflow-hidden rounded-xl border-none relative shadow-sm">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={market.image}
                      alt={market.name}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                     <div className="absolute top-4 left-4 text-white">
                        <h3 className="font-headline text-2xl font-bold">{market.name}</h3>
                        <div className="flex items-center gap-4 text-sm mt-1">
                            <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400"/> {market.rating}</div>
                            <div className="flex items-center gap-1"><Clock className="w-4 h-4"/> {market.deliveryTime}</div>
                            <div className="flex items-center gap-1"><MapPin className="w-4 h-4"/> {market.distance}</div>
                        </div>
                   </div>
                  </div>
                  
                  <div className="p-4 bg-card">
                     <Badge variant="outline" className="mb-3 border-primary/50 text-primary/80 bg-primary/10">
                        <UtensilsCrossed className="w-4 h-4 mr-2" />
                        Featured: {selectedCuisine.name}
                    </Badge>
                     <p className="text-muted-foreground text-sm leading-snug mb-3">
                        {selectedCuisine.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                        <Button variant="outline" onClick={handleLearnMore}>
                            <Info className="w-4 h-4 mr-2" />
                            Learn More
                        </Button>
                        <Button className="bg-primary text-primary-foreground font-bold hover:bg-primary/90">Explore</Button>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-[35%] -translate-y-1/2 bg-white/50 hover:bg-white/70 text-card-foreground border-none disabled:hidden" />
        <CarouselNext className="absolute right-2 top-[35%] -translate-y-1/2 bg-white/50 hover:bg-white/70 text-card-foreground border-none disabled:hidden" />
      </Carousel>
      
      <p className="text-center text-sm text-muted-foreground mt-4">Discover the rich culinary heritage of Northern Nigeria 🇳🇬</p>

      {selectedCuisine && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md bg-muted/80 backdrop-blur-lg border-border/50 rounded-xl">
            <DialogHeader className="flex-row items-center justify-between space-y-0">
               <div className="flex items-center gap-3">
                    <Landmark className="w-6 h-6 text-primary"/>
                    <DialogTitle className="font-headline text-xl">Cultural Insight</DialogTitle>
               </div>
                <DialogClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-full w-7 h-7">
                        <span className="sr-only">Close</span>
                    </Button>
                </DialogClose>
            </DialogHeader>
            <div className="p-1 space-y-6">
                <div>
                    <h3 className="text-2xl font-bold font-headline">{selectedCuisine.name}</h3>
                    <p className="text-muted-foreground">{selectedCuisine.shortDescription}</p>
                </div>
                
                <div className="space-y-4">
                    <InfoSection icon={<MapPin size={20} />} title="Origin">
                        {selectedCuisine.origin}
                    </InfoSection>
                     <InfoSection icon={<Heart size={20} />} title="Cultural Significance">
                        {selectedCuisine.culturalSignificance}
                    </InfoSection>
                     <InfoSection icon={<Clock size={20} />} title="Best Time to Enjoy">
                        {selectedCuisine.bestTimeToEnjoy}
                    </InfoSection>
                </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
