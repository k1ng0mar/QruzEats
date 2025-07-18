import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

type VendorCardProps = {
  name: string;
  rating: number;
  deliveryTime: string;
  logo: string;
  price: number;
  distance: string;
  image: string;
};

export function VendorCard({
  name,
  rating,
  deliveryTime,
  logo,
  price,
  distance,
  image
}: VendorCardProps) {
  return (
    <Link href="#" className="group">
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-xl border-none">
        <div className="relative">
            <Image
              src={image}
              alt={`${name} banner`}
              width={200}
              height={150}
              className="w-full h-32 object-cover rounded-lg"
            />
            <Badge variant="secondary" className="absolute bottom-2 right-2">{deliveryTime}</Badge>
        </div>
        <CardContent className="p-2 flex-1">
          <div className="flex items-start gap-2 mb-1">
            <Image
                src={logo}
                alt={`${name} logo`}
                width={24}
                height={24}
                className="rounded-full mt-0.5"
              />
            <div className="flex-1">
                <h3 className="font-headline text-sm font-bold truncate flex-1">{name}</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span>{rating}</span>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground pl-8">
             <span>From ₦{price.toLocaleString()}</span>
             <Badge variant="default" className="text-xs bg-muted text-foreground hover:bg-muted/80">{distance}</Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
