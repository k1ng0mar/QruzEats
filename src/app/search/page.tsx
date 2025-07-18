'use client';
import { useState, useMemo } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchHeader } from "@/components/qruz/search-header";
import { topCategories, recentSearches, vendors as allVendors } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import { VendorCard } from "@/components/qruz/vendor-card";

const CategoryChip = ({ label, active, onClick }: { label: string, active?: boolean, onClick: () => void }) => (
  <Button 
    variant={active ? "default" : "outline"} 
    onClick={onClick}
    className={`rounded-full h-8 px-4 font-normal text-sm ${active ? 'bg-primary text-primary-foreground' : 'bg-muted/60 border-transparent text-foreground'}`}
  >
    {label}
  </Button>
);

const SvgIcon = ({ d, d2 }: { d: string, d2?: string }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d={d}></path>
        {d2 && <path d={d2}></path>}
    </svg>
);

const CategoryIcon = ({ icon, label, onClick, active }: { icon: React.ReactNode, label: string, onClick: () => void, active: boolean }) => (
    <div 
      className="flex flex-col items-center gap-2 cursor-pointer"
      onClick={onClick}
    >
        <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${active ? 'bg-primary/20' : 'bg-muted'}`}>
            {icon}
        </div>
        <span className={`text-sm font-medium text-center ${active ? 'text-primary font-bold' : ''}`}>{label}</span>
    </div>
);

const mainCategories = ["All", "Restaurants", "Supermarkets", "Pharmacy"];

export default function SearchPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVendors = useMemo(() => {
    if (activeCategory === "All") {
      return allVendors;
    }
    if (activeCategory === "Restaurants") {
       return allVendors.filter(vendor => vendor.tags.includes("Food"));
    }
    return allVendors.filter(vendor => 
        vendor.tags.some(tag => tag.toLowerCase().includes(activeCategory.toLowerCase()))
    );
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
                        label={category}
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
                        icon={category.icon} 
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
            {filteredVendors.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                {filteredVendors.map((vendor) => (
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
