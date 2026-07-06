/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Vehicle {
  id: string;
  name: string;
  year: number;
  type: 'Sedan' | 'SUV' | 'Economy' | 'Luxury';
  image: string;
  features: string[];
  specs: {
    engine?: string;
    passengers: number;
    transmission: 'Automatic' | 'Manual';
    fuel: 'Petrol' | 'Diesel' | 'Hybrid';
    luggage: number;
  };
  dailyPrice: number; // in AED
  weeklyPrice: number; // in AED
  monthlyPrice: number; // in AED
  isNew?: boolean;
  tag?: string;
}

export interface BookingDetails {
  name: string;
  phone: string;
  email: string;
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  vehicleId: string;
  message?: string;
}

export interface EnquiryDetails {
  name: string;
  phone: string;
  email: string;
  vehicleId?: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  review: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
