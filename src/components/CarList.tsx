import Link from 'next/link';
import Image from 'next/image';
import { Car } from '@/types/types';

export default function CarList({ cars }: { cars: Car[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {cars.map((car) => (
        <Link
          key={car.id}
          href={`/cars/${car.id}`}
          className="block bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <Image
              src={car.images[0]}
              alt={`${car.year} ${car.make} ${car.model}`}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              {car.year} {car.make} {car.model}
            </h2>
            <p className="text-blue-600 font-bold mt-2">
              ${car.price.toLocaleString()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}