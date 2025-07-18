import { Header } from "@/components/qruz/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const cartItemsByVendor = [
  {
    vendor: "Mama's Delight",
    items: [
      { id: 1, name: "Jollof Rice with Chicken", price: 2500, quantity: 1, image: "https://placehold.co/100x100.png" },
      { id: 2, name: "Fura da Nono", price: 1000, quantity: 2, image: "https://placehold.co/100x100.png" },
    ],
  },
  {
    vendor: "Kaka's Kitchen",
    items: [
      { id: 3, name: "Full Chicken Suya", price: 4000, quantity: 1, image: "https://placehold.co/100x100.png" },
    ],
  },
];

export default function CartPage() {
  const total = cartItemsByVendor.reduce((acc, vendor) => 
    acc + vendor.items.reduce((itemAcc, item) => itemAcc + item.price * item.quantity, 0), 0
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4 md:p-8 pb-24">
        <h1 className="text-3xl font-headline font-bold mb-6">Your Cart</h1>
        
        {cartItemsByVendor.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {cartItemsByVendor.map((vendorCart) => (
                <Card key={vendorCart.vendor}>
                  <CardHeader>
                    <CardTitle className="font-headline">{vendorCart.vendor}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {vendorCart.items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                           <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md"/>
                          <div>
                            <p className="font-bold">{item.name}</p>
                            <p className="text-sm text-muted-foreground">₦{item.price.toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                           <p>Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>₦500</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₦{(total + 500).toLocaleString()}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Checkout</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-headline font-semibold">Your cart is empty</h2>
            <p className="text-muted-foreground mt-2">Add items from restaurants to get started.</p>
            <Button className="mt-6">Start Shopping</Button>
          </div>
        )}
      </main>
    </div>
  );
}
