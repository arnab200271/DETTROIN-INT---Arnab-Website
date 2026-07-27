import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight, FiCheckCircle, FiBookOpen } from 'react-icons/fi'

// ─── Highlight Bullets ─────────────────────────────────────────────────────────
const highlights = [
  'Academic Excellence',
  'Leadership Skills',
  'Global-Standard Curriculum',
  'Holistic Development',
]

const DiscoverBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-emerald-950">

      {/* ── Background: blurred library image + layered overlays ── */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop"
          alt="Library background"
          className="w-full h-full object-cover object-center opacity-20"
        />
        {/* Left-to-right dark overlay so left text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/80 to-emerald-950/30" />
        {/* Subtle ambient glow behind text */}
        <div className="absolute top-0 left-0 w-96 h-full bg-emerald-800/10 blur-3xl pointer-events-none" />
      </div>

      {/* ── Content Grid ─────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end min-h-[420px] lg:min-h-[460px]">

          {/* ─ Left: Text Block ─ */}
          <div className="py-16 lg:py-20 flex flex-col gap-6">

            {/* Tag pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-emerald-700 bg-emerald-900/60 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-emerald-200 text-xs font-semibold tracking-wide">
                Inspiring Students To Learn, Grow And Lead
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
                Discover The Future Of{' '}
                <span className="block text-amber-400 mt-1">
                  Learning At Arnab
                </span>
              </h2>
            </motion.div>

            {/* Bordered highlight list */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-2 border-amber-500 pl-5 flex flex-col gap-2"
            >
              {/* Bullet row */}
              <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                {highlights.map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-sm text-emerald-200 font-medium"
                  >
                    <FiCheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-emerald-400/70 text-sm font-light mt-1">
                Understanding The Path Of Excellence At Arnab School.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary: Download Brochure */}
              <a
                href="/brochure.pdf"
                download
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-emerald-950 font-extrabold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40 active:scale-95 transition-all duration-300 group"
              >
                <FiDownload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                Download Brochure
              </a>

              {/* Secondary: Explore Programs */}
              <a
                href="/academics"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-emerald-600 text-emerald-200 font-bold text-sm hover:border-amber-500 hover:text-amber-400 transition-all duration-300 group"
              >
                <FiBookOpen className="w-4 h-4" />
                Explore Programs
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
            </motion.div>

          </div>

          {/* ─ Right: Student Image — overlaps bottom, cut-out style ─ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-end justify-center h-full relative"
          >
            {/* Glow halo behind student */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1627556704302-624286467c65?q=80&w=600&auto=format&fit=crop&crop=top"
              alt="Student at Arnab School"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop'
              }}
              className="relative z-10 h-[420px] w-auto object-cover object-top"
              style={{
                // Fade the image out at the bottom to blend with section
                maskImage: 'linear-gradient(to top, transparent 0%, black 30%)',
                WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 30%)',
              }}
            />
          </motion.div>

        </div>
      </div>

      {/* Bottom edge accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
    </section>
  )
}

export default DiscoverBanner
