import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Star, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0"> 
        <Spline scene="https://prod.spline.design/9dFw8YyQ5NnD6o3W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(244,114,182,0.35),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(168,85,247,0.35),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(244,63,94,0.25),transparent_40%)]"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/90 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Award-winning stylists & premium care
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-neutral-900 dark:text-white">
            Elevate Your Look at
            <span className="block bg-gradient-to-r from-rose-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent"> Luxe Salon</span>
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg max-w-xl">
            A sanctuary for hair, skin, and self-care. Immerse in a modern, relaxing atmosphere with expert stylists, tailored treatments, and luxury finishes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#booking" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white px-6 py-3 text-sm font-medium shadow-lg shadow-fuchsia-500/30 hover:scale-[1.02] active:scale-[0.98] transition">
              Book an Appointment
            </a>
            <a href="#services" className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-neutral-200/60 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-6 py-3 text-sm text-neutral-800 dark:text-neutral-100 hover:bg-white/90 transition">
              Explore Services
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-rose-400 to-amber-300" />
              ))}
            </div>
            <div className="text-sm text-neutral-700 dark:text-neutral-300 flex items-center gap-1">
              <Star className="h-4 w-4 text-amber-400" /> 4.9/5 by 2k+ happy clients
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative aspect-[4/5] lg:aspect-[5/6] rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur shadow-[0_30px_60px_-15px_rgba(236,72,153,0.35)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(244,114,182,0.35),transparent),radial-gradient(900px_500px_at_120%_120%,rgba(168,85,247,0.35),transparent)]" />
          <img
            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1974&auto=format&fit=crop"
            alt="Salon experience"
            className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-90"
          />
        </motion.div>
      </div>
    </section>
  );
}
