/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/appData';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleWhatsAppClick = () => {
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
    <div
      id="floating-action-triggers"
      className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3"
    >
      <AnimatePresence>
        {/* Back To Top Button */}
        {showScrollTop && (
          <motion.button
            onClick={handleScrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-red border border-brand-red/10 shadow-lg hover:border-brand-gold hover:text-brand-gold transition-colors outline-none cursor-pointer"
            aria-label="Scroll to top"
            title="Scroll to Top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Call Button */}
      <motion.a
        href={`tel:${COMPANY_CONTACT.phone}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-text-primary shadow-lg hover:bg-brand-gold/90 transition-colors"
        aria-label="Call Best Ride Hotline"
        title="Call Hotline"
      >
        <Phone className="h-5 w-5 fill-current" />
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl hover:bg-emerald-700 transition-colors border border-emerald-500/20"
        aria-label="Chat with Best Ride on WhatsApp"
        title="WhatsApp Live"
      >
        <MessageSquare className="h-6 w-6 fill-current text-white" />
      </motion.button>
    </div>
  );
}
