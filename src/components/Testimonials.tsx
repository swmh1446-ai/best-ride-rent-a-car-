/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/appData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-bg relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary heading-luxury mt-2">
            Trusted by Thousands of Drivers
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto mt-4 rounded-full" />
          <p className="text-text-secondary mt-4">
            Do not just take our word for it. Read what our international tourists, local corporations, and valued expat residents have to say about Best Ride.
          </p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-brand-red/5 luxury-shadow luxury-hover-lift flex flex-col justify-between"
              id={`testimonial-card-${testimonial.id}`}
            >
              <div>
                {/* Star rating and Quote Icon */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-brand-gold text-brand-gold"
                      />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-brand-red/20" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-text-primary/90 italic leading-relaxed mb-6">
                  "{testimonial.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex justify-between items-center pt-4 border-t border-brand-red/10 mt-auto text-xs">
                <div>
                  <h4 className="font-bold text-text-primary heading-luxury">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] text-text-secondary font-medium">
                    {testimonial.role}
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-brand-gold bg-brand-red/5 px-2 py-0.5 rounded">
                  {testimonial.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
