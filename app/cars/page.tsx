import CarCard from '@/components/cars/CarCard';
import CarFilters from '@/components/cars/CarFilters';
import { sampleCars } from '@/lib/sampleData';
import { Car, CarFilters as CarFiltersType } from '@/types';

// This function runs on the server
async function getCars(filters?: CarFiltersType): Promise<Car[]> {
  // In a real app, you would fetch from your database/API
  // For now, we'll use the sample data and apply filters
  let filteredCars = [...sampleCars];
  
  if (filters?.transmission) {
    filteredCars = filteredCars.filter(car => car.transmission === filters.transmission);
  }
  
  if (filters?.fuelType) {
    filteredCars = filteredCars.filter(car => car.fuelType === filters.fuelType);
  }
  
  if (filters?.maxPrice) {
    filteredCars = filteredCars.filter(car => car.pricePerDay <= filters.maxPrice!);
  }
  
  if (filters?.query) {
    const query = filters.query.toLowerCase();
    filteredCars = filteredCars.filter(car => 
      car.make.toLowerCase().includes(query) || 
      car.model.toLowerCase().includes(query)
    );
  }
  
  return filteredCars;
}

// This is a Server Component
export default async function CarsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Await the searchParams promise
  const params = await searchParams;
  
  // Parse filters from URL search params
  const filters: CarFiltersType = {
    transmission: typeof params.transmission === 'string' ? params.transmission : undefined,
    fuelType: typeof params.fuelType === 'string' ? params.fuelType : undefined,
    maxPrice: typeof params.maxPrice === 'string' ? Number(params.maxPrice) : undefined,
    query: typeof params.query === 'string' ? params.query : undefined,
  };

  const cars = await getCars(filters);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Our Cars</h1>
      
      {/* CarFilters is a client component that handles filter changes */}
      <CarFilters filters={filters} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map(car => (
          <CarCard
            key={car.id}
            car={car}
          />
        ))}
      </div>
      
      {cars.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No cars match your filters. Try adjusting your criteria.</p>
        </div>
      )}
    </div>
  );
}