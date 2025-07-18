import { Header } from "@/components/qruz/header";

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4 md:p-8 pb-24">
        <h1 className="text-3xl font-headline font-bold mb-6">Shop</h1>
         <div className="text-center py-20">
            <h2 className="text-2xl font-headline font-semibold">Shops and groceries coming soon!</h2>
            <p className="text-muted-foreground mt-2">We're stocking up the best products for you.</p>
        </div>
      </main>
    </div>
  );
}
