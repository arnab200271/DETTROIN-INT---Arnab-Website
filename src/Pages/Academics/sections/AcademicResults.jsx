import React from 'react'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiAward, FiUsers, FiBookOpen } from 'react-icons/fi'

/**
 * AcademicResults
 * ───────────────
 * Highlights academic achievements and results with a banner-style
 * strip of stats and a list of recent accolades.
 */

// ─── Achievement Stats ─────────────────────────────────────────────────────────
const resultStats = [
  { icon: <FiTrendingUp className="w-5 h-5" />, value: '98%',  label: 'Board Pass Rate 2025',      color: 'text-amber-400' },
  { icon: <FiAward      className="w-5 h-5" />, value: '42',   label: 'District Toppers (2025)',   color: 'text-emerald-400' },
  { icon: <FiUsers      className="w-5 h-5" />, value: '120+', label: 'IIT / NEET Qualifiers',     color: 'text-amber-400' },
  { icon: <FiBookOpen   className="w-5 h-5" />, value: '15+',  label: 'National Olympiad Medals',  color: 'text-emerald-400' },
]

// ─── Notable Achievements ──────────────────────────────────────────────────────
const achievements = [
  { year: '2025', title: 'CBSE Class XII Board — 4 students scored 100% in Mathematics' },
  { year: '2025', title: 'Science Olympiad — Gold Medals at National Level (3 students)' },
  { year: '2024', title: 'NTSE Stage II — 8 Arnab School students cleared Stage II nationally' },
  { year: '2024', title: 'Model United Nations — Best Delegate at Harvard MUN Conference' },
  { year: '2023', title: 'National School Excellence Award for Academic Achievement' },
  { year: '2023', title: 'Coding Hackathon — 1st Place, All-India School Coding Championship' },
]

const AcademicResults = () => {
  return (
    <section className="py-24 bg-emerald-950 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-bold uppercase tracking-widest text-xs"
          >
            Proven Performance
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-3"
          >
            Academic Results &amp; Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-emerald-300/70 mt-4 text-base leading-relaxed font-light"
          >
            Year after year, Arnab School students achieve outstanding results at
            board examinations, national competitions, and global platforms.
          </motion.p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {resultStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 p-6 rounded-2xl border border-emerald-800/50 bg-emerald-900/40 hover:bg-emerald-900/70 transition-colors duration-300 text-center"
            >
              <span className={stat.color}>{stat.icon}</span>
              <p className="text-4xl font-extrabold text-white">{stat.value}</p>
              <p className="text-emerald-400/60 text-xs font-medium leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-emerald-900/30 border border-emerald-800/40 rounded-3xl overflow-hidden"
        >
          {/* List header */}
          <div className="flex items-center gap-3 px-7 py-5 border-b border-emerald-800/40">
            <FiAward className="w-5 h-5 text-amber-400" />
            <p className="text-white font-bold text-sm">Notable Achievements — Last 3 Years</p>
          </div>
          {/* Achievement rows */}
          {achievements.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-5 px-7 py-4 ${i !== achievements.length - 1 ? 'border-b border-emerald-800/30' : ''} hover:bg-emerald-800/20 transition-colors duration-300`}
            >
              {/* Year badge */}
              <span className="shrink-0 mt-0.5 text-[10px] font-extrabold text-amber-400 uppercase tracking-widest border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 rounded-full">
                {item.year}
              </span>
              {/* Title */}
              <p className="text-emerald-200/80 text-sm leading-relaxed">{item.title}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default AcademicResults
