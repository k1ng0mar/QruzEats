"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { AddressModal } from "./address-modal";

export function AddressSelector() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(
    "Select your address"
  );

  return (
    <>
      <div className="flex flex-col items-start">
        <span className="text-xs text-muted-foreground">DELIVER TO</span>
        <Button
          variant="ghost"
          className="p-0 h-auto font-headline text-base font-semibold"
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
