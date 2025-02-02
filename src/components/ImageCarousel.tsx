'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImageCarousel({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="relative">
      <div className="relative h-96">
        <Image
          src={images[currentImage]}
          alt="Car image"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentImage === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
}

