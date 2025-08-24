'use client';

import { Car } from '@/types';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleBookCar = () => {
    if (!session) {
      router.push('/auth/login');
      return;
    }
    // Handle booking logic here
    router.push(`/booking?carId=${car.id}`);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image
          src={car.imageUrl}
          alt={`${car.make} ${car.model} ${car.year}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg">{car.make} {car.model}</h3>
            <p className="text-gray-600">{car.year} • {car.location}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm mb-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{car.seats} seats</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">{car.transmission}</span>
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">{car.fuelType}</span>
        </div>
        
        {car.features && (
          <div className="text-sm text-gray-600 mb-3">
            Features: {car.features.slice(0, 2).join(' • ')}
            {car.features.length > 2 && ' • ...'}
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">{formatPrice(car.pricePerDay)}<span className="text-sm font-normal">/day</span></div>
          <button 
            onClick={handleBookCar}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}