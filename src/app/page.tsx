import { Suspense } from "react";
import { getCars, CARS_PER_PAGE } from "@/lib/mock-api";
import CarList from "@/components/CarList";
import SearchFilters from "@/components/SearchFilters";
import Pagination from "@/components/Pagination";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = Number(searchParams?.page) || 1;
  const { cars, total } = await getCars({
    make: searchParams?.make,
    model: searchParams?.model,
    year: searchParams?.year ? Number(searchParams?.year) : undefined,
    minPrice: searchParams?.minPrice ? Number(searchParams?.minPrice) : undefined,
    maxPrice: searchParams?.maxPrice ? Number(searchParams?.maxPrice) : undefined,
    sortBy: searchParams?.sortBy,
    sortOrder: searchParams?.sortOrder as "asc" | "desc",
    page,
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-black font-bold mb-8">Car Listings</h1>
      <SearchFilters />
      <Suspense fallback={<div>Loading...</div>}>
        <CarList cars={cars} />
      </Suspense>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(total / CARS_PER_PAGE)}
      />
    </main>
  );
}
