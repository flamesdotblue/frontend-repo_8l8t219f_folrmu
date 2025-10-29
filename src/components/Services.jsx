import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Bath, Brush, HeartPulse } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Hair Styling',
    desc: 'Precision cuts, blowouts, color, balayage, and special occasion styling tailored to you.',
    gradient: 'from-rose-500/20 to-fuchsia-500/20',
  },
  {
    icon: Sparkles,
    title: 'Skin & Glow',
    desc: 'Facials, derma polish, and glow-boosting rituals for luminous, healthy skin.',
    gradient: 'from-amber-400/20 to-pink-500/20',
  },
  {
    icon: Bath,
    title: 'Spa & Relax',
    desc: 'Therapeutic massages and calming spa therapies to reset your body and mind.',
    gradient: 'from-cyan-400/20 to-violet-500/20',
  },
  {
    icon: Brush,
    title: 'Makeup Artistry',
    desc: 'From natural elegance to full glam—makeup that enhances your unique beauty.',
    gradient: 'from-indigo-400/20 to-fuchsia-500/20',
  },
  {
    icon: HeartPulse,
    title: 'Nails & Care',
    desc: 'Manicure, pedicure, gel finish, and luxe nail art with care-centric hygiene.',
    gradient: 'from-emerald-400/20 to-teal-500/20',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white to-white dark:from-neutral-950 dark:to-neutral-950" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Signature Services</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">A curated menu of treatments crafted for modern comfort and timeless style.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative rounded-2xl border border-neutral-200/60 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-rose-500 to-fuchsia-500 text-white grid place-items-center shadow-md shadow-rose-500/30">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center text-sm font-medium text-rose-600 dark:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Discover more →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
