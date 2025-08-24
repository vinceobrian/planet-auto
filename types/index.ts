export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  pricePerDay: number;
  fuelType: string;
  transmission: string;
  seats: number;
  location: string;
  imageUrl: string;
  features?: string[];
}

export interface CarFilters {
  transmission?: string;
  fuelType?: string;
  seats?: number;
  maxPrice?: number;
  query?: string;
}

export interface BookingDetails {
  carId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}