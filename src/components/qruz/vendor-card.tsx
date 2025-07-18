import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock } from "lucide-react";

type VendorCardProps = {
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  logo: string;
  priceRange: string;
};

export function VendorCard({
  name,
  cuisine,
  rating,
  deliveryTime,
  logo,
  priceRange
}: VendorCardProps) {
  return (
    <Link href="#" className="group">
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative h-32 w-full">
            <Image
              src="https://placehold.co/600x400.png"
              alt={`${name} banner`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative px-4 -mt-8">
             <Image
                src={logo}
                alt={`${name} logo`}
                width={64}
                height={64}
                className="rounded-md border-4 border-card"
              />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-1">
          <h3 className="font-headline text-lg font-bold">{name}</h3>
          <p className="text-sm text-muted-foreground">{cuisine}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 text-sm flex justify-between items-center text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span>{rating}</span>
          </div>
          <Badge variant="outline">{priceRange}</Badge>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{deliveryTime}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
