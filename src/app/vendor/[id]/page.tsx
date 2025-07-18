
'use client';

import { use, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { 
    Star, 
    Clock, 
    MapPin, 
    ArrowLeft, 
    Share2, 
    Info, 
    Search,
    Bookmark,
    ShoppingCart,
    Plus,
    LayoutGrid,
    Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { vendors as mockVendors } from "@/lib/data"; // Keep for type reference

type Vendor = typeof mockVendors[0];

const ActionButton = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <Button variant="ghost" size="icon" className={cn("bg-white/80 hover:bg-white text-foreground rounded-full shadow-md", className)}>
        {children}
    </Button>
);

const CategoryTab = ({ label, active, onClick, icon }: { label: string, active: boolean, onClick: () => void, icon?: React.ReactNode }) => (
    <button onClick={onClick} className={cn(
        "flex items-center gap-2 pb-2 text-muted-foreground font-semibold transition-colors whitespace-nowrap",
        active ? "text-primary border-b-2 border-primary" : "hover:text-primary/80"
    )}>
        {icon && <div className={cn("p-2 rounded-full border-2", active ? "border-primary" : "border-muted-foreground")} >{icon}</div>}
        {label}
    </button>
);


export default function VendorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Popular");

  useEffect(() => {
    if (!id) return;

    const fetchVendor = async () => {
        try {
            const docRef = doc(db, "vendors", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setVendor({ id: docSnap.id, ...docSnap.data() } as Vendor);
            } else {
                notFound();
            }
        } catch (error) {
            console.error("Error fetching vendor:", error);
            // Optionally, handle error state
        } finally {
            setLoading(false);
        }
    };

    fetchVendor();
  }, [id]);


  if (loading) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
        </div>
    )
  }

  if (!vendor) {
    notFound();
  }
  
  const menuCategories = ["Popular", "Local", ...new Set(vendor.products?.map(p => p.category).filter(Boolean) as string[])];
  const uniqueCategories = [...new Set(menuCategories)];

  const popularProducts = vendor.products?.filter(p => p.tags?.includes("popular")) || [];
  
  const filteredProducts = activeTab !== "Popular"
    ? vendor.products?.filter(p => p.category === activeTab)
    : [];
    
  const productsToDisplay = activeTab === "Popular"
    ? popularProducts
    : filteredProducts;


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="relative">
        <div className="relative h-48 md:h-64 w-full">
            <Image
            src={vendor.image}
            alt={`${vendor.name} banner`}
            fill
            className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="absolute top-4 left-4 z-10">
          <Link href="/search" passHref>
            <ActionButton>
                <ArrowLeft />
            </ActionButton>
          </Link>
        </div>
        
        <div className="absolute top-4 right-4 flex gap-2 z-10">
            <ActionButton>
                <Search />
            </ActionButton>
            <ActionButton>
                <Share2 />
            </ActionButton>
            <ActionButton>
                <Bookmark />
            </ActionButton>
            <Link href="/cart" passHref>
                <ActionButton>
                    <ShoppingCart />
                </ActionButton>
            </Link>
        </div>

        <div className="absolute -bottom-10 left-4">
             <Image src={vendor.logo} alt={`${vendor.name} logo`} width={80} height={80} className="rounded-full border-4 border-background"/>
        </div>
         <Badge variant="secondary" className="absolute bottom-4 right-4 text-sm py-1 px-3">
            {vendor.deliveryTime}
        </Badge>
      </header>
      
      <main className="flex-1 p-4 md:p-6 pb-24 mt-10 space-y-6">
        <section>
            <h1 className="text-3xl font-headline font-bold">{vendor.name}</h1>
            <p className="text-muted-foreground">{vendor.tags.join(', ')}</p>
            <div className="flex items-center gap-4 text-sm mt-2">
                <Badge variant="outline" className="p-1 px-3">
                    <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400"/> {vendor.rating} ({Math.floor(Math.random() * 100) + 10})
                </Badge>
                <Badge variant="outline" className="p-1 px-3">{vendor.distance}</Badge>
            </div>
            <div className="flex items-center gap-1 mt-2 text-muted-foreground text-sm">
                <span>Minimum Order ₦{(vendor.price as number).toLocaleString()}</span>
                <Info className="w-4 h-4"/>
            </div>
        </section>

        <section className="sticky top-0 bg-background py-2 z-10 -mx-4 px-4 border-b">
             <div className="flex items-center gap-4 overflow-x-auto pb-1">
                 <CategoryTab 
                    label="All" 
                    icon={<LayoutGrid className="w-4 h-4"/>} 
                    active={activeTab === 'All'} 
                    onClick={() => setActiveTab('All')}
                />
                {uniqueCategories.map(cat => (
                    cat && <CategoryTab key={cat} label={cat} active={activeTab === cat} onClick={() => setActiveTab(cat)} />
                ))}
            </div>
        </section>
        
        {activeTab !== 'Popular' && activeTab !== 'All' ? null : (
             <section>
                <h2 className="text-2xl font-headline font-bold mb-4">Popular</h2>
                <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4">
                    {popularProducts.map(product => (
                        <Card key={product.id} className="w-[45vw] md:w-[200px] flex-shrink-0 overflow-hidden border-none shadow-sm">
                            <div className="relative h-32">
                                <Image src={product.image} alt={product.name} fill className="object-cover"/>
                                <Badge className="absolute bottom-2 right-2 bg-background/80 text-foreground hover:bg-background">₦{product.price.toLocaleString()}</Badge>
                            </div>
                            <CardContent className="p-2">
                                <h3 className="font-bold font-headline truncate">{product.name}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        )}

        <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold">{activeTab}</h2>
            {productsToDisplay && productsToDisplay.length > 0 ? (
                productsToDisplay.map(product => (
                    <Card key={product.id} className="overflow-hidden shadow-sm">
                        <CardContent className="p-3 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4 flex-1">
                                <div className="relative w-24 h-24 flex-shrink-0">
                                    <Image src={product.image} alt={product.name} fill className="rounded-md object-cover"/>
                                    <Badge className="absolute bottom-1 right-1 bg-background/80 text-foreground hover:bg-background text-xs">₦{product.price.toLocaleString()}</Badge>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold font-headline">{product.name}</h3>
                                    <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
                                </div>
                            </div>
                            <Button size="icon" variant="outline" className="rounded-full w-10 h-10 flex-shrink-0 self-start border-2 border-primary text-primary hover:bg-primary/10">
                                <Plus className="w-5 h-5"/>
                            </Button>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <p className="text-muted-foreground text-center py-8">No products found in this category.</p>
            )}
        </section>
      </main>
    </div>
  );
}
