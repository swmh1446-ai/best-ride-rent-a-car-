/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '../data/appData';

export default function FAQ() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-brand-ivory relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">
            Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary heading-luxury mt-2">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto mt-4 rounded-full" />
          <p className="text-text-secondary mt-4">
            Everything you need to know about renting a car in Ras Al Khaimah. Got a question not listed? Chat with us instantly on WhatsApp.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-brand-red/5 bg-white shadow-md overflow-hidden transition-all duration-300"
                id={`faq-item-${faq.id}`}
              >
                {/* Trigger Question Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left outline-none"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className="h-5 w-5 text-brand-red shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-text-primary heading-luxury">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`h-8 w-8 rounded-full bg-brand-red/5 flex items-center justify-center text-brand-red transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-brand-red text-white' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Animated Answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-brand-red/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
