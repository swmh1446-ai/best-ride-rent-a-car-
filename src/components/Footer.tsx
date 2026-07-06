/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowUp, Shield, HelpCircle, X } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/appData';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-brand-red text-white pt-16 pb-8 relative overflow-hidden">
      {/* Visual background pattern accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-red to-brand-gold" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-12 mb-10">
          
          {/* Brand Directory Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-red">
                <Car className="h-5 w-5 text-brand-red" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white heading-luxury">
                  BEST RIDE
                </span>
                <span className="text-[9px] uppercase tracking-widest text-brand-gold -mt-1 font-bold">
                  Rent A Car • RAK
                </span>
              </div>
            </div>
            <p className="text-xs text-brand-ivory/70 leading-relaxed pt-2">
              Best Ride Rent A Car provides unmatched luxury, comfort, and economy rental packages in Ras Al Khaimah, UAE. We deliver pristine performance and value on every drive.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-red transition-all" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-red transition-all" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-red transition-all" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold heading-luxury mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-brand-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#fleet" onClick={(e) => handleLinkClick(e, '#fleet')} className="hover:text-brand-gold transition-colors">
                  Featured Fleet
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-brand-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#offers" onClick={(e) => handleLinkClick(e, '#offers')} className="hover:text-brand-gold transition-colors">
                  Special Deals
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => handleLinkClick(e, '#testimonials')} className="hover:text-brand-gold transition-colors">
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* About & Policies Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold heading-luxury mb-4">
              About & Trust
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#why-choose-us" onClick={(e) => handleLinkClick(e, '#why-choose-us')} className="hover:text-brand-gold transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleLinkClick(e, '#process')} className="hover:text-brand-gold transition-colors">
                  Booking Process
                </a>
              </li>
              <li>
                <button onClick={() => setModalType('privacy')} className="hover:text-brand-gold transition-colors outline-none cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setModalType('terms')} className="hover:text-brand-gold transition-colors outline-none cursor-pointer">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')} className="hover:text-brand-gold transition-colors">
                  General FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Direct info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold heading-luxury mb-2">
              Showroom Location
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-brand-ivory/80 leading-relaxed">
                  Nakheel, Al Muntasir Road, Behind Aster Pharmacy, Ras Al Khaimah, UAE
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="h-4.5 w-4.5 text-brand-gold shrink-0" />
                <span className="text-brand-ivory/80">{COMPANY_CONTACT.phoneFormatted}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="h-4.5 w-4.5 text-brand-gold shrink-0" />
                <span className="text-brand-ivory/80">{COMPANY_CONTACT.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Base Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-brand-ivory/60">
          <p>© 2026 Best Ride Rent A Car. All Rights Reserved. Ras Al Khaimah, UAE.</p>
          <button
            onClick={handleScrollToTop}
            className="mt-4 sm:mt-0 inline-flex items-center space-x-1.5 bg-white/10 hover:bg-brand-gold hover:text-brand-red px-3.5 py-2 rounded-xl transition-all outline-none"
          >
            <span>Back To Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Terms & Privacy Modals */}
      <AnimatePresence>
        {modalType !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-brand-bg rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-text-primary shadow-2xl relative border border-brand-red/10 max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Icon */}
              <button
                onClick={() => setModalType(null)}
                className="absolute top-5 right-5 p-2 bg-brand-red/5 hover:bg-brand-red/10 text-brand-red rounded-full transition-colors"
                aria-label="Close Modal"
              >
                <X className="h-5 w-5" />
              </button>

              {modalType === 'privacy' ? (
                <div>
                  <h3 className="text-2xl font-bold text-brand-red heading-luxury flex items-center gap-2 mb-4">
                    <Shield className="h-6 w-6 text-brand-gold" />
                    Privacy Policy
                  </h3>
                  <div className="text-xs text-text-secondary space-y-3 leading-relaxed">
                    <p className="font-semibold text-text-primary">Last Updated: July 2026</p>
                    <p>
                      At Best Ride Rent A Car, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Best Ride Rent A Car and how we use it.
                    </p>
                    <p className="font-bold text-text-primary">1. Consent</p>
                    <p>
                      By using our website, you hereby consent to our Privacy Policy and agree to its terms. All communications and booking details provided via our client-side forms are transmitted securely via encryption to client-side messengers (WhatsApp) and are not retained on our public servers.
                    </p>
                    <p className="font-bold text-text-primary">2. Information We Collect</p>
                    <p>
                      The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. These details typically include your name, contact phone, pickup location, and email details.
                    </p>
                    <p>
                      Your data is utilized solely for facilitating the car rental service delivery, processing legal contracts, and ensuring compliance with the road transport regulations of the Ras Al Khaimah Transport Authority and UAE law.
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold text-brand-red heading-luxury flex items-center gap-2 mb-4">
                    <HelpCircle className="h-6 w-6 text-brand-gold" />
                    Terms & Conditions
                  </h3>
                  <div className="text-xs text-text-secondary space-y-3 leading-relaxed max-h-[50vh] overflow-y-auto pr-2">
                    <p className="font-semibold text-text-primary">Last Updated: July 2026</p>
                    <p>
                      Welcome to Best Ride Rent A Car. These terms and conditions outline the rules and regulations for the use of Best Ride's Car Rental services in Ras Al Khaimah, UAE.
                    </p>
                    <p className="font-bold text-text-primary">1. Rental Requirements</p>
                    <p>
                      To rent a vehicle from Best Ride, UAE residents must present a valid Emirates ID and a valid UAE Driving License. International tourists must present a passport with tourist visa stamp, a home country driving license, and a valid International Driving Permit (IDP). Minimum age of rental is 21 years old.
                    </p>
                    <p className="font-bold text-text-primary">2. Traffic Fines, Salik Tolls, & Fuel</p>
                    <p>
                      The renter is responsible for all traffic fines, parking fines, and toll fees (Salik) accumulated during the rental period. An administrative charge may apply for fine processing. Vehicles are delivered with a specific fuel level and must be returned with the same fuel level, otherwise refueling charges will apply.
                    </p>
                    <p className="font-bold text-text-primary">3. Insurance & Accidents</p>
                    <p>
                      All our vehicles include comprehensive insurance. In the event of an accident, the renter must obtain a police report immediately. Without an official police report, the comprehensive insurance becomes invalid, and the renter will be fully liable for all repair expenses and vehicle downtime.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
