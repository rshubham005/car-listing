/* eslint-disable  */
import { Suspense } from "react";
import { getCars, CARS_PER_PAGE } from "@/lib/mock-api";
import CarList from "@/components/CarList";
import SearchFilters from "@/components/SearchFilters";
import Pagination from "@/components/Pagination";

type SortOrder = "asc" | "desc";

export default async function HomePage({ searchParams }: any) {
  // Extract and validate sortOrder
  const getSortOrder = (
    value: string | string[] | undefined
  ): SortOrder | undefined => {
    if (typeof value === "string" && (value === "asc" || value === "desc")) {
      return value;
    }
    return undefined;
  };

  // Convert and validate numeric parameters
  const getNumberParam = (
    value: string | string[] | undefined
  ): number | undefined => {
    if (typeof value === "string") {
      const num = Number(value);
      return isNaN(num) ? undefined : num;
    }
    return undefined;
  };

  // Get string parameter
  const getStringParam = (
    value: string | string[] | undefined
  ): string | undefined => {
    return typeof value === "string" ? value : undefined;
  };

  // Parse all parameters with validation
  const page = getNumberParam(searchParams.page) || 1;
  const make = getStringParam(searchParams.make);
  const model = getStringParam(searchParams.model);
  const year = getNumberParam(searchParams.year);
  const minPrice = getNumberParam(searchParams.minPrice);
  const maxPrice = getNumberParam(searchParams.maxPrice);
  const sortBy = getStringParam(searchParams.sortBy);
  const sortOrder = getSortOrder(searchParams.sortOrder);

  const { cars, total } = await getCars({
    make,
    model,
    year,
    minPrice,
    maxPrice,
    sortBy,
    sortOrder,
    page,
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Car Listings</h1>
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
