/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useForm } from 'react-hook-form';
import { Phone, MessageSquare, Clock, Mail, MapPin, Send, HelpCircle } from 'lucide-react';
import { COMPANY_CONTACT, VEHICLES } from '../data/appData';
import { EnquiryDetails } from '../types';
import { formatWhatsAppEnquiryMessage } from '../utils/security';

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnquiryDetails>({
    defaultValues: {
      vehicleId: '',
      message: '',
    },
  });

  const onSubmit = (data: EnquiryDetails) => {
    // Retrieve vehicle name if selected
    const selectedCar = VEHICLES.find((v) => v.id === data.vehicleId);
    const vehicleName = selectedCar ? `${selectedCar.name} (${selectedCar.year})` : undefined;

    // Securely format WhatsApp string
    const waMessage = formatWhatsAppEnquiryMessage(data, vehicleName);
    const waUrl = `https://api.whatsapp.com/send?phone=${COMPANY_CONTACT.whatsapp}&text=${waMessage}`;

    // Safely open redirection tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-brand-ivory relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary heading-luxury mt-2">
            Contact Best Ride Support
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto mt-4 rounded-full" />
          <p className="text-text-secondary mt-4">
            Have custom requirements or need a long-term corporate leasing offer? Fill out our quick enquiry form or call our support dispatch immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Quick Contact Info Panels (Col-5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-text-primary heading-luxury">
              Direct Support Actions
            </h3>

            {/* Quick Action buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="flex items-center justify-center space-x-2 rounded-xl bg-brand-red text-white font-bold py-4 text-sm shadow-md shadow-brand-red/10 hover:bg-brand-red/90 transition-all text-center"
              >
                <Phone className="h-4.5 w-4.5" />
                <span>Call Hotline</span>
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${COMPANY_CONTACT.whatsapp}&text=Hello%20Best%20Ride!%20I%20have%20an%20inquiry%20regarding%20car%20rentals.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 rounded-xl border border-brand-red/20 bg-white text-brand-red font-bold py-4 text-sm hover:bg-brand-red/5 transition-all text-center"
              >
                <MessageSquare className="h-4.5 w-4.5 fill-current text-brand-gold" />
                <span>WhatsApp Live</span>
              </a>
            </div>

            {/* Support Details Stack */}
            <div className="space-y-4 pt-6">
              {/* Box 1 */}
              <div className="glass-panel rounded-2xl p-5 border border-brand-red/5 flex items-start space-x-4">
                <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                    Call Center Support
                  </h4>
                  <p className="text-base font-bold text-text-primary mt-1">
                    {COMPANY_CONTACT.phoneFormatted}
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5">
                    Direct dial line for bookings and emergencies.
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="glass-panel rounded-2xl p-5 border border-brand-red/5 flex items-start space-x-4">
                <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                    Email Inquiries
                  </h4>
                  <p className="text-base font-bold text-text-primary mt-1">
                    {COMPANY_CONTACT.email}
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5">
                    We reply to business and commercial bids in 24 hours.
                  </p>
                </div>
              </div>

              {/* Box 3 */}
              <div className="glass-panel rounded-2xl p-5 border border-brand-red/5 flex items-start space-x-4">
                <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                    Availability & Hours
                  </h4>
                  <p className="text-base font-bold text-text-primary mt-1">
                    {COMPANY_CONTACT.hours}
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5">
                    Live road support active 24/7/365.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form (Col-7) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-brand-gold/20 shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-brand-red heading-luxury flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-brand-gold" />
                  Online Enquiry Form
                </h3>
                <p className="text-xs text-text-secondary mt-1">
                  Have a quick question? Message us below to launch an instant WhatsApp session with your inquiry.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-brand-red/10 bg-white/70 px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 outline-none focus:border-brand-gold transition-colors"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="text-xs text-brand-red mt-1 font-medium">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0558220893"
                      className="w-full rounded-xl border border-brand-red/10 bg-white/70 px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 outline-none focus:border-brand-gold transition-colors"
                      {...register('phone', {
                        required: 'Phone is required',
                        pattern: {
                          value: /^(?:\+971|00971|0)?(?:50|52|54|55|56|58|2|3|4|6|7|9)\d{7}$/,
                          message: 'Valid UAE contact number required',
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="text-xs text-brand-red mt-1 font-medium">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full rounded-xl border border-brand-red/10 bg-white/70 px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 outline-none focus:border-brand-gold transition-colors"
                      {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && (
                      <p className="text-xs text-brand-red mt-1 font-medium">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Vehicle Interest */}
                  <div>
                    <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1">
                      Vehicle of Interest
                    </label>
                    <select
                      className="w-full rounded-xl border border-brand-red/10 bg-white/70 px-4 py-2.5 text-sm text-text-primary outline-none focus:border-brand-gold transition-colors"
                      {...register('vehicleId')}
                    >
                      <option value="">General Inquiry (No Specific Car)</option>
                      {VEHICLES.map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Enquiry Details Message */}
                <div>
                  <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-1">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your requirements, duration, or budget here..."
                    className="w-full rounded-xl border border-brand-red/10 bg-white/70 px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 outline-none focus:border-brand-gold transition-colors resize-none"
                    {...register('message', { required: 'Message body cannot be empty' })}
                  />
                  {errors.message && (
                    <p className="text-xs text-brand-red mt-1 font-medium">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Enquiry Button */}
                <button
                  type="submit"
                  id="enquiry-form-submit-btn"
                  className="w-full flex items-center justify-center space-x-2 rounded-xl bg-brand-red py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-red/10 hover:bg-brand-red/90 transition-all"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
