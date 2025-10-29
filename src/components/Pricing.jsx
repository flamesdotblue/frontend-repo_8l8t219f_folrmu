import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Essential',
    price: 49,
    features: ['Haircut & Style', 'Quick Glow Facial', 'Express Manicure'],
    highlight: false,
  },
  {
    name: 'Signature',
    price: 99,
    features: ['Cut + Color/Balayage', 'Hydra Glow Facial', 'Spa Manicure + Pedicure'],
    highlight: true,
  },
  {
    name: 'Luxe',
    price: 159,
    features: ['Keratin/Smoothing', 'Advanced Facial Ritual', 'Full Glam Makeup + Lashes'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_0%,rgba(244,114,182,0.15),transparent),radial-gradient(800px_400px_at_90%_100%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Transparent Pricing</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Premium quality, fair prices. Choose a plan that matches your vibe.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative rounded-2xl p-[1px] ${t.highlight ? 'bg-gradient-to-tr from-rose-500 to-fuchsia-500' : 'bg-neutral-200/60 dark:bg-neutral-800/60'}`}
            >
              <div className={`h-full rounded-2xl p-6 ${t.highlight ? 'bg-white/90 dark:bg-neutral-950/80' : 'bg-white/70 dark:bg-neutral-900/60'} backdrop-blur`}> 
                {t.highlight && (
                  <div className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white text-xs px-3 py-1 shadow-lg">
                    <Star className="h-3.5 w-3.5" /> Most Popular
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <h3 className="text-xl font-semibold">{t.name}</h3>
                </div>
                <div className="mt-2">
                  <span className="text-4xl font-semibold">${t.price}</span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400"> / session</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    t.highlight
                      ? 'bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/30 hover:scale-[1.02] active:scale-[0.98]'
                      : 'border border-neutral-200 dark:border-neutral-800 hover:bg-white'
                  }`}
                >
                  Choose {t.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
