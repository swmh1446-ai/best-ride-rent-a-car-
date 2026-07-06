/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Clock, Calendar, CalendarDays, Briefcase, Sparkles, Plane, MapPin, Headphones } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Daily Rental',
      desc: 'Perfect for short trips, business meetings, or day-to-day personal commuting. Highly competitive rates.',
      icon: Clock,
    },
    {
      title: 'Weekly Rental',
      desc: 'Enjoy generous weekly discounts. Drive your chosen car with absolute ease and comprehensive insurance.',
      icon: Calendar,
    },
    {
      title: 'Monthly Rental',
      desc: 'Our most value-packed offering. Zero maintenance stress, lowered rates, and complete corporate-tier support.',
      icon: CalendarDays,
    },
    {
      title: 'Corporate Leasing',
      desc: 'Custom business packages for corporate fleets. Includes routine servicing, tire replacements, and billing setups.',
      icon: Briefcase,
    },
    {
      title: 'Luxury Car Rental',
      desc: 'Make a powerful statement with our high-end luxury vehicles, ideal for special occasions or mountain road trips.',
      icon: Sparkles,
    },
    {
      title: 'Airport Pickup',
      desc: 'Arriving at RAK Airport or Dubai DXB? We will coordinate delivery to have the car waiting as soon as you step out.',
      icon: Plane,
    },
    {
      title: 'Free Delivery',
      desc: 'Free, seamless delivery and collection of your vehicle anywhere in Ras Al Khaimah. Absolute zero hidden fees.',
      icon: MapPin,
    },
    {
      title: '24/7 Customer Support',
      desc: 'Our dedicated WhatsApp and call dispatch is available around the clock to support you with emergency road aid.',
      icon: Headphones,
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-bg relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary heading-luxury mt-2">
            Tailored Rental Solutions
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto mt-4 rounded-full" />
          <p className="text-text-secondary mt-4">
            We provide comprehensive car rental services designed to meet every single transport requirement, backed by world-class safety and premium support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, index) => {
            const IconComponent = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="bg-[#FFFDF7]/80 border border-white p-6 rounded-[24px] shadow-xl shadow-black/5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1 group"
              >
                <div>
                  {/* Icon Emblem */}
                  <div className="h-12 w-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-brand-red group-hover:text-white shadow-sm">
                    <IconComponent className="h-6 w-6 text-brand-red group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-base font-bold text-text-primary heading-luxury mb-2">
                    {svc.title}
                  </h3>
                  
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
