import { Header } from "@/components/qruz/header";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4 md:p-8 pb-24">
        <div className="relative mb-6">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for food or stores"
            className="pl-10 text-lg h-12"
          />
        </div>

        <div className="text-center py-20">
          <h2 className="text-2xl font-headline font-semibold">
            Find what you crave
          </h2>
          <p className="text-muted-foreground mt-2">
            Search for your favorite dishes, restaurants, or groceries.
          </p>
        </div>
      </main>
    </div>
  );
}
