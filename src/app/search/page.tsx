'use client';
import { useState, useMemo, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchHeader } from "@/components/qruz/search-header";
import { topCategories, recentSearches } from "@/lib/data";
import { ChevronRight, Loader2, Dessert, GlassWater, Cookie, ShoppingBasket, Pill } from "lucide-react";
import { VendorCard } from "@/components/qruz/vendor-card";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from 'react';

type Vendor = {
  id: string;
  name: string;
  rating: number;
  deliveryTime: string;
  logo: string;
  price: number;
  distance: string;
  image: string;
  tags: string[];
};

const iconComponents: { [key: string]: React.ElementType | React.FC<any> } = {
  GrillsIcon: (props: any) => (
    <svg {...props} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M8.5 10.5c3.25-1 4.5-2.25 4.5-3.5 0-1.5-1.5-2.5-3-2.5-2.5 0-4.5 2-4.5 4.5"></path>
      <path d="M11 14v7"></path>
    </svg>
  ),
  RiceDishesIcon: (props: any) => (
    <svg {...props} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M2 12.25V12a10 10 0 115.93-9.14"></path>
      <path d="M12.5 7.5L22 12l-4-1-3.5-4Z"></path>
    </svg>
  ),
  SwallowIcon: (props: any) => (
    <svg {...props} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M12 2a10 10 0 106.33 17.67"></path>
      <path d="M12 2a10 10 0 11-6.33 17.67"></path>
    </svg>
  ),
  Dessert: (props: any) => <Dessert {...props} className="w-8 h-8 text-primary" />,
  GlassWater: (props: any) => <GlassWater {...props} className="w-8 h-8 text-primary" />,
  Cookie: (props: any) => <Cookie {...props} className="w-8 h-8 text-primary" />,
  ShoppingBasket: (props: any) => <ShoppingBasket {...props} className="w-8 h-8 text-primary" />,
  Pill: (props: any) => <Pill {...props} className="w-8 h-8 text-primary" />,
};

const CategoryChip = ({ label, active, onClick }: { label: string, active?: boolean, onClick: () => void }) => (
  <Button 
    variant={active ? "default" : "outline"} 
    onClick={onClick}
    className={`rounded-full h-8 px-4 font-normal text-sm ${active ? 'bg-primary text-primary-foreground' : 'bg-muted/60 border-transparent text-foreground'}`}
  >
    {label}
  </Button>
);

const CategoryIcon = ({ iconName, label, onClick, active }: { iconName: string, label: string, onClick: () => void, active: boolean }) => {
    const IconComponent = iconComponents[iconName];
    return (
        <div 
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={onClick}
        >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${active ? 'bg-primary/20' : 'bg-muted'}`}>
                {IconComponent ? <IconComponent /> : null}
            </div>
            <span className={`text-sm font-medium text-center ${active ? 'text-primary font-bold' : ''}`}>{label}</span>
        </div>
    );
};

const mainCategories = ["All", "Food", "Supermarkets", "Pharmacy"];

export default function SearchPage() {
  const [allVendors, setAllVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchVendors = async () => {
        setLoading(true);
        try {
            const vendorsCollection = collection(db, "vendors");
            let q = query(vendorsCollection);

            if (activeCategory !== "All") {
                q = query(vendorsCollection, where("tags", "array-contains", activeCategory));
            }
            
            const querySnapshot = await getDocs(q);
            const vendorsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Vendor));
            setAllVendors(vendorsData);

        } catch (error) {
            console.error("Error fetching vendors:", error);
        } finally {
            setLoading(false);
        }
    };
    fetchVendors();
  }, [activeCategory]);


  return (
    <div className="flex flex-col min-h-screen">
      <SearchHeader />
      <main className="flex-1 p-4 md:p-6 pb-24 space-y-8">
        <section className="overflow-x-auto -mx-4 px-4 pb-2">
           <div className="flex items-center gap-2 whitespace-nowrap">
                {mainCategories.map(category => (
                   <CategoryChip 
                        key={category}
                        label={category === 'Food' ? 'Restaurants' : category}
                        active={activeCategory === category}
                        onClick={() => setActiveCategory(category)}
                    />
                ))}
           </div>
        </section>

        <section>
             <h2 className="font-headline text-xl font-bold mb-4">
                Top Categories
            </h2>
            <div className="grid grid-cols-4 gap-4">
                {topCategories.map((category) => (
                    <CategoryIcon 
                        key={category.name} 
                        iconName={category.iconName} 
                        label={category.name}
                        active={activeCategory === category.name}
                        onClick={() => setActiveCategory(category.name)}
                    />
                ))}
            </div>
        </section>
        
        <section>
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-headline text-xl font-bold">
                    Recent Searches
                </h2>
                <Button variant="ghost" className="text-sm text-primary p-0 h-auto hover:bg-transparent">Clear</Button>
            </div>
            <div className="space-y-4">
                {recentSearches.map((item) => (
                    <Link href="#" key={item.name} className="flex items-center gap-4 group">
                        <Image src={item.image} alt={item.name} width={48} height={48} className="rounded-lg object-cover"/>
                        <div className="flex-1">
                            <p className="font-bold">{item.name}</p>
                            <p className="text-sm text-muted-foreground">{item.context}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </Link>
                ))}
            </div>
        </section>

         <section>
            <h2 className="font-headline text-xl font-bold mb-4">
                {activeCategory === "All" ? "All Vendors" : activeCategory}
            </h2>
            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
            ) : allVendors.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                {allVendors.map((vendor) => (
                    <VendorCard key={vendor.id} {...vendor} />
                ))}
                </div>
            ) : (
                 <div className="text-center py-10">
                    <p className="text-muted-foreground">No vendors found for "{activeCategory}"</p>
                </div>
            )}
        </section>
      </main>
    </div>
  );
}
