/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Car, Menu, X, Phone } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/appData';

interface NavbarProps {
  onBookNowClick: () => void;
}

export default function Navbar({ onBookNowClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Special Offers', href: '#offers' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-navbar py-4 shadow-md'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center space-x-3 group"
              id="navbar-logo"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red text-brand-ivory transition-transform duration-300 group-hover:rotate-12">
                <Car className="h-5 w-5 text-brand-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-brand-red heading-luxury">
                  BEST RIDE
                </span>
                <span className="text-[9px] uppercase tracking-widest text-brand-gold -mt-1 font-medium">
                  Rent A Car • RAK
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-text-primary/95 transition-colors hover:text-brand-red duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="flex items-center space-x-2 text-sm font-semibold text-brand-red hover:text-brand-gold transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>{COMPANY_CONTACT.phoneFormatted}</span>
              </a>
              <button
                id="nav-book-now-btn"
                onClick={onBookNowClick}
                className="rounded-xl bg-brand-red px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-brand-red/90 hover:-translate-y-0.5 active:translate-y-0"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="p-2 text-brand-red rounded-lg hover:bg-brand-red/5 transition-colors"
                title="Call Best Ride"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-text-primary rounded-lg hover:bg-brand-red/5 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-brand-red" />
                ) : (
                  <Menu className="h-6 w-6 text-brand-red" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            className="fixed inset-0 z-30 lg:hidden bg-brand-bg/95 backdrop-blur-md pt-24 pb-8 px-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-bold text-text-primary border-b border-brand-red/10 pb-2 hover:text-brand-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col space-y-4">
              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="flex items-center justify-center space-x-3 rounded-xl border border-brand-red/20 py-3 text-brand-red font-bold transition-colors hover:bg-brand-red/5"
              >
                <Phone className="h-5 w-5" />
                <span>Call: {COMPANY_CONTACT.phoneFormatted}</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookNowClick();
                }}
                className="w-full rounded-xl bg-brand-red py-3.5 font-bold text-white shadow-lg shadow-brand-red/10 hover:bg-brand-red/90"
              >
                Book Your Ride Now
              </button>
              <div className="text-center text-xs text-text-secondary">
                {COMPANY_CONTACT.hours}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
