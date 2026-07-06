/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Percent, ShieldCheck, Truck, Award, Zap, Eye, HelpCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: 'Brand New Cars',
      desc: 'Our fleet comprises the latest models, maintaining pristine cleanliness and superb mechanical performance.',
      icon: Sparkles,
    },
    {
      title: 'Affordable Prices',
      desc: 'We offer some of the most competitive rates in the UAE. Quality driving experiences accessible to everyone.',
      icon: Percent,
    },
    {
      title: 'Fully Insured',
      desc: 'Drive with ultimate peace of mind. Every single rent includes comprehensive insurance coverage.',
      icon: ShieldCheck,
    },
    {
      title: 'Free Delivery',
      desc: 'Free vehicle dropoff and collection anywhere inside Ras Al Khaimah boundaries. Right at your doorstep.',
      icon: Truck,
    },
    {
      title: 'Professional Service',
      desc: 'Highly trained reservation agents and friendly drivers guarantee a gold-standard service from start to finish.',
      icon: Award,
    },
    {
      title: 'Fast Booking',
      desc: 'Zero complex paperwork or administrative delays. Initiate and confirm your entire booking in 5 minutes via WhatsApp.',
      icon: Zap,
    },
    {
      title: 'No Hidden Charges',
      desc: 'Transparent pricing with completely documented agreements. Honest service with zero unexpected add-on costs.',
      icon: Eye,
    },
    {
      title: '24/7 Support',
      desc: 'Emergency assistance, roadside breakdown aid, and customer care are available around the clock to assist you.',
      icon: HelpCircle,
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-brand-ivory relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase (Col-5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px] border border-brand-gold/20">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000"
                alt="Luxury Car Steering Wheel"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Glass Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-red/90 via-black/20 to-transparent" />
              
              {/* Overlay Premium Callout */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block mb-2">
                  Commitment to Quality
                </span>
                <h3 className="text-2xl font-bold tracking-tight heading-luxury mb-2">
                  First Class Experience, Economy Rates
                </h3>
                <p className="text-xs text-brand-ivory/80 leading-relaxed">
                  Best Ride is founded on the values of absolute trust, immaculate service, and a modern fleet designed to cater to tourists, corporate offices, and local families.
                </p>
              </div>
            </div>
          </div>

          {/* Value Propositions Grid (Col-7) */}
          <div className="lg:col-span-7">
            <div className="mb-10 text-center lg:text-left">
              <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">
                Why Best Ride?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary heading-luxury mt-2">
                Uncompromising Standards in Car Rental
              </h2>
              <div className="h-1 w-20 bg-brand-red mt-4 rounded-full mx-auto lg:mx-0" />
            </div>

            {/* Grid of Reasons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="flex space-x-3"
                  >
                    <div className="h-9 w-9 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                      <IconComp className="h-5 w-5 text-brand-red" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text-primary heading-luxury">
                        {item.title}
                      </h4>
                      <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
