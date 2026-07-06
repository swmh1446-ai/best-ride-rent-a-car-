/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Fuel, Briefcase, Settings, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { VEHICLES, COMPANY_CONTACT } from '../data/appData';
import { Vehicle } from '../types';

interface FeaturedCarsProps {
  onSelectVehicle: (id: string) => void;
}

type CarTypeFilter = 'All' | 'Sedan' | 'SUV' | 'Economy' | 'Luxury';

export default function FeaturedCars({ onSelectVehicle }: FeaturedCarsProps) {
  const [filter, setFilter] = useState<CarTypeFilter>('All');
  const [hoveredCarId, setHoveredCarId] = useState<string | null>(null);

  const categories: CarTypeFilter[] = ['All', 'Sedan', 'SUV', 'Economy', 'Luxury'];

  const filteredVehicles = VEHICLES.filter((vehicle) => {
    if (filter === 'All') return true;
    return vehicle.type === filter;
  });

  const handleWhatsAppInquiry = (vehicle: Vehicle) => {
    const text = encodeURIComponent(
      `Hello Best Ride Rent A Car, I am interested in renting the ${vehicle.name} (${vehicle.year}). Please let me know availability.`
    );
    window.open(
      `https://api.whatsapp.com/send?phone=${COMPANY_CONTACT.whatsapp}&text=${text}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="fleet" className="py-24 bg-brand-bg relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">
            Luxury Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary heading-luxury mt-2">
            Explore Our Premium Rental Fleet
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto mt-4 rounded-full" />
          <p className="text-text-secondary mt-4">
            Select from our range of brand-new, impeccably maintained cars. From economical city drives to premium heavy SUVs, find the absolute perfect match.
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-brand-red text-white shadow-md shadow-brand-red/10'
                  : 'bg-white text-text-secondary border border-brand-red/10 hover:border-brand-gold hover:text-brand-red'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredCarId(car.id)}
                onMouseLeave={() => setHoveredCarId(null)}
                className="bg-[#FFFDF7]/80 border border-white rounded-[24px] overflow-hidden shadow-xl shadow-black/5 transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1 flex flex-col h-full relative"
                id={`car-card-${car.id}`}
              >
                {/* Car Image Wrapper */}
                <div className="relative h-56 w-full bg-stone-100 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredCarId === car.id ? 'scale-110' : 'scale-100'
                    }`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Decorative Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {car.isNew && (
                      <span className="flex items-center space-x-1 bg-brand-gold text-text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                        <Sparkles className="h-3 w-3" />
                        <span>Brand New</span>
                      </span>
                    )}
                    <span className="bg-brand-red text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                      {car.type}
                    </span>
                  </div>

                  {/* Tag / Price Callout */}
                  {car.tag && (
                    <div className="absolute bottom-4 right-4 bg-brand-ivory/95 backdrop-blur px-3 py-1 rounded-lg border border-brand-gold/30 shadow-md">
                      <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider">
                        {car.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header Name */}
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-text-primary heading-luxury">
                        {car.name}
                      </h3>
                    </div>

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-2 gap-y-3 gap-x-2 py-4 border-b border-brand-red/10 my-2 text-xs text-text-secondary">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-brand-red shrink-0" />
                        <span>{car.specs.passengers} Passengers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Settings className="h-4 w-4 text-brand-red shrink-0" />
                        <span>{car.specs.transmission}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Fuel className="h-4 w-4 text-brand-red shrink-0" />
                        <span>{car.specs.fuel}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-4 w-4 text-brand-red shrink-0" />
                        <span>{car.specs.luggage} Bag(s)</span>
                      </div>
                    </div>

                    {/* Key Premium Features Bullet List */}
                    <div className="py-2.5">
                      <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-1.5">
                        Highlighted Features
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {car.features.slice(0, 3).map((feat, idx) => (
                          <span
                            key={idx}
                            className="bg-brand-red/5 text-brand-red text-[10px] font-semibold px-2 py-0.5 rounded"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing Matrix & Booking Actions */}
                  <div className="mt-6 pt-4 border-t border-brand-red/5">
                    <div className="grid grid-cols-3 gap-2 text-center mb-5 bg-brand-bg/50 p-2.5 rounded-xl border border-brand-red/5">
                      <div>
                        <span className="block text-[9px] uppercase tracking-wider text-text-secondary">
                          Daily
                        </span>
                        <span className="text-sm font-bold text-brand-red">
                          AED {car.dailyPrice}
                        </span>
                      </div>
                      <div className="border-x border-brand-red/10">
                        <span className="block text-[9px] uppercase tracking-wider text-text-secondary">
                          Weekly
                        </span>
                        <span className="text-sm font-bold text-text-primary">
                          AED {car.weeklyPrice}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-wider text-text-secondary">
                          Monthly
                        </span>
                        <span className="text-sm font-bold text-text-primary text-brand-gold">
                          AED {car.monthlyPrice}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => onSelectVehicle(car.id)}
                        className="flex-1 flex items-center justify-center space-x-1 rounded-xl border border-brand-red text-brand-red bg-transparent hover:bg-brand-red hover:text-white text-xs font-bold py-3 transition-all cursor-pointer"
                      >
                        <span>Rent Now</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => handleWhatsAppInquiry(car)}
                        className="flex-1 flex items-center justify-center space-x-1.5 rounded-xl bg-brand-red hover:bg-[#8e2a2a] text-xs font-bold text-white py-3 shadow-lg shadow-brand-red/20 transition-all cursor-pointer border-none"
                        title="Book via WhatsApp"
                      >
                        <MessageSquare className="h-3.5 w-3.5 fill-current text-brand-gold" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
