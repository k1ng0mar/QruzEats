import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Send, MoreVertical } from "lucide-react";

const reelsData = [
  {
    id: 1,
    vendorName: "Grill House",
    vendorHandle: "@grillhouse",
    vendorAvatar: "https://placehold.co/40x40.png",
    videoUrl: "https://placehold.co/400x700.png",
    caption: "Our special mixed grill platter! 🔥",
    likes: "1.2k",
    comments: "245",
    product: {
      name: "Mixed Grill Platter",
      price: "₦8,500",
      image: "https://placehold.co/100x100.png"
    }
  },
  {
    id: 2,
    vendorName: "Afrocon",
    vendorHandle: "@afrocon",
    vendorAvatar: "https://placehold.co/40x40.png",
    videoUrl: "https://placehold.co/400x700.png",
    caption: "Jollof rice like you've never had it before! 🇳🇬",
    likes: "2.5k",
    comments: "512",
     product: {
      name: "Jollof Rice & Chicken",
      price: "₦3,500",
      image: "https://placehold.co/100x100.png"
    }
  }
];

const ReelCard = ({ reel }: { reel: typeof reelsData[0] }) => {
  return (
    <div className="h-full w-full relative snap-start flex-shrink-0">
      <Image
        src={reel.videoUrl}
        alt={`Video from ${reel.vendorName}`}
        fill
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 z-10"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Avatar>
            <AvatarImage src={reel.vendorAvatar}/>
            <AvatarFallback>{reel.vendorName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold">{reel.vendorName}</p>
            <p className="text-sm">{reel.vendorHandle}</p>
          </div>
        </div>
        <p className="mb-4">{reel.caption}</p>

        <div className="flex items-center justify-between bg-white/20 backdrop-blur-md p-3 rounded-lg">
           <div className="flex items-center gap-3">
            <Image src={reel.product.image} alt={reel.product.name} width={50} height={50} className="rounded-md" />
            <div>
                <p className="font-bold">{reel.product.name}</p>
                <p>{reel.product.price}</p>
            </div>
           </div>
           <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/80">Add to Cart</Button>
        </div>
      </div>

      <div className="absolute right-2 bottom-48 flex flex-col items-center gap-5 z-20 text-white">
        <button className="flex flex-col items-center">
            <Heart size={30} />
            <span className="text-xs font-semibold">{reel.likes}</span>
        </button>
        <button className="flex flex-col items-center">
            <MessageCircle size={30} />
            <span className="text-xs font-semibold">{reel.comments}</span>
        </button>
        <button>
            <Send size={30} />
        </button>
         <button>
            <MoreVertical size={30} />
        </button>
      </div>
    </div>
  );
};


export default function ReelsPage() {
  return (
    <div className="h-screen w-screen bg-black overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <div className="h-[calc(100%-5rem)] relative">
            {reelsData.map((reel) => (
                <ReelCard key={reel.id} reel={reel} />
            ))}
        </div>
    </div>
  );
}
