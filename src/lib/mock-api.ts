import { Car, FilterParams } from '@/types/types';
import { mockCars } from './mock-data';
export const CARS_PER_PAGE = 12;

export async function getCars(params: FilterParams): Promise<{ cars: Car[]; total: number }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filteredCars = mockCars.filter(car => {
    if (params.make && !car.make.toLowerCase().includes(params.make.toLowerCase())) return false;
    if (params.model && !car.model.toLowerCase().includes(params.model.toLowerCase())) return false;
    if (params.year && car.year !== params.year) return false;
    if (params.minPrice && car.price < params.minPrice) return false;
    if (params.maxPrice && car.price > params.maxPrice) return false;
    return true;
  });

  if (params.sortBy) {
    filteredCars.sort((a: any, b: any) => {
      const multiplier = params.sortOrder === 'desc' ? -1 : 1;
      return (a[params.sortBy!] - b[params.sortBy!]) * multiplier;
    });
  }

  const start = ((params.page || 1) - 1) * CARS_PER_PAGE;
  const paginatedCars = filteredCars.slice(start, start + CARS_PER_PAGE);

  return {
    cars: paginatedCars,
    total: filteredCars.length
  };
}

export async function getCarById(id: string): Promise<Car | null> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockCars.find(car => car.id === id) || null;
}