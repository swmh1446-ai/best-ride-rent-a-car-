/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, X, MessageSquare, ExternalLink } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCars from './components/FeaturedCars';
import SpecialOffers from './components/SpecialOffers';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BookingProcess from './components/BookingProcess';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVehicleId, setSelectedVehicleId] = useState('');
  const [showRedirectBanner, setShowRedirectBanner] = useState(false);

  // Triggered when a car "Rent Now" is clicked.
  const handleSelectVehicle = (carId: string) => {
    setSelectedVehicleId(carId);
    
    // Find booking card in Hero and smooth scroll
    const bookingCard = document.getElementById('instant-booking-form-card');
    if (bookingCard) {
      const navbarOffset = 100;
      const elementPos = bookingCard.getBoundingClientRect().top;
      const offsetPos = elementPos + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth',
      });
    }
  };

  // Callback when a booking form submits successfully
  const handleSuccessBooking = () => {
    setShowRedirectBanner(true);
    // Auto fadeout redirect notification after 6 seconds
    setTimeout(() => {
      setShowRedirectBanner(false);
    }, 6000);
  };

  const handleScrollToBookingWidget = () => {
    const bookingCard = document.getElementById('instant-booking-form-card');
    if (bookingCard) {
      const navbarOffset = 100;
      const elementPos = bookingCard.getBoundingClientRect().top;
      const offsetPos = elementPos + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-bg text-text-primary overflow-x-hidden select-none selection:bg-brand-red selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen"
          >
            {/* Navigation Header */}
            <Navbar onBookNowClick={handleScrollToBookingWidget} />

            {/* Core Page Layout Sections */}
            <main className="flex-grow">
              {/* Hero & First Screen Booking Form */}
              <Hero onSuccessBooking={handleSuccessBooking} />

              {/* Vehicle Fleet Catalog */}
              <FeaturedCars onSelectVehicle={handleSelectVehicle} />

              {/* National Day Countdown Banner */}
              <SpecialOffers onBookNowClick={handleScrollToBookingWidget} />

              {/* Tailored Solutions & Services */}
              <Services />

              {/* Brand Value Strengths */}
              <WhyChooseUs />

              {/* Booking Process Timeline */}
              <BookingProcess />

              {/* Luxury Media Gallery */}
              <Gallery />

              {/* Star-Rated Testimonials */}
              <Testimonials />

              {/* Collapsible FAQ Panels */}
              <FAQ />

              {/* Address Map Directions */}
              <LocationSection />

              {/* Support & Online Contact Form */}
              <ContactSection />
            </main>

            {/* Premium Footer Links */}
            <Footer />

            {/* Sticky Floating Action Triggers */}
            <FloatingButtons />

            {/* Redirection Alert Banner */}
            <AnimatePresence>
              {showRedirectBanner && (
                <motion.div
                  id="redirect-alert-banner"
                  className="fixed top-24 right-4 sm:right-6 z-50 max-w-sm w-full bg-stone-900 text-white rounded-2xl shadow-2xl p-5 border border-brand-gold/30 flex flex-col space-y-3 custom-alert"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-3">
                      <div className="h-9 w-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-gold heading-luxury">
                          Redirecting to WhatsApp...
                        </h4>
                        <p className="text-[11px] text-brand-ivory/70 mt-1 leading-normal">
                          We are securely launching WhatsApp to complete your Best Ride booking request. Our agent will verify your dates instantly.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowRedirectBanner(false)}
                      className="p-1 rounded bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                      aria-label="Dismiss Alert"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex justify-end pt-1">
                    <a
                      href="https://wa.me/971558220893"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-brand-gold hover:underline"
                    >
                      <MessageSquare className="h-3.5 w-3.5 fill-current" />
                      <span>Click if not redirected</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
