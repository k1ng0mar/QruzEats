'use client';
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { BottomNav } from "@/components/qruz/bottom-nav";
import { usePathname } from "next/navigation";
import { Header } from "@/components/qruz/header";

// No metadata export, as it's a client component.
// Metadata should be handled in specific page.tsx files if needed.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showHeader = ['/', '/food', '/shop'].includes(pathname);
  const showBottomNav = !pathname.startsWith('/reels');


  return (
    <html lang="en">
      <head>
        <title>QruzEats</title>
        <meta name="description" content="Your favorite Northern Nigerian dishes, delivered." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div className="relative flex min-h-screen flex-col bg-background">
          {showHeader && <Header />}
          <main className="flex-1">
            {children}
          </main>
        </div>
        {showBottomNav && <BottomNav />}
        <Toaster />
      </body>
    </html>
  );
}
