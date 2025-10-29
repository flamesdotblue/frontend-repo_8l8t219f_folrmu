import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Phone, Mail, MapPin } from 'lucide-react';

const options = [
  'Haircut & Styling',
  'Color / Highlights',
  'Keratin / Smoothening',
  'Facial / Skincare',
  'Makeup Session',
  'Spa & Massage',
  'Nail Care',
];

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: options[0], date: '', time: '' });
  const [success, setSuccess] = useState(false);

  const isValid = useMemo(() => {
    return form.name && form.phone && form.service && form.date && form.time;
  }, [form]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  }

  return (
    <section id="booking" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-neutral-200/60 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6"
          >
            <h3 className="text-2xl font-semibold">Reserve Your Slot</h3>
            <p className="mt-1 text-neutral-600 dark:text-neutral-300">We’ll confirm by call or SMS promptly.</p>
            <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Full Name</label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Phone</label>
                <input
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="(555) 555-5555"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Service</label>
                <select
                  className="mt-2 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  {options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-neutral-600 dark:text-neutral-300 inline-flex items-center gap-2"><Calendar className="h-4 w-4"/> Date</label>
                <input
                  type="date"
                  className="mt-2 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm text-neutral-600 dark:text-neutral-300 inline-flex items-center gap-2"><Clock className="h-4 w-4"/> Time</label>
                <input
                  type="time"
                  className="mt-2 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`w-full rounded-xl px-5 py-3 text-sm font-medium transition shadow-lg ${
                    isValid
                      ? 'bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white hover:scale-[1.01] active:scale-[0.99]'
                      : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-500 cursor-not-allowed'
                  }`}
                >
                  Book Appointment
                </button>
                {success && (
                  <div className="mt-3 rounded-xl border border-emerald-300/40 bg-emerald-50/60 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-4 py-3">
                    Thank you! Your request has been received. We will contact you shortly to confirm.
                  </div>
                )}
              </div>
            </form>
          </motion.div>

          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-neutral-200/60 dark:border-neutral-800/80 bg-gradient-to-br from-white/80 to-white/40 dark:from-neutral-900/60 dark:to-neutral-900/40 backdrop-blur p-6"
          >
            <h3 className="text-2xl font-semibold">Visit & Connect</h3>
            <p className="mt-1 text-neutral-600 dark:text-neutral-300">We’re here to make you feel extraordinary.</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rose-500 mt-1"/>
                <div>
                  <div className="font-medium">Luxe Salon, Downtown</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">123 Glam Ave, Suite 21, Your City</div>
                </div>
              </div>
              <a href="tel:+15555555555" className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-rose-500"/>
                <span className="text-sm group-hover:underline">+1 (555) 555-5555</span>
              </a>
              <a href="mailto:hello@luxesalon.com" className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-rose-500"/>
                <span className="text-sm group-hover:underline">hello@luxesalon.com</span>
              </a>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
                <div className="text-xs text-neutral-500">Mon - Fri</div>
                <div className="font-medium">10:00 AM - 8:00 PM</div>
              </div>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
                <div className="text-xs text-neutral-500">Sat - Sun</div>
                <div className="font-medium">10:00 AM - 6:00 PM</div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl overflow-hidden">
              <iframe
                title="map"
                className="w-full h-48 grayscale contrast-125 saturate-150"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.14%2C51.50%2C-0.11%2C51.52&layer=mapnik&marker=51.51%2C-0.125"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
