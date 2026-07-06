/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookingDetails, EnquiryDetails } from '../types';

/**
 * Escapes special HTML characters to prevent XSS attacks.
 */
export function sanitizeInput(value: string): string {
  if (!value) return '';
  return value
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validates UAE mobile numbers (should be 9 or 10 digits, usually starting with 05 or +9715)
 */
export function isValidUAENumber(phone: string): boolean {
  const cleanPhone = phone.replace(/[\s\-\+]/g, '');
  // General check: starts with 9715 or 05, has correct length
  return /^(971|0)?5[024568]\d{7}$/.test(cleanPhone);
}

/**
 * Formats standard booking details into a beautiful, WhatsApp-ready message.
 */
export function formatWhatsAppBookingMessage(details: BookingDetails, vehicleName: string): string {
  const name = sanitizeInput(details.name);
  const phone = sanitizeInput(details.phone);
  const email = sanitizeInput(details.email);
  const pickupLoc = sanitizeInput(details.pickupLocation);
  const pickupD = sanitizeInput(details.pickupDate);
  const pickupT = sanitizeInput(details.pickupTime);
  const returnD = sanitizeInput(details.returnDate);
  const returnT = sanitizeInput(details.returnTime);
  const msg = sanitizeInput(details.message || 'None');

  const text = `*BEST RIDE RENT A CAR - BOOKING REQUEST*\n` +
    `----------------------------------------\n` +
    `👤 *Customer Name:* ${name}\n` +
    `📞 *Phone Number:* ${phone}\n` +
    `📧 *Email Address:* ${email}\n` +
    `🚗 *Selected Vehicle:* ${vehicleName}\n` +
    `📍 *Pickup Location:* ${pickupLoc}\n` +
    `📅 *Pickup Date/Time:* ${pickupD} at ${pickupT}\n` +
    `📅 *Return Date/Time:* ${returnD} at ${returnT}\n` +
    `💬 *Special Message:* ${msg}\n\n` +
    `_Generated via Best Ride Website_`;

  return encodeURIComponent(text);
}

/**
 * Formats standard enquiry details into a beautiful, WhatsApp-ready message.
 */
export function formatWhatsAppEnquiryMessage(details: EnquiryDetails, vehicleName?: string): string {
  const name = sanitizeInput(details.name);
  const phone = sanitizeInput(details.phone);
  const email = sanitizeInput(details.email);
  const msg = sanitizeInput(details.message);
  const vehicle = vehicleName ? sanitizeInput(vehicleName) : 'General Inquiry';

  const text = `*BEST RIDE RENT A CAR - ONLINE ENQUIRY*\n` +
    `----------------------------------------\n` +
    `👤 *Customer Name:* ${name}\n` +
    `📞 *Phone Number:* ${phone}\n` +
    `📧 *Email Address:* ${email}\n` +
    `🚗 *Vehicle Interest:* ${vehicle}\n` +
    `💬 *Enquiry details:* ${msg}\n\n` +
    `_Generated via Best Ride Website_`;

  return encodeURIComponent(text);
}
