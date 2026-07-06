/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import BookingForm from './BookingForm';

interface HeroProps {
  onSuccessBooking: () => void;
}

export default function Hero({ onSuccessBooking }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16 flex items-center justify-center bg-brand-bg overflow-hidden"
    >
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-red/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center">
        {/* Instant Booking Form on First Screen */}
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <BookingForm onSuccess={onSuccessBooking} />
        </motion.div>
      </div>
    </section>
  );
}
