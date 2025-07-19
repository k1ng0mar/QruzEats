
'use client';
import { usePathname } from "next/navigation";
import { Header } from "@/components/qruz/header";
import { BottomNav } from "@/components/qruz/bottom-nav";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showHeader = !pathname.startsWith('/search');
  const showBottomNav = !pathname.startsWith('/reels');

  return (
    <>
      <div className="relative flex min-h-screen flex-col bg-background">
        {showHeader && <Header />}
        <main className="flex-1">
          {children}
        </main>
      </div>
      {showBottomNav && <BottomNav />}
    </>
  );
}
