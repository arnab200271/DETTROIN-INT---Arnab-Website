import React from 'react'
import { motion } from 'framer-motion'
import { FiUsers, FiBookOpen, FiAward, FiStar, FiGlobe, FiHeart } from 'react-icons/fi'

// ─── Stats Data ────────────────────────────────────────────────────────────────
const stats = [
  { icon: <FiUsers   className="w-5 h-5" />, value: '3,200+', label: 'Students Enrolled',      color: 'text-emerald-400' },
  { icon: <FiBookOpen className="w-5 h-5" />, value: '180+',   label: 'Qualified Faculty',      color: 'text-amber-400'   },
  { icon: <FiAward   className="w-5 h-5" />, value: '25 Yrs', label: 'Years of Excellence',    color: 'text-emerald-400' },
  { icon: <FiStar    className="w-5 h-5" />, value: '98%',    label: 'Board Pass Rate',         color: 'text-amber-400'   },
  { icon: <FiGlobe   className="w-5 h-5" />, value: '40+',    label: 'Clubs & Activities',      color: 'text-emerald-400' },
  { icon: <FiHeart   className="w-5 h-5" />, value: '500+',   label: 'Alumni Worldwide',        color: 'text-amber-400'   },
]

const Stats = () => {
  return (
    <section className="py-20 bg-emerald-950 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">
            Numbers That Define Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-3">
            Arnab School at a Glance
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-emerald-800/50 bg-emerald-900/30 hover:bg-emerald-900/60 hover:border-emerald-700 transition-all duration-400 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`${stat.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                {stat.icon}
              </div>
              {/* Value */}
              <p className="text-3xl font-extrabold text-white tracking-tight leading-none">
                {stat.value}
              </p>
              {/* Label */}
              <p className="text-emerald-400/60 text-xs font-medium leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Stats
