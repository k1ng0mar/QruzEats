"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Navigation, Map } from "lucide-react";
import { AddressForm } from "./address-form";
import { Card, CardContent } from "../ui/card";

const savedAddresses = [
  {
    id: 1,
    name: "Home",
    address: "123 Queen Amina Street, Zaria",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    id: 2,
    name: "Office",
    address: "456 Emir Road, Kano",
    icon: <MapPin className="h-5 w-5" />,
  },
];

export function AddressModal({
  open,
  onOpenChange,
  onAddressSelect,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddressSelect: (address: string) => void;
}) {
  const handleSaveAddress = (data: any) => {
    const newAddress = `${data.street}, ${data.city}`;
    onAddressSelect(newAddress);
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="rounded-t-lg h-[90vh] overflow-y-auto">
        <SheetHeader className="text-left">
          <SheetTitle className="font-headline">Select Address</SheetTitle>
          <SheetDescription>
            Choose where you want your food delivered.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <Tabs defaultValue="add_manually" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="current_location">
                <Navigation className="mr-2 h-4 w-4" /> Use Current Location
              </TabsTrigger>
              <TabsTrigger value="add_manually">
                <Map className="mr-2 h-4 w-4" /> Add Manually
              </TabsTrigger>
            </TabsList>
            <TabsContent value="current_location" className="py-4">
              <div className="text-center text-muted-foreground">
                <p>Detecting your location...</p>
                <p className="text-xs">
                  Please enable location services in your browser.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="add_manually" className="py-4">
              <AddressForm onSave={handleSaveAddress} />
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <h3 className="font-headline mb-4 text-lg font-semibold">
              Saved Addresses
            </h3>
            <div className="space-y-3">
              {savedAddresses.map((addr) => (
                <Card
                  key={addr.id}
                  className="cursor-pointer hover:bg-muted"
                  onClick={() => {
                    onAddressSelect(addr.address);
                    onOpenChange(false);
                  }}
                >
                  <CardContent className="flex items-center p-4">
                    <div className="mr-4 text-primary">{addr.icon}</div>
                    <div>
                      <p className="font-bold font-headline">{addr.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {addr.address}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
