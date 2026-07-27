import React from 'react'
import { motion } from 'framer-motion'
import { FiHome, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

// ─── About Hero Banner ─────────────────────────────────────────────────────────
// Full-width hero with blurred background, dark overlay, page title & breadcrumb.
const AboutHero = () => {
  return (
    <section className="relative w-full h-[420px] md:h-[480px] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1600&auto=format&fit=crop"
        alt="Arnab School campus"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />

      {/* Layered dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/80 to-emerald-950/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />

      {/* Decorative dot grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #d97706 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5 text-xs text-emerald-400/70 mb-5"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-amber-400 transition-colors duration-300">
            <FiHome className="w-3 h-3" />
            Home
          </Link>
          <FiChevronRight className="w-3 h-3 text-emerald-600" />
          <span className="text-amber-400 font-semibold">About Us</span>
        </motion.nav>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs block mb-3">
            Our Story &amp; Identity
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
            About{' '}
            <span className="text-amber-400">Us</span>
          </h1>
          <p className="text-emerald-300/70 mt-5 text-base md:text-lg max-w-xl leading-relaxed font-light">
            Two decades of nurturing curious minds, building confident leaders,
            and shaping futures rooted in excellence and compassion.
          </p>
        </motion.div>

        {/* Bottom accent line */}
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

export default AboutHero
