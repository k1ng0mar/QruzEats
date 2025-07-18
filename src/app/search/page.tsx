import { AdvancedSearch } from "@/components/qruz/advanced-search";

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 md:p-8 pb-24">
        <AdvancedSearch />
      </main>
    </div>
  );
}
