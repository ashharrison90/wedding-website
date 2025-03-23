export interface AccommodationProps {
  title: string;
  description: string[];
  imgSrc: string;
  price: number;
  beds: number;
  bedsExtra?: number;
  sleeps: number;
  sleepsExtra?: number;
  bathrooms: number;
  link: string;
  fullyBooked?: boolean;
} 