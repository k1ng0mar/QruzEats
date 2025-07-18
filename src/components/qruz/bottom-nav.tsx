"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ShoppingCart, User, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/search", label: "Search", icon: Search },
  { href: "/cart", label: "Cart", icon: ShoppingCart },
  { href: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-20 bg-card border-t shadow-t-lg md:hidden">
      <div className="flex items-center justify-around h-full">
        {navItems.slice(0, 2).map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className={cn(
              "flex flex-col items-center justify-center text-muted-foreground transition-colors hover:text-primary w-16",
              pathname === href ? "text-primary font-bold" : ""
            )}
          >
            <Icon className="h-6 w-6 mb-1" />
            <span className="text-xs">{label}</span>
          </Link>
        ))}

        <div className="relative">
          <Link
            href="/food"
            className="flex items-center justify-center w-16 h-16 bg-primary rounded-full shadow-lg"
            aria-label="Order Food"
          >
            <Utensils className="h-8 w-8 text-primary-foreground" />
          </Link>
        </div>

        {navItems.slice(2, 4).map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className={cn(
              "flex flex-col items-center justify-center text-muted-foreground transition-colors hover:text-primary w-16",
              pathname === href ? "text-primary font-bold" : ""
            )}
          >
            <Icon className="h-6 w-6 mb-1" />
            <span className="text-xs">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
