'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function AboutSection() {
  return (
    <div className="relative bg-black text-white py-16 overflow-hidden">
      {/* Who are We? Section */}
      <section className="relative mb-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.h2
              className="text-4xl font-bold mb-6 text-white"
              variants={fadeUp}
            >
              Who are We?
            </motion.h2>
            <motion.p
              className="text-lg mb-8 text-gray-400"
              variants={fadeUp}
            >
              Founded in 2017 at IET-DAVV, FeedBox College Clubs has grown into a dynamic force, extending its reach to over 20 colleges across Madhya Pradesh. With the mission to empower college students with the essential digital skills and industry connections needed to thrive in today's competitive world.
              <br />
              <br />
              Now proudly part of the VIT Bhopal campus, FeedBox Clubs continues to inspire students to push boundaries, embrace creativity, and drive meaningful change in both their academic and professional pursuits. Join us in shaping the next generation of visionaries!
            </motion.p>
            <motion.button 
              className="button-neon py-2 px-6 transition duration-300 cursor-pointer shadow-[0_0_15px_rgba(45,212,191,0.5)]"
              variants={fadeUp}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="bg-gradient-to-b from-teal-900/40 to-transparent w-full h-full"></div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="mb-20 relative">
        <div className="absolute -inset-10 bg-gradient-to-tr from-purple-900/20 via-black to-black transform -rotate-6 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-teal-900/10 via-transparent to-transparent -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 text-white"
              variants={fadeUp}
            >
              Our Expertise
            </motion.h2>
            <motion.p 
              className="text-lg mb-10 text-gray-300"
              variants={fadeUp}
            >
              We offer a wide range of services to meet your technology needs, including:
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Digital Skill Development */}
              <motion.div 
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300 relative overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-transparent opacity-60"></div>
                <div className="relative z-10">
                  <div className="text-teal-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-teal-300">Digital Skill Development</h3>
                  <p className="text-gray-300">Hands-on training in areas like coding, design, digital marketing, and emerging technologies to build practical, industry-relevant skills.</p>
                </div>
              </motion.div>

              {/* Industry Collaboration */}
              <motion.div 
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 relative overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent opacity-60"></div>
                <div className="relative z-10">
                  <div className="text-purple-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">Industry Collaboration</h3>
                  <p className="text-gray-300">Real-world exposure through expert sessions, live projects, and mentorship from professionals, helping students connect classroom learning with industry practice.</p>
                </div>
              </motion.div>

              {/* Leadership & Innovation Programs */}
              <motion.div 
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300 relative overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-transparent opacity-60"></div>
                <div className="relative z-10">
                  <div className="text-teal-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-teal-300">Leadership & Innovation Programs</h3>
                  <p className="text-gray-300">Workshops and events that encourage creative thinking, entrepreneurial mindset, and leadership growth in a collaborative environment.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mb-10 relative">
        <div className="absolute -inset-10 bg-gradient-to-tl from-teal-900/20 via-black to-black transform rotate-6 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-transparent -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 text-white"
              variants={fadeUp}
            >
              Our Values
            </motion.h2>
            <motion.p 
              className="text-lg mb-10 text-gray-300"
              variants={fadeUp}
            >
              We are guided by a set of core values that drive our work and interactions:
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Growth Mindset */}
              <motion.div 
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 relative overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent opacity-60"></div>
                <div className="relative z-10">
                  <div className="text-purple-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">Growth Mindset</h3>
                  <p className="text-gray-300">We believe in continuous personal and professional development by embracing challenges and learning from every experience.</p>
                </div>
              </motion.div>

              {/* Collaboration */}
              <motion.div 
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300 relative overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-transparent opacity-60"></div>
                <div className="relative z-10">
                  <div className="text-teal-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-teal-300">Collaboration</h3>
                  <p className="text-gray-300">A strong community begins with teamwork. We thrive on mutual respect, shared learning, and collective success.</p>
                </div>
              </motion.div>

              {/* Creative Thinking */}
              <motion.div 
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 relative overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent opacity-60"></div>
                <div className="relative z-10">
                  <div className="text-purple-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">Creative Thinking</h3>
                  <p className="text-gray-300">We encourage out-of-the-box ideas, original problem-solving, and innovation that drives meaningful impact.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
