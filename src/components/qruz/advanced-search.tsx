"use client";

import { useState, useMemo, useEffect } from "react";
import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, X } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";
import { vendors as allVendors, categories as allCategories } from "@/lib/data";
import { VendorList } from "./vendor-list";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const priceRanges = ["$", "$$", "$$$", "$$$$"];

const fuse = new Fuse(allVendors, {
  keys: ["name", "cuisine", "tags"],
  includeScore: true,
  threshold: 0.4,
});

export function AdvancedSearch() {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [rating, setRating] = useState([0]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  
  const debouncedQuery = useDebounce(query, 300);

  const filteredVendors = useMemo(() => {
    let results = allVendors;

    if (debouncedQuery) {
      results = fuse.search(debouncedQuery).map((result) => result.item);
    }
    
    if (selectedCategories.length > 0) {
      results = results.filter((vendor) =>
        vendor.tags?.some((tag) => selectedCategories.includes(tag))
      );
    }

    if (rating[0] > 0) {
      results = results.filter((vendor) => vendor.rating >= rating[0]);
    }
    
    if (selectedPriceRanges.length > 0) {
        results = results.filter(vendor => selectedPriceRanges.includes(vendor.priceRange));
    }

    return results;
  }, [debouncedQuery, selectedCategories, rating, selectedPriceRanges]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  
  const handlePriceRangeChange = (price: string) => {
    setSelectedPriceRanges(prev => 
        prev.includes(price)
            ? prev.filter(p => p !== price)
            : [...prev, price]
    );
  };
  
  const activeFiltersCount = selectedCategories.length + (rating[0] > 0 ? 1 : 0) + selectedPriceRanges.length;

  return (
    <div>
      <div className="relative mb-6">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search for food or stores"
          className="pl-10 text-lg h-12"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
            <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8" onClick={() => setQuery('')}>
                <X className="h-5 w-5 text-muted-foreground" />
            </Button>
        )}
      </div>

      <Accordion type="single" collapsible className="w-full mb-6">
        <AccordionItem value="filters">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
                <span>Advanced Filters</span>
                {activeFiltersCount > 0 && <Badge>{activeFiltersCount}</Badge>}
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-2 space-y-6">
            <div>
              <Label className="font-semibold mb-2 block">Category</Label>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((cat) => (
                  <div key={cat.name} className="flex items-center space-x-2">
                    <Checkbox
                      id={`cat-${cat.name}`}
                      checked={selectedCategories.includes(cat.name)}
                      onCheckedChange={() => handleCategoryChange(cat.name)}
                    />
                    <label
                      htmlFor={`cat-${cat.name}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {cat.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
                <Label className="font-semibold mb-2 block">Price Range</Label>
                <div className="flex flex-wrap gap-2">
                    {priceRanges.map(price => (
                         <div key={price} className="flex items-center space-x-2">
                            <Checkbox
                                id={`price-${price}`}
                                checked={selectedPriceRanges.includes(price)}
                                onCheckedChange={() => handlePriceRangeChange(price)}
                            />
                            <label
                                htmlFor={`price-${price}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                {price}
                            </label>
                      </div>
                    ))}
                </div>
            </div>
            <div>
              <Label htmlFor="rating-slider" className="font-semibold mb-4 block">Minimum Rating: {rating[0].toFixed(1)} stars</Label>
              <Slider
                id="rating-slider"
                min={0}
                max={5}
                step={0.1}
                value={rating}
                onValueChange={setRating}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {filteredVendors.length > 0 ? (
        <VendorList vendors={filteredVendors} />
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl font-headline font-semibold">
            No results found
          </h2>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}
