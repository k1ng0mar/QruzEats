'use client';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchHeader } from "@/components/qruz/search-header";
import { topCategories, recentSearches, vendors } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import { VendorCard } from "@/components/qruz/vendor-card";

const CategoryChip = ({ label, active }: { label: string, active?: boolean }) => (
  <Button variant={active ? "default" : "outline"} className={`rounded-full h-8 px-4 font-normal text-sm ${active ? 'bg-primary text-primary-foreground' : 'bg-muted/60 border-transparent text-foreground'}`}>
    {label}
  </Button>
);

const SvgIcon = ({ d, d2 }: { d: string, d2?: string }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d={d}></path>
        {d2 && <path d={d2}></path>}
    </svg>
);

const CategoryIcon = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
            {icon}
        </div>
        <span className="text-sm font-medium">{label}</span>
    </div>
);


export default function SearchPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex flex-col min-h-screen">
      <SearchHeader />
      <main className="flex-1 p-4 md:p-6 pb-24 space-y-8">
        <section className="overflow-x-auto -mx-4 px-4 pb-2">
           <div className="flex items-center gap-2 whitespace-nowrap">
                <Button variant={activeCategory === 'All' ? 'default' : 'outline'} onClick={() => setActiveCategory('All')} className={`rounded-full h-8 px-4 font-normal text-sm ${activeCategory === 'All' ? 'bg-primary text-primary-foreground' : 'bg-muted/60 border-transparent text-foreground'}`}>All</Button>
                <Button variant={activeCategory === 'Restaurants' ? 'default' : 'outline'} onClick={() => setActiveCategory('Restaurants')} className={`rounded-full h-8 px-4 font-normal text-sm ${activeCategory === 'Restaurants' ? 'bg-primary text-primary-foreground' : 'bg-muted/60 border-transparent text-foreground'}`}>Restaurants</Button>
                <Button variant={activeCategory === 'Supermarkets' ? 'default' : 'outline'} onClick={() => setActiveCategory('Supermarkets')} className={`rounded-full h-8 px-4 font-normal text-sm ${activeCategory === 'Supermarkets' ? 'bg-primary text-primary-foreground' : 'bg-muted/60 border-transparent text-foreground'}`}>Supermarkets</Button>
                <Button variant={activeCategory === 'Pharmacy' ? 'default' : 'outline'} onClick={() => setActiveCategory('Pharmacy')} className={`rounded-full h-8 px-4 font-normal text-sm ${activeCategory === 'Pharmacy' ? 'bg-primary text-primary-foreground' : 'bg-muted/60 border-transparent text-foreground'}`}>Pharmacy</Button>
           </div>
        </section>

        <section>
             <h2 className="font-headline text-xl font-bold mb-4">
                Top Categories
            </h2>
            <div className="grid grid-cols-4 gap-4">
                {topCategories.map((category) => (
                    <CategoryIcon key={category.name} icon={category.icon} label={category.name} />
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
                Trending
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {vendors.slice(0, 2).map((vendor) => (
                <VendorCard key={vendor.name} {...vendor} />
              ))}
            </div>
        </section>
      </main>
    </div>
  );
}
