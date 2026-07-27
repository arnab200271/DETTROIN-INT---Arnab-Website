import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiHome, FiChevronRight, FiMail } from 'react-icons/fi'

/**
 * ContactHero
 * ───────────
 * Hero banner for the Contact Us page featuring campus background,
 * dark gradient overlays, page title, breadcrumb navigation, and accent line.
 */
const ContactHero = () => {
  return (
    <section className="relative w-full h-[420px] md:h-[480px] flex items-center overflow-hidden">

      {/* ── Background Image ─────────────────────────────────── */}
      <img
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop"
        alt="Contact Arnab School"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/96 via-emerald-950/82 to-emerald-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 to-transparent" />

      {/* Dot watermark pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #d97706 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-emerald-400/70 mb-5"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-amber-400 transition-colors duration-300">
            <FiHome className="w-3 h-3" /> Home
          </Link>
          <FiChevronRight className="w-3 h-3 text-emerald-700" />
          <span className="text-amber-400 font-semibold">Contact Us</span>
        </motion.nav>

        {/* Title Group */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <FiMail className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">
              We're Here to Help
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
            Contact <span className="text-amber-400">Us</span>
          </h1>

          <p className="text-emerald-300/70 mt-5 text-base md:text-lg max-w-xl leading-relaxed font-light">
            Have questions about admissions, academics, or campus visits?
            Get in touch with our administrative team — we'd love to hear from you.
          </p>
        </motion.div>

        {/* Accent Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full origin-left"
        />
      </div>
    </section>
  )
}

export default ContactHero
