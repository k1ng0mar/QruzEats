
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const orderHistory = [
  {
    id: "ORD-12345",
    date: "2024-07-21",
    status: "Delivered",
    total: 3500,
    items: [
      { id: 1, name: "Jollof Rice with Chicken", quantity: 1, image: "https://placehold.co/100x100.png" },
      { id: 2, name: "Fura da Nono", quantity: 1, image: "https://placehold.co/100x100.png" },
    ],
    vendor: "Mama's Delight",
  },
  {
    id: "ORD-67890",
    date: "2024-07-18",
    status: "Cancelled",
    total: 4000,
    items: [
      { id: 3, name: "Full Chicken Suya", quantity: 1, image: "https://placehold.co/100x100.png" },
    ],
    vendor: "Kaka's Kitchen",
  },
];

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 md:p-8 pb-24">
        <h1 className="text-3xl font-headline font-bold mb-6">Order History</h1>

        {orderHistory.length > 0 ? (
          <div className="space-y-6">
            {orderHistory.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-headline text-lg">{order.vendor}</CardTitle>
                      <p className="text-sm text-muted-foreground">Order ID: {order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.status}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="my-4" />
                  <div className="space-y-4">
                     {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md" />
                        <div>
                            <p className="font-bold">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-4" />
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Total: ₦{order.total.toLocaleString()}</span>
                    <Button variant="outline">Reorder</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-headline font-semibold">No order history</h2>
            <p className="text-muted-foreground mt-2">Your past orders will appear here.</p>
            <Button asChild className="mt-6">
              <Link href="/">Start Shopping</Link>
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
