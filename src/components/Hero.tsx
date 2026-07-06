/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle, ArrowDown } from 'lucide-react';
import BookingForm from './BookingForm';
import { COMPANY_CONTACT } from '../data/appData';

interface HeroProps {
  onSuccessBooking: () => void;
}

export default function Hero({ onSuccessBooking }: HeroProps) {
  const features = [
    'Daily & Monthly Rentals',
    'Corporate Leasing',
    'Free Delivery',
    'Fully Insured Cars',
    '24/7 Customer Support',
  ];

  const handleScrollToBooking = () => {
    const element = document.getElementById('instant-booking-form-card');
    if (element) {
      const offset = 100;
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

  // Staggered variants for feature pills
  const pillVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 lg:py-24"
    >
      {/* Background Image Wrapper with Bleed for cinematic Ken Burns movement */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute -inset-6 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1920')`,
          }}
          animate={{
            scale: [1, 1.08, 1],
            x: ['0%', '1.5%', '0%'],
            y: ['0%', '-1%', '0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Dark Transparent Overlay (40%) to maximize text readability */}
        <div className="absolute inset-0 bg-neutral-950/40 z-10" />
        
        {/* Subtle bottom gradient to blend into the light cream background of the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent z-15" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Hero Details (Col-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            
            {/* Small Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white text-xs font-semibold tracking-wide shadow-md mb-6"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>🚗</span>
              <span className="text-brand-ivory/90 uppercase tracking-widest text-[10px] font-bold">
                Best Ride Rent A Car • Ras Al Khaimah
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-[1.05] sm:leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              Drive with <span className="text-brand-red drop-shadow-[0_2px_10px_rgba(179,54,54,0.45)]">Confidence</span>.<br />
              Rent with <span className="text-brand-red drop-shadow-[0_2px_10px_rgba(179,54,54,0.45)]">Comfort</span>.
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-6 text-sm sm:text-base text-brand-ivory/90 max-w-lg leading-relaxed text-center lg:text-left"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Best Ride Rent A Car offers premium, affordable, and fully maintained vehicles for daily, weekly, and monthly rentals. Enjoy free delivery, corporate leasing, and instant WhatsApp booking across Ras Al Khaimah.
            </motion.p>

            {/* Feature Pills (Fade-in one by one) */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start max-w-xl">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  custom={i}
                  variants={pillVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center space-x-1.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white text-[11px] font-semibold"
                >
                  <span className="text-brand-gold font-extrabold text-xs">✓</span>
                  <span className="text-brand-ivory/90">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons with Premium Hover Effects */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <motion.button
                onClick={handleScrollToBooking}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(179,54,54,0.45)" }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-brand-red px-8 py-4 font-bold text-white shadow-lg shadow-brand-red/20 transition-all duration-300 hover:bg-brand-red/95 cursor-pointer border-none text-center"
              >
                Book Now
              </motion.button>
              
              <motion.button
                onClick={handleDirectWhatsApp}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 font-bold text-white transition-all duration-300 shadow-sm cursor-pointer"
              >
                <MessageCircle className="h-5 w-5 text-brand-gold fill-current" />
                <span>WhatsApp Booking</span>
              </motion.button>
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
          <ArrowDown className="h-4 w-4 text-brand-red animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}

