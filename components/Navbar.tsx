'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [eventsOpen, setEventsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const eventsMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (eventsMenuRef.current && !eventsMenuRef.current.contains(event.target)) {
        setEventsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuAnimation = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } },
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        scrolled ? 'bg-[#1a1a1a]/90 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo & Links */}
        <div className="flex items-center gap-10">
          <Image src="/logo.png" alt="Feedbox Logo" width={120} height={40} />

          <div className="hidden md:flex gap-6 items-center text-sm font-medium tracking-wide">
            <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
            <Link href="/community" className="hover:text-cyan-400 transition">Community</Link>

            <div
              ref={eventsMenuRef}
              className="relative"
              onMouseEnter={() => setEventsOpen(true)}
              onMouseLeave={() => setEventsOpen(false)}
            >
              <button className="hover:text-cyan-400 transition">Events ▼</button>
              <AnimatePresence>
                {eventsOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuAnimation}
                    className="absolute top-8 left-0 w-40 bg-[#2c2c2c] rounded shadow-lg text-sm"
                  >
                    <Link href="#" className="block px-4 py-2 hover:bg-cyan-500/20">Upcoming</Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-cyan-500/20">Past</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/blogs" className="hover:text-cyan-400 transition">Blogs</Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-500/20 text-sm">Sign In</button>
          <Image src="/clglogo.png" alt="College Logo" width={120} height={40} />
        </div>
      </div>
    </motion.nav>
  );
}
