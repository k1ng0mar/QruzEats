'use client';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Separator } from "../ui/separator";
import { Star } from "lucide-react";

const deliveryTimes = ["30 minutes", "45 minutes", "1 hour", "2 hours"];
const sortOptions = ["Popular", "Ratings", "Distance", "Lower Price First"];
const ratingOptions = [1, 2, 3, 4, 5];
const tagOptions = ["Snacks", "Beverages", "Food Items", "Soft Drink", "Fruits Item", "Vegetable", "Food Spices"];

const Chip = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
    <Button 
        variant={active ? 'default' : 'outline'}
        onClick={onClick}
        className={`rounded-full h-8 px-3 font-normal text-sm transition-all duration-200 ${active ? 'bg-primary text-primary-foreground' : 'bg-muted/60 border-transparent text-foreground hover:bg-muted'}`}
    >
        {label}
    </Button>
);

const RatingButton = ({ stars, active, onClick }: { stars: number, active: boolean, onClick: () => void }) => (
    <Button
        variant={active ? 'default' : 'outline'}
        onClick={onClick}
        className={`flex-1 rounded-md h-10 transition-all duration-200 ${active ? 'bg-primary text-primary-foreground' : 'bg-muted/60 border-transparent text-foreground hover:bg-muted'}`}
    >
        {stars} <Star className={`w-4 h-4 ml-1 ${active ? 'text-yellow-300' : 'text-yellow-500'}`} fill={active ? 'currentColor' : 'none'} />
    </Button>
);

export function FilterSheet({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
    const [priceRange, setPriceRange] = useState([0, 20000]);
    const [activeDeliveryTime, setActiveDeliveryTime] = useState("30 minutes");
    const [activeSortBy, setActiveSortBy] = useState("Popular");
    const [activeRating, setActiveRating] = useState<number | null>(null);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagToggle = (tag: string) => {
        setSelectedTags(prev => 
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const handleClearFilters = () => {
        setPriceRange([0, 20000]);
        setActiveDeliveryTime("30 minutes");
        setActiveSortBy("Popular");
        setActiveRating(null);
        setSelectedTags([]);
    };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full max-w-sm flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-headline text-2xl">Filter Your Search</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-6 space-y-8">
            <div className="space-y-4 px-1">
                <Label className="font-semibold text-base">Pricing Range</Label>
                <Slider
                    min={0}
                    max={50000}
                    step={500}
                    value={priceRange}
                    onValueChange={setPriceRange}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₦{priceRange[0].toLocaleString()}</span>
                    <span>₦{priceRange[1].toLocaleString()}</span>
                </div>
            </div>
            
            <Separator />
            
            <div className="space-y-3">
                <Label className="font-semibold text-base">Delivery Time</Label>
                <div className="flex flex-wrap gap-2">
                    {deliveryTimes.map(time => (
                        <Chip key={time} label={time} active={activeDeliveryTime === time} onClick={() => setActiveDeliveryTime(time)} />
                    ))}
                </div>
            </div>

            <Separator />

            <div className="space-y-3">
                <Label className="font-semibold text-base">Sort By</Label>
                 <div className="flex flex-wrap gap-2">
                    {sortOptions.map(opt => (
                        <Chip key={opt} label={opt} active={activeSortBy === opt} onClick={() => setActiveSortBy(opt)} />
                    ))}
                </div>
            </div>
            
            <Separator />

            <div className="space-y-3">
                <Label className="font-semibold text-base">Ratings</Label>
                <div className="flex gap-2">
                    {ratingOptions.map(rating => (
                        <RatingButton key={rating} stars={rating} active={activeRating === rating} onClick={() => setActiveRating(rating)} />
                    ))}
                </div>
            </div>

             <Separator />
            
            <div className="space-y-3">
                <Label className="font-semibold text-base">Tags</Label>
                <div className="flex flex-wrap gap-2">
                    {tagOptions.map(tag => (
                        <Chip key={tag} label={tag} active={selectedTags.includes(tag)} onClick={() => handleTagToggle(tag)} />
                    ))}
                </div>
            </div>

        </div>
        <SheetFooter className="grid grid-cols-2 gap-4 pt-4 border-t">
          <Button variant="outline" onClick={handleClearFilters}>Clear filters</Button>
          <SheetClose asChild>
            <Button>Apply filters</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
