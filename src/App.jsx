import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Booking from './components/Booking';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 selection:bg-rose-200 selection:text-neutral-900">
      <Hero />
      <Services />
      <Pricing />
      <Booking />
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10 mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Luxe Salon — All rights reserved.</p>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Crafted with care • Modern • Responsive</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
