/* eslint-disable  */
import { getCarById } from "@/lib/mock-api";
import BackButton from "@/components/BackButton";
import ImageCarousel from "@/components/ImageCarousel";


export default async function CarDetailsPage({ params }:any) {
  const car = await getCarById(params.id);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <BackButton />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageCarousel images={car.images} />
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {car.year} {car.make} {car.model}
          </h1>
          <p className="text-2xl font-bold text-blue-600 mb-4">
            ${car.price.toLocaleString()}
          </p>
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p>{car.description}</p>
            <h2 className="text-xl font-semibold mt-4 mb-2">Specifications</h2>
            <ul>
              <li>
                Mileage: {car.specifications.mileage.toLocaleString()} miles
              </li>
              <li>Transmission: {car.specifications.transmission}</li>
              <li>Fuel Type: {car.specifications.fuelType}</li>
              <li>Body Type: {car.specifications.bodyType}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
