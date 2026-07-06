/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Vehicle, FAQItem, Testimonial } from '../types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'elantra-2025',
    name: 'Hyundai Elantra 2025 (Full Option)',
    year: 2025,
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1200',
    features: ['Premium Interior', 'Apple CarPlay & Android Auto', 'Reverse Camera', 'Smart Features', 'Keyless Entry', 'Wireless Charging'],
    specs: {
      engine: '2.0L 4-Cylinder',
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      luggage: 2
    },
    dailyPrice: 120,
    weeklyPrice: 750,
    monthlyPrice: 2600,
    isNew: true,
    tag: 'Popular'
  },
  {
    id: 'venue-2024',
    name: 'Hyundai Venue (Full Option)',
    year: 2024,
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200',
    features: ['Premium SUV Styling', 'High Ride Comfort', 'Family Friendly', 'Apple CarPlay', 'Cruise Control', 'Parking Sensors'],
    specs: {
      engine: '1.6L Engine',
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      luggage: 3
    },
    dailyPrice: 140,
    weeklyPrice: 850,
    monthlyPrice: 3000,
    isNew: false,
    tag: 'Spacious'
  },
  {
    id: 'ciaz-2024',
    name: 'Suzuki Ciaz 2024',
    year: 2024,
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200',
    features: ['Brand New Fleet', 'Apple CarPlay & Android Auto', 'Reverse Camera', 'Excellent Fuel Economy', 'Spacious Legroom'],
    specs: {
      engine: '1.5L Efficient VVT',
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      luggage: 2
    },
    dailyPrice: 90,
    weeklyPrice: 580,
    monthlyPrice: 1900,
    isNew: true,
    tag: 'Starting from AED 90/day'
  },
  {
    id: 'pegas-2024',
    name: 'Kia Pegas 2024',
    year: 2024,
    type: 'Economy',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=1200',
    features: ['Super Economy Rate', 'Extremely Fuel Efficient', 'Crisp Air Conditioning', 'Bluetooth Connection', 'Compact & Easy Parking'],
    specs: {
      engine: '1.4L Multi-Point',
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      luggage: 1
    },
    dailyPrice: 60,
    weeklyPrice: 390,
    monthlyPrice: 1400,
    isNew: false,
    tag: 'Best Price: AED 60/day'
  },
  {
    id: 'patrol-2024',
    name: 'Nissan Patrol V8 Full Option',
    year: 2024,
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    features: ['Legendary V8 Power', 'Premium Leather Seats', 'Dual Screen Infotainment', 'Elite Status Design', 'All-Terrain Mode', 'Free Delivery'],
    specs: {
      engine: '5.6L V8 Engine',
      passengers: 7,
      transmission: 'Automatic',
      fuel: 'Petrol',
      luggage: 5
    },
    dailyPrice: 450,
    weeklyPrice: 2800,
    monthlyPrice: 9500,
    isNew: true,
    tag: 'VIP Luxury'
  },
  {
    id: 'accent-2024',
    name: 'Hyundai Accent 2024',
    year: 2024,
    type: 'Economy',
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=1200',
    features: ['High Reliability', 'Smart Infotainment Screen', 'Rear View Sensors', 'Outstanding Fuel Economy', 'Sleek Modern Front Grille'],
    specs: {
      engine: '1.6L SmartStream',
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      luggage: 2
    },
    dailyPrice: 80,
    weeklyPrice: 500,
    monthlyPrice: 1700,
    isNew: false,
    tag: 'Value Choice'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book a car with Best Ride Rent A Car?',
    answer: 'Booking is simple! You can either use our instant booking form on this website which automatically prepares a formatted WhatsApp booking request, or click any direct "Book via WhatsApp" button to message our reservation agents immediately. We will confirm your details and vehicle availability in minutes.'
  },
  {
    id: 'faq-2',
    question: 'Do you provide free vehicle delivery in Ras Al Khaimah?',
    answer: 'Yes, we provide 100% free delivery and pickup of your rented vehicle anywhere within Ras Al Khaimah. Whether you are at a hotel, airport, residence, or commercial office, our driver will deliver a freshly sanitized vehicle directly to your doorstep.'
  },
  {
    id: 'faq-3',
    question: 'Can tourists rent a car with you? What documents are required?',
    answer: 'Absolutely! Tourists are welcome to rent our vehicles. For tourists, we require: (1) A copy of your Passport, (2) A copy of your Tourist Visa entry stamp, (3) Your original Home Country Driving License, and (4) An International Driving Permit (IDP). For UAE residents, we require an Emirates ID and a valid UAE Driving License.'
  },
  {
    id: 'faq-4',
    question: 'Do you offer monthly rentals or corporate leasing?',
    answer: 'Yes, we specialize in high-value monthly rentals and tailor-made corporate leasing packages. Renting on a monthly basis offers significant discounts compared to daily rates. We handle all routine servicing, insurance, and replacement vehicles for our corporate partners.'
  },
  {
    id: 'faq-5',
    question: 'Is comprehensive insurance included in the rental price?',
    answer: 'Yes, all our vehicle rental rates include comprehensive insurance coverage in accordance with UAE road regulations. In the unfortunate event of an accident, a police report is required to validate the insurance claim.'
  },
  {
    id: 'faq-6',
    question: 'Are there any hidden fees or security deposit traps?',
    answer: 'At Best Ride Rent A Car, we believe in 100% transparency. There are no hidden fees. Any standard security deposit is fully documented, processed securely, and refunded back to you directly according to the rental agreement terms. Toll gates (Salik) and traffic fines are billed transparently with official receipts.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    name: 'Saeed Al-Mansoori',
    role: 'Business Owner, RAK',
    rating: 5,
    review: 'Extremely professional rental service! I leased two Suzuki Ciaz vehicles for my corporate staff and the experience was flawless. Brand new cars, timely delivery, and competitive monthly rates. Best in Ras Al Khaimah!',
    date: 'June 2026'
  },
  {
    id: 'review-2',
    name: 'Elena Rostova',
    role: 'Tourist from Germany',
    rating: 5,
    review: 'I rented the Hyundai Venue SUV for my family vacation in RAK. They delivered the car directly to our resort in Waldorf Astoria for free. The car was spotless, smelled fresh, and drove perfectly. Highly recommended!',
    date: 'May 2026'
  },
  {
    id: 'review-3',
    name: 'John Abraham',
    role: 'Project Manager',
    rating: 5,
    review: 'The Kia Pegas is an absolute lifesaver. I needed a highly fuel-efficient car for daily commutes. Starting at just 60 AED a day, it is unbeatable value. Service is lightning-fast over WhatsApp.',
    date: 'July 2026'
  },
  {
    id: 'review-4',
    name: 'Fatima Al-Shehhi',
    role: 'Local Resident',
    rating: 5,
    review: 'I always rent from Best Ride when my car goes for service. Their team is polite, and they drop the car right at my villa behind Aster Pharmacy in Nakheel. Reliable, clean cars every single time.',
    date: 'April 2026'
  },
  {
    id: 'review-5',
    name: 'David Miller',
    role: 'Expat Resident',
    rating: 5,
    review: 'Unbelievable customer support. I had a question about the toll gates at 11 PM and they answered my WhatsApp message in under 2 minutes. Transparent billing, nice cars, and no hidden surprises.',
    date: 'March 2026'
  },
  {
    id: 'review-6',
    name: 'Mohammed Al-Qasimi',
    role: 'Luxury Traveler',
    rating: 5,
    review: 'Rented their top-tier Nissan Patrol V8 for a weekend mountain drive up Jebel Jais. The power, comfort, and premium gold-standard customer care they provided made our weekend unforgettable. 5 stars all the way!',
    date: 'June 2026'
  }
];

export const COMPANY_CONTACT = {
  phone: '0558220893',
  phoneFormatted: '+971 55 822 0893',
  whatsapp: '971558220893',
  email: 'info@bestriderentacar.ae',
  address: 'Best Ride Rent A Car, Nakheel, Al Muntasir Road, Behind Aster Pharmacy, Opposite Day To Day Supermarket, Ras Al Khaimah, United Arab Emirates',
  hours: 'Daily: 8:00 AM - 10:00 PM',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.3197170138545!2d55.9554407!3d25.7930105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ3JzM0LjgiTiA1NcKwNTcnMTkuNiJF!5e0!3m2!1sen!2sae!4v1719500000000!5m2!1sen!2sae'
};
