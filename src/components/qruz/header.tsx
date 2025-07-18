import Link from "next/link";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddressSelector } from "./address-selector";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-card">
      <div className="container flex h-20 items-center justify-between p-4 md:p-6">
        <AddressSelector />
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-6 w-6" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Link href="/profile">
            <Avatar>
               <AvatarImage src="https://placehold.co/100x100.png" alt="User profile" />
               <AvatarFallback>QE</AvatarFallback>
            </Avatar>
            <span className="sr-only">Profile</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
