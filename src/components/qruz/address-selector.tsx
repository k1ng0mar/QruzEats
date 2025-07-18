"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { AddressModal } from "./address-modal";

export function AddressSelector() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(
    "Select your location"
  );

  return (
    <>
      <div className="flex flex-col items-start">
        <span className="text-xs text-muted-foreground">Current location</span>
        <Button
          variant="ghost"
          className="p-0 h-auto font-headline text-lg font-bold"
          onClick={() => setIsModalOpen(true)}
        >
          {selectedAddress}
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </div>
      <AddressModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onAddressSelect={setSelectedAddress}
      />
    </>
  );
}
