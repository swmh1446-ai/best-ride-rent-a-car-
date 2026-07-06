/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Mail, Clock, Compass } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/appData';

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-brand-bg relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">
            Headquarters
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary heading-luxury mt-2">
            Visit Our Ras Al Khaimah Office
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto mt-4 rounded-full" />
          <p className="text-text-secondary mt-4">
            Located in the central hub of Nakheel, our showroom is easily accessible with convenient customer parking. Stop by or request free doorstep delivery anywhere.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Embed Container (Col-7) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-xl border border-brand-red/10 min-h-[350px] relative">
            <iframe
              src={COMPANY_CONTACT.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Best Ride Location Map"
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Details Panel (Col-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-brand-red/5 p-8 rounded-2xl shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-text-primary heading-luxury flex items-center gap-2 mb-6">
                <Compass className="h-5 w-5 text-brand-red" />
                Physical Directions
              </h3>

              <div className="space-y-5 text-sm">
                {/* Address block */}
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-text-primary">Best Ride Rent A Car</h4>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      Al Muntasir Road, Nakheel<br />
                      Behind Aster Pharmacy<br />
                      Opposite Day To Day Supermarket<br />
                      Ras Al Khaimah, United Arab Emirates
                    </p>
                  </div>
                </div>

                {/* Hours Block */}
                <div className="flex items-start space-x-3 border-t border-brand-red/5 pt-4">
                  <Clock className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-text-primary">Operational Hours</h4>
                    <p className="text-xs text-text-secondary mt-1">
                      {COMPANY_CONTACT.hours} (Including Holidays)
                    </p>
                  </div>
                </div>

                {/* Direct Contact Phone */}
                <div className="flex items-start space-x-3 border-t border-brand-red/5 pt-4">
                  <Phone className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-text-primary">Hotline Booking</h4>
                    <p className="text-xs text-text-secondary mt-1">
                      {COMPANY_CONTACT.phoneFormatted}
                    </p>
                  </div>
                </div>

                {/* Email Support */}
                <div className="flex items-start space-x-3 border-t border-brand-red/5 pt-4">
                  <Mail className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-text-primary">Email Support</h4>
                    <p className="text-xs text-text-secondary mt-1">
                      {COMPANY_CONTACT.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA action link */}
            <div className="mt-8 pt-6 border-t border-brand-red/10">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=25.7930105,55.9554407`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 rounded-xl bg-brand-red py-3 text-sm font-bold text-white hover:bg-brand-red/90 transition-all text-center"
              >
                <span>Navigate on Google Maps</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
