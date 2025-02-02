/* eslint-disable  */
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <input
        type="text"
        placeholder="Make"
        className="border bg-black text-white p-2 rounded"
        onChange={(e) => {
          router.push("?" + createQueryString("make", e.target.value));
        }}
        defaultValue={searchParams.get("make") ?? ""}
      />
      <input
        type="text"
        placeholder="Model"
        className="border bg-black text-white p-2 rounded"
        onChange={(e) => {
          router.push("?" + createQueryString("model", e.target.value));
        }}
        defaultValue={searchParams.get("model") ?? ""}
      />
      <select
        className="border bg-black text-white p-2 rounded"
        onChange={(e) => {
          router.push("?" + createQueryString("sortBy", e.target.value));
        }}
        defaultValue={searchParams.get("sortBy") ?? ""}
      >
        <option value="">Sort by</option>
        <option value="price">Price</option>
        <option value="year">Year</option>
      </select>
      <select
        className="border bg-black text-white p-2 rounded"
        onChange={(e) => {
          router.push("?" + createQueryString("sortOrder", e.target.value));
        }}
        defaultValue={searchParams.get("sortOrder") ?? "asc"}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}
