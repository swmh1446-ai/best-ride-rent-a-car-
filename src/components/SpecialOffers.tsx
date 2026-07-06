/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Award } from 'lucide-react';

interface SpecialOffersProps {
  onBookNowClick: () => void;
}

export default function SpecialOffers({ onBookNowClick }: SpecialOffersProps) {
  // Target date: UAE National Day (December 2, 2026)
  const targetDate = new Date('2026-12-02T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Fallback: Rolling 3-day countdown if target date has passed
        const rollingDiff = (3 * 24 * 60 * 60 * 1000) - (now % (3 * 24 * 60 * 60 * 1000));
        setTimeLeft({
          days: Math.floor(rollingDiff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((rollingDiff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((rollingDiff / 1000 / 60) % 60),
          seconds: Math.floor((rollingDiff / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="offers" className="py-20 bg-brand-ivory relative overflow-hidden">
      {/* Golden Radial Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card Container */}
        <div className="bg-brand-red rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-brand-gold/30">
          
          {/* Subtle Islamic/Geometric/Arabesque background watermarks */}
          <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay bg-repeat bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800')" }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Promo text details (Col-7) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full w-max mx-auto lg:mx-0">
                <Sparkles className="h-4 w-4 text-brand-gold" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-ivory">
                  Exclusive Limited Celebration
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight heading-luxury">
                🇦🇪 UAE National Day Offer<br />
                <span className="text-brand-gold">Enjoy Up To 50% OFF</span>
              </h2>

              <p className="text-sm sm:text-base text-brand-ivory/80 max-w-xl mx-auto lg:mx-0">
                Celebrate with Best Ride. Rent any sedan or premium SUV for 3 days or more and unlock massive national discounts. Includes free premium delivery right to your door.
              </p>

              {/* Offer Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center space-x-2 bg-brand-ivory/10 px-4 py-2 rounded-xl">
                  <Calendar className="h-4 w-4 text-brand-gold" />
                  <span className="text-xs font-semibold">Dec 1 - Dec 5</span>
                </div>
                <div className="flex items-center space-x-2 bg-brand-ivory/10 px-4 py-2 rounded-xl">
                  <Award className="h-4 w-4 text-brand-gold" />
                  <span className="text-xs font-semibold">Comprehensive Cover Included</span>
                </div>
              </div>
            </div>

            {/* Countdown Widget (Col-5) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="glass-panel rounded-2xl p-6 w-full max-w-sm text-center border border-white/10 bg-white/5 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">
                  Offer Countdown
                </p>

                {/* Counter Grid */}
                <div className="grid grid-cols-4 gap-2.5 mb-6">
                  {/* Days */}
                  <div className="bg-black/25 rounded-xl p-3 border border-white/5">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-white">
                      {timeLeft.days}
                    </span>
                    <span className="text-[9px] uppercase font-bold text-brand-ivory/60 tracking-wider">
                      Days
                    </span>
                  </div>
                  {/* Hours */}
                  <div className="bg-black/25 rounded-xl p-3 border border-white/5">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-white">
                      {timeLeft.hours}
                    </span>
                    <span className="text-[9px] uppercase font-bold text-brand-ivory/60 tracking-wider">
                      Hrs
                    </span>
                  </div>
                  {/* Minutes */}
                  <div className="bg-black/25 rounded-xl p-3 border border-white/5">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-white">
                      {timeLeft.minutes}
                    </span>
                    <span className="text-[9px] uppercase font-bold text-brand-ivory/60 tracking-wider">
                      Mins
                    </span>
                  </div>
                  {/* Seconds */}
                  <div className="bg-black/25 rounded-xl p-3 border border-white/5">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-brand-gold animate-pulse">
                      {timeLeft.seconds}
                    </span>
                    <span className="text-[9px] uppercase font-bold text-brand-ivory/60 tracking-wider">
                      Secs
                    </span>
                  </div>
                </div>

                <button
                  onClick={onBookNowClick}
                  className="w-full rounded-xl bg-brand-gold hover:bg-brand-gold/90 text-text-primary py-3.5 font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-black/20"
                >
                  Book Golden Offer Now
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
