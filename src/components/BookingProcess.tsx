/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Car, Calendar, ClipboardCheck, MessageSquare, KeyRound } from 'lucide-react';

export default function BookingProcess() {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Car',
      desc: 'Browse our luxury collection of sedans, SUVs, and economy rentals and select your perfect ride.',
      icon: Car,
    },
    {
      step: '02',
      title: 'Select Dates',
      desc: 'Choose your pickup & return dates, times, and delivery location within Ras Al Khaimah.',
      icon: Calendar,
    },
    {
      step: '03',
      title: 'Confirm Booking',
      desc: 'Submit your details on our secure, encrypted client-side checkout form.',
      icon: ClipboardCheck,
    },
    {
      step: '04',
      title: 'WhatsApp Confirmation',
      desc: 'Our representative instantly validates details on WhatsApp and issues your digital contract.',
      icon: MessageSquare,
    },
    {
      step: '05',
      title: 'Drive Away',
      desc: 'We deliver your freshly sanitized car to your door. Complete paper signatures and drive away!',
      icon: KeyRound,
    },
  ];

  return (
    <section id="process" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background line accent */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-brand-red/5 -translate-y-1/2 hidden lg:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary heading-luxury mt-2">
            Seamless 5-Step Rental Journey
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto mt-4 rounded-full" />
          <p className="text-text-secondary mt-4">
            Renting a premium car in Ras Al Khaimah has never been simpler. Follow our straightforward timeline and hit the road.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {steps.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector arrow line for mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute bottom-[-24px] lg:bottom-auto lg:right-[-16px] lg:top-12 h-6 w-[2px] lg:h-[2px] lg:w-8 bg-brand-gold/30 shrink-0" />
                )}

                {/* Step circle */}
                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white border border-brand-red/10 shadow-lg group-hover:border-brand-gold transition-colors duration-300">
                  <div className="absolute -top-2 -left-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-red text-[11px] font-black text-white shadow-md">
                    {item.step}
                  </div>
                  <IconComp className="h-10 w-10 text-brand-red transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Text Content */}
                <h3 className="mt-6 text-base font-bold text-text-primary heading-luxury">
                  {item.title}
                </h3>
                
                <p className="mt-2 text-xs text-text-secondary leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
