'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, SlidersHorizontal, Search, Loader2 } from "lucide-react";
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
import { recommendFood, RecommendFoodOutput } from '@/ai/flows/recommend-food-flow';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export function SearchHeader() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<RecommendFoodOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleRecommendation = async () => {
    if (!aiQuery) return;
    setIsLoading(true);
    setAiResponse(null);
    try {
      const response = await recommendFood({ query: aiQuery });
      setAiResponse(response);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not get recommendation. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
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
            value={aiQuery}
            onChange={(e) => setAiQuery(e.target.value)}
            disabled={isLoading}
          />

          {isLoading && (
            <div className='flex items-center justify-center p-4'>
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {aiResponse && (
            <div className='space-y-4'>
                 <p className="text-sm text-muted-foreground">{aiResponse.response}</p>
                 {aiResponse.recommendations && aiResponse.recommendations.length > 0 && (
                    <Carousel opts={{
                        align: "start",
                      }}
                      className="w-full">
                        <CarouselContent>
                           {aiResponse.recommendations.map((item) => (
                                <CarouselItem key={item.productId}>
                                     <Card className="overflow-hidden">
                                        <CardContent className="p-0">
                                            <div className="flex items-center justify-between bg-card p-3 rounded-lg border">
                                                <div className="flex items-center gap-3">
                                                    <Image src={item.productImage} alt={item.productName} width={60} height={60} className="rounded-md object-cover" />
                                                    <div className='max-w-40'>
                                                        <p className="font-bold truncate">{item.productName}</p>
                                                        <p className='text-sm text-muted-foreground'>₦{item.price.toLocaleString()}</p>
                                                        <Link href={`/vendor/${item.vendorId}`} className='text-xs text-primary hover:underline' onClick={() => setIsAiModalOpen(false)}>
                                                            From {item.vendorName}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/80">Add</Button>
                                            </div>
                                        </CardContent>
                                     </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {aiResponse.recommendations.length > 1 && (
                            <>
                                <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2" />
                                <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2" />
                            </>
                        )}
                    </Carousel>
                 )}
            </div>
          )}

          <DialogFooter>
            <Button className="w-full" onClick={handleRecommendation} disabled={isLoading || !aiQuery}>
              {isLoading ? 'Thinking...' : 'Get Recommendation'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
