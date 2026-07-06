/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Car } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      id="loading-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-bg text-text-primary"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={onComplete}
    >
      <div className="flex flex-col items-center">
        {/* Animated Emblem */}
        <motion.div
          className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-red text-brand-ivory shadow-xl"
          initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Car className="h-12 w-12 text-brand-gold" />
          <motion.div
            className="absolute -inset-1 rounded-3xl border border-brand-gold/30"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Brand Typography */}
        <motion.h1
          className="mt-6 text-3xl font-bold tracking-tight text-brand-red heading-luxury"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          BEST RIDE
        </motion.h1>

        <motion.p
          className="mt-2 text-sm uppercase tracking-widest text-brand-gold/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Ras Al Khaimah, UAE
        </motion.p>

        {/* Luxury Loading Line */}
        <div className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-brand-red/10">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-red via-brand-gold to-brand-red"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
