'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Modern luxury villa in forest"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for better text visibility */}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-gradient-to-b from-[#1B4B59]/95 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-2xl tracking-[0.5em] font-light"
          >
            WAVEN
          </motion.div>
          <div className="flex gap-12">
            {['Vision', 'Location', 'Design', 'Investment'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="text-white text-sm tracking-[0.2em] font-light hover:text-[#2D7688] transition-colors relative group"
              >
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-px bg-[#2D7688] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold tracking-tight"
        >
          Luxury Living
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-xl"
        >
          Where nature meets modern design
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm tracking-[0.3em] font-light"
      >
        EXPLORE
      </motion.div>
    </div>
  );
} 