'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, ease: 'easeOut' },
  },
};

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function HeroSection() {
  return (
    <section className="h-screen w-full bg-[#121212] text-white flex items-center justify-center relative pt-24 md:pt-32 pb-10 overflow-hidden">
      {/* Subtle Background Pulse */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-400/10 blur-2xl rounded-full -top-40 -left-40 animate-pulse-slow" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-[1px] bg-cyan-400/15 blur-sm" />

      <motion.div
        className="z-10 max-w-4xl px-6 text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          <span className="text-white drop-shadow-[0_0_4px_rgb(0,212,255)]">Feedbox</span>
          <br />
          <span className="text-cyan-400 text-4xl md:text-6xl drop-shadow-[0_0_3px_rgb(0,212,255)]">
            College Club
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          <span className="text-cyan-300">Unlocking potential</span>, fostering innovation, and paving the way for a brighter tomorrow.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-full shadow-sm transition">
            Get Started →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
