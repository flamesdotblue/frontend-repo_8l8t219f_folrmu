import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Menu, X } from 'lucide-react';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#booking', label: 'Book' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/60 shadow-sm dark:bg-neutral-900/60' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-rose-500 text-white grid place-items-center shadow-lg shadow-rose-500/30">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-lg">Luxe Salon</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white px-4 py-2 text-sm shadow-lg shadow-fuchsia-500/30 hover:scale-105 active:scale-95 transition"
          >
            <Phone className="h-4 w-4" /> Book Now
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl">
          <div className="px-4 py-3 grid gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-neutral-700 dark:text-neutral-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white px-4 py-2 text-sm shadow-lg"
            >
              <Phone className="h-4 w-4" /> Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
