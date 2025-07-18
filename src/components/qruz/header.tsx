import { Bell, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddressSelector } from "./address-selector";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-4">
            <MapPin className="h-7 w-7 text-primary" />
            <AddressSelector />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative rounded-full">
            <Bell className="h-6 w-6" />
            <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
