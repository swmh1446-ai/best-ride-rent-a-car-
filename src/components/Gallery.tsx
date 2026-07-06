/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
      title: 'V8 Luxury Cruiser',
      category: 'Luxury SUV',
    },
    {
      url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1200',
      title: 'Premium Sedan Cruise',
      category: 'Sleek Sedan',
    },
    {
      url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200',
      title: 'RAK Desert Tourer',
      category: 'SUV Venture',
    },
    {
      url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200',
      title: 'Suzuki Ciaz Premium',
      category: 'Brand New Sedan',
    },
    {
      url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1200',
      title: 'Executive Cabin Detail',
      category: 'Premium Interior',
    },
    {
      url: 'https://images.unsplash.com/photo-1542362567-b07eac79094d?auto=format&fit=crop&q=80&w=1200',
      title: 'Golden Hour Mountain Drive',
      category: 'Jebel Jais RAK',
    },
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx !== null) {
      setActiveImageIdx((activeImageIdx - 1 + images.length) % images.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx !== null) {
      setActiveImageIdx((activeImageIdx + 1) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-brand-ivory relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">
            Visual Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary heading-luxury mt-2">
            Best Ride Luxury Gallery
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto mt-4 rounded-full" />
          <p className="text-text-secondary mt-4">
            A visual overview of our pristine rental vehicles, luxurious cabins, and scenic drives across the golden landscapes of Ras Al Khaimah.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden aspect-4/3 group cursor-pointer border border-brand-red/5 luxury-shadow"
              onClick={() => setActiveImageIdx(idx)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              
              {/* Overlay Glass Panel */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">
                    {img.category}
                  </span>
                  <h3 className="text-white text-base font-bold heading-luxury mt-1">
                    {img.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIdx !== null && (
          <motion.div
            id="lightbox-modal"
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIdx(null)}
              className="absolute top-6 right-6 p-2 text-white hover:text-brand-gold bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left navigation arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 text-white hover:text-brand-gold bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Main high resolution display image */}
            <motion.div
              className="relative max-w-4xl max-h-[80vh] rounded-xl overflow-hidden shadow-2xl border border-white/10"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[activeImageIdx].url}
                alt={images[activeImageIdx].title}
                className="max-w-full max-h-[85vh] object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 text-white text-left">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">
                  {images[activeImageIdx].category}
                </span>
                <h4 className="text-xl font-bold mt-1 heading-luxury">
                  {images[activeImageIdx].title}
                </h4>
              </div>
            </motion.div>

            {/* Right navigation arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 text-white hover:text-brand-gold bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
