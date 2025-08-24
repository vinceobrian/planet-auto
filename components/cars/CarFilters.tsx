'use client';

import { CarFilters as CarFiltersType } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';

interface CarFiltersProps {
  filters: CarFiltersType;
}

export default function CarFilters({ filters }: CarFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilters = (newFilters: CarFiltersType) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Update or remove each filter parameter
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });
    
    // Update the URL with new filters
    router.push(`/cars?${params.toString()}`);
  };

  const updateFilter = (key: keyof CarFiltersType, value: string | number | undefined) => {
    updateFilters({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Filter Cars</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Transmission</label>
          <select 
            value={filters.transmission || ''}
            onChange={(e) => updateFilter('transmission', e.target.value || undefined)}
            className="w-full p-2 border rounded"
          >
            <option value="">Any</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Fuel Type</label>
          <select 
            value={filters.fuelType || ''}
            onChange={(e) => updateFilter('fuelType', e.target.value || undefined)}
            className="w-full p-2 border rounded"
          >
            <option value="">Any</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Max Price (KES)</label>
          <input 
            type="range" 
            min="3000" 
            max="25000" 
            step="500"
            value={filters.maxPrice || 25000}
            onChange={(e) => updateFilter('maxPrice', Number(e.target.value))}
            className="w-full"
          />
          <div className="text-sm text-gray-600">
            Up to {filters.maxPrice ? filters.maxPrice.toLocaleString() : '25000'} KES
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Search</label>
          <input 
            type="text" 
            placeholder="Search make or model"
            value={filters.query || ''}
            onChange={(e) => updateFilter('query', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  );
}