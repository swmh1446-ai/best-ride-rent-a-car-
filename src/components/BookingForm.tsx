/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, User, Phone, Mail, MessageSquare, Car, ExternalLink } from 'lucide-react';
import { VEHICLES, COMPANY_CONTACT } from '../data/appData';
import { BookingDetails } from '../types';
import { formatWhatsAppBookingMessage } from '../utils/security';

interface BookingFormProps {
  selectedVehicleId?: string;
  onSuccess?: () => void;
}

export default function BookingForm({ selectedVehicleId = '', onSuccess }: BookingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingDetails>({
    defaultValues: {
      vehicleId: selectedVehicleId,
      pickupLocation: 'Ras Al Khaimah',
      message: '',
    },
  });

  const onSubmit = (data: BookingDetails) => {
    // Retrieve vehicle name
    const selectedCar = VEHICLES.find((v) => v.id === data.vehicleId);
    const vehicleName = selectedCar ? `${selectedCar.name} (${selectedCar.year})` : 'Any Car';

    // Format WhatsApp query
    const waMessage = formatWhatsAppBookingMessage(data, vehicleName);
    const waUrl = `https://api.whatsapp.com/send?phone=${COMPANY_CONTACT.whatsapp}&text=${waMessage}`;

    // Securely open in a new tab without exposing window object (Referrer Policy)
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // Trigger success callback if supplied
    if (onSuccess) {
      onSuccess();
    }
    reset();
  };

  return (
    <div
      id="instant-booking-form-card"
      className="bg-white/80 backdrop-blur-xl border border-white rounded-[32px] p-6 sm:p-8 shadow-2xl shadow-black/10 w-full"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold tracking-tight text-brand-red heading-luxury flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-gold animate-pulse" />
          Instant Booking Engine
        </h3>
        <p className="text-xs text-text-secondary mt-1 uppercase tracking-widest font-semibold">
          Select dates & vehicle. Get an instant quote via WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-[10px] font-bold uppercase text-brand-red tracking-wider mb-1 flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" /> Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full bg-brand-bg border border-brand-red/5 rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all"
            {...register('name', {
              required: 'Full name is required',
              minLength: { value: 3, message: 'Name must be at least 3 characters' },
            })}
          />
          {errors.name && (
            <p className="text-xs text-brand-red mt-1 font-medium">{errors.name.message}</p>
          )}
        </div>

        {/* Contact Group (Phone + Email) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold uppercase text-brand-red tracking-wider mb-1 flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" /> Phone Number
            </label>
            <input
              type="tel"
              placeholder="e.g. 0558220893"
              className="w-full bg-brand-bg border border-brand-red/5 rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^(?:\+971|00971|0)?(?:50|52|54|55|56|58|2|3|4|6|7|9)\d{7}$/,
                  message: 'Enter a valid UAE contact number',
                },
              })}
            />
            {errors.phone && (
              <p className="text-xs text-brand-red mt-1 font-medium">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase text-brand-red tracking-wider mb-1 flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" /> Email
            </label>
            <input
              type="email"
              placeholder="yourname@gmail.com"
              className="w-full bg-brand-bg border border-brand-red/5 rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all"
              {...register('email', {
                required: 'Email address is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <p className="text-xs text-brand-red mt-1 font-medium">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Pickup Location & Select Vehicle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold uppercase text-brand-red tracking-wider mb-1 flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Pickup Location
            </label>
            <select
              className="w-full bg-brand-bg border border-brand-red/5 rounded-xl px-4 py-2.5 text-sm text-text-primary outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all appearance-none"
              {...register('pickupLocation', { required: 'Pickup location is required' })}
            >
              <option value="Ras Al Khaimah">Ras Al Khaimah (Free Delivery)</option>
              <option value="RAK Airport">RAK Airport</option>
              <option value="Nakheel, RAK">Nakheel, RAK</option>
              <option value="Al Hamra Mall, RAK">Al Hamra Mall, RAK</option>
              <option value="Jebel Jais, RAK">Jebel Jais, RAK</option>
              <option value="Dubai Airport (DXB)">Dubai Airport (DXB)</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase text-brand-red tracking-wider mb-1 flex items-center gap-1.5">
              <Car className="h-3.5 w-3.5" /> Select Vehicle
            </label>
            <select
              className="w-full bg-brand-bg border border-brand-red/5 rounded-xl px-4 py-2.5 text-sm text-text-primary outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all appearance-none"
              {...register('vehicleId', { required: 'Please select a car' })}
            >
              <option value="">-- Choose Car --</option>
              {VEHICLES.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.name} (AED {vehicle.dailyPrice}/day)
                </option>
              ))}
            </select>
            {errors.vehicleId && (
              <p className="text-xs text-brand-red mt-1 font-medium">{errors.vehicleId.message}</p>
            )}
          </div>
        </div>

        {/* Pickup Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold uppercase text-brand-red tracking-wider mb-1 flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> Pickup Date
            </label>
            <input
              type="date"
              className="w-full bg-brand-bg border border-brand-red/5 rounded-xl px-4 py-2.5 text-sm text-text-primary outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all"
              {...register('pickupDate', { required: 'Pickup date is required' })}
            />
            {errors.pickupDate && (
              <p className="text-xs text-brand-red mt-1 font-medium">{errors.pickupDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase text-brand-red tracking-wider mb-1 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> Pickup Time
            </label>
            <input
              type="time"
              className="w-full bg-brand-bg border border-brand-red/5 rounded-xl px-4 py-2.5 text-sm text-text-primary outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all"
              {...register('pickupTime', { required: 'Pickup time is required' })}
            />
            {errors.pickupTime && (
              <p className="text-xs text-brand-red mt-1 font-medium">{errors.pickupTime.message}</p>
            )}
          </div>
        </div>

        {/* Return Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold uppercase text-brand-red tracking-wider mb-1 flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> Return Date
            </label>
            <input
              type="date"
              className="w-full bg-brand-bg border border-brand-red/5 rounded-xl px-4 py-2.5 text-sm text-text-primary outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all"
              {...register('returnDate', { required: 'Return date is required' })}
            />
            {errors.returnDate && (
              <p className="text-xs text-brand-red mt-1 font-medium">{errors.returnDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase text-brand-red tracking-wider mb-1 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> Return Time
            </label>
            <input
              type="time"
              className="w-full bg-brand-bg border border-brand-red/5 rounded-xl px-4 py-2.5 text-sm text-text-primary outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all"
              {...register('returnTime', { required: 'Return time is required' })}
            />
            {errors.returnTime && (
              <p className="text-xs text-brand-red mt-1 font-medium">{errors.returnTime.message}</p>
            )}
          </div>
        </div>

        {/* Special Instructions Message */}
        <div>
          <label className="block text-[10px] font-bold uppercase text-brand-red tracking-wider mb-1 flex items-center gap-1.5">
            <MessageSquare className="h-3.5 w-3.5" /> Message / Requirements
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Need child safety seat, delivery to hotel room..."
            className="w-full bg-brand-bg border border-brand-red/5 rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red transition-all resize-none"
            {...register('message')}
          />
        </div>

        {/* Submit Booking button */}
        <button
          type="submit"
          id="booking-form-submit-btn"
          className="w-full bg-brand-red text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-brand-red/90 shadow-xl shadow-brand-red/20 transition-all mt-4 flex items-center justify-center space-x-2 cursor-pointer border-none"
        >
          <span>Reserve Now via WhatsApp</span>
          <ExternalLink className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-brand-red/10 flex items-center justify-center gap-6 opacity-60">
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold">4.9/5</span>
          <span className="text-[9px] uppercase tracking-tighter">Rating</span>
        </div>
        <div className="w-px h-6 bg-brand-red/20"></div>
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold">100%</span>
          <span className="text-[9px] uppercase tracking-tighter">Insured</span>
        </div>
        <div className="w-px h-6 bg-brand-red/20"></div>
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold">24/7</span>
          <span className="text-[9px] uppercase tracking-tighter">Support</span>
        </div>
      </div>
    </div>
  );
}
