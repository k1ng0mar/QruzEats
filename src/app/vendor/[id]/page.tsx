import { vendors } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Star, Clock, MapPin, ArrowLeft, Heart, Share2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function VendorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const vendor = vendors.find((v) => v.id === params.id);

  if (!vendor) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-48 md:h-64">
        <Image
          src={vendor.image}
          alt={`${vendor.name} banner`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4 z-10">
          <Link href="/search" passHref>
            <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/40 text-white rounded-full">
              <ArrowLeft />
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-4 left-4 text-white z-10">
            <Image src={vendor.logo} alt={`${vendor.name} logo`} width={64} height={64} className="rounded-full border-2 border-white mb-2"/>
            <h1 className="text-3xl font-headline font-bold">{vendor.name}</h1>
            <div className="flex items-center gap-4 text-sm mt-1">
                <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400"/> {vendor.rating}</div>
                <div className="flex items-center gap-1"><Clock className="w-4 h-4"/> {vendor.deliveryTime}</div>
                <div className="flex items-center gap-1"><MapPin className="w-4 h-4"/> {vendor.distance}</div>
            </div>
        </div>
        <div className="absolute top-4 right-4 flex gap-2 z-10">
            <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/40 text-white rounded-full">
                <Heart />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/40 text-white rounded-full">
                <Share2 />
            </Button>
        </div>
      </div>
      
      <main className="flex-1 p-4 md:p-8 pb-24">
        <h2 className="text-2xl font-headline font-bold mb-4">Menu</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vendor.products && vendor.products.length > 0 ? (
                vendor.products.map(product => (
                    <Card key={product.id} className="overflow-hidden">
                        <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-4 flex-1">
                                <Image src={product.image} alt={product.name} width={80} height={80} className="rounded-md object-cover"/>
                                <div className="flex-1">
                                    <h3 className="font-bold font-headline">{product.name}</h3>
                                    <p className="text-muted-foreground">₦{product.price.toLocaleString()}</p>
                                </div>
                            </div>
                            <Button size="icon" variant="outline" className="rounded-full w-10 h-10 flex-shrink-0">
                                <Plus className="w-5 h-5"/>
                            </Button>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <p className="text-muted-foreground">No products available at this time.</p>
            )}
        </div>
      </main>
    </div>
  );
}
