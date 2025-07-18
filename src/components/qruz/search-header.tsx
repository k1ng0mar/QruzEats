'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, SlidersHorizontal, Search } from "lucide-react";
import { FilterSheet } from './filter-sheet';
import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogDescription,
    DialogFooter
} from '../ui/dialog';
import { Textarea } from '../ui/textarea';

export function SearchHeader() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  
  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm border-b">
        <div className="container flex h-20 items-center gap-2 p-4 md:p-6">
          <Button variant="ghost" size="icon" onClick={() => setIsAiModalOpen(true)}>
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="sr-only">AI Recommendation</span>
          </Button>
          <div className="relative flex-1">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
             <Input placeholder="Search" className="pl-10 h-12 text-base" />
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsFilterOpen(true)}>
            <SlidersHorizontal className="h-6 w-6" />
             <span className="sr-only">Filters</span>
          </Button>
        </div>
      </header>
      <FilterSheet open={isFilterOpen} onOpenChange={setIsFilterOpen} />
      
       <Dialog open={isAiModalOpen} onOpenChange={setIsAiModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
                <Sparkles className="text-primary"/>
                AI Food Recommendation
            </DialogTitle>
            <DialogDescription>
              Tell us what you're in the mood for, and we'll suggest something delicious!
            </DialogDescription>
          </DialogHeader>
          <Textarea 
            placeholder="e.g., 'I want something spicy and traditional' or 'What's a good light lunch?'"
            rows={4}
          />
          <DialogFooter>
            <Button className="w-full">Get Recommendation</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
