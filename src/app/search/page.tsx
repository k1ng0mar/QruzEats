import { AdvancedSearch } from "@/components/qruz/advanced-search";
import { Header } from "@/components/qruz/header";

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4 md:p-8 pb-24">
        <AdvancedSearch />
      </main>
    </div>
  );
}
