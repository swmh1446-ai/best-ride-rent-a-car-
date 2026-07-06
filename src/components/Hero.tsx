/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle, ArrowDown } from 'lucide-react';
import BookingForm from './BookingForm';
import { COMPANY_CONTACT } from '../data/appData';

interface HeroProps {
  onSuccessBooking: () => void;
}

export default function Hero({ onSuccessBooking }: HeroProps) {
  const bulletPoints = [
    'Daily, Weekly, & Monthly Rentals',
    'Flexible Corporate Leasing',
    'Free Delivery Across Ras Al Khaimah',
    'Fully Cleaned & Maintained Vehicles',
  ];

  const handleScrollToBooking = () => {
    const element = document.getElementById('fleet');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Best Ride Rent A Car, I would like to inquire about booking a vehicle.'
    );
    window.open(
      `https://api.whatsapp.com/send?phone=${COMPANY_CONTACT.whatsapp}&text=${text}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-12 lg:pt-32 flex items-center justify-center bg-brand-bg overflow-hidden"
    >
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-red/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Details (Col-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Tagline */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-red font-bold text-sm tracking-[0.2em] uppercase">
                Premium Rides • Unbeatable Deals
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-text-primary tracking-tighter leading-[0.95]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              Experience Luxury <br />
              <span className="text-brand-red">In Every Mile.</span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              className="mt-6 text-lg text-text-secondary max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The finest rental fleet in Ras Al Khaimah. Enjoy premium comfort, highly affordable luxury leasing, 
              impeccable customer service, and seamless, hassle-free WhatsApp booking.
            </motion.p>

            {/* Bullet Points */}
            <motion.div
              className="mt-6 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0" />
                  <span className="text-sm font-medium text-text-primary/90">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <button
                onClick={handleScrollToBooking}
                className="rounded-xl bg-brand-red px-8 py-4 font-bold text-white shadow-lg shadow-brand-red/15 transition-all duration-300 hover:bg-brand-red/90 hover:-translate-y-0.5"
              >
                Explore Fleet
              </button>
              <button
                onClick={handleDirectWhatsApp}
                className="flex items-center justify-center space-x-2 rounded-xl border border-brand-red/20 bg-white/70 px-8 py-4 font-bold text-brand-red hover:bg-brand-red/5 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="h-5 w-5 text-brand-gold fill-current" />
                <span>WhatsApp Booking</span>
              </button>
            </motion.div>
          </div>

          {/* Instant Booking Form on First Screen (Col-5) */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <BookingForm onSuccess={onSuccessBooking} />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          onClick={handleScrollToBooking}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-1">
            Explore Cars
          </span>
          <ArrowDown className="h-4 w-4 text-brand-red" />
        </motion.div>
      </div>
    </section>
  );
}
