export interface Car {
    id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    description: string;
    specifications: {
      mileage: number;
      transmission: string;
      fuelType: string;
      bodyType: string;
    };
    images: string[];
  }
  
  export interface FilterParams {
    make?: string;
    model?: string;
    year?: number;
    minPrice?: number;
    maxPrice?: number;
    page?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }