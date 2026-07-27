import React from 'react'
import { motion } from 'framer-motion'
import { FiShield, FiSun, FiUsers, FiZap, FiGlobe, FiFeather } from 'react-icons/fi'

// ─── Core Values Data ──────────────────────────────────────────────────────────
const values = [
  {
    icon: <FiShield   className="w-6 h-6" />,
    title: 'Integrity',
    description: 'We nurture honesty, transparency, and ethical conduct in every student and staff member.',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconBg: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: <FiSun      className="w-6 h-6" />,
    title: 'Excellence',
    description: 'We hold ourselves to the highest academic and personal standards, always striving to do better.',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100 text-amber-700',
  },
  {
    icon: <FiUsers    className="w-6 h-6" />,
    title: 'Community',
    description: 'We value belonging, collaboration, and the collective strength of a diverse, inclusive school family.',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100 text-blue-700',
  },
  {
    icon: <FiZap      className="w-6 h-6" />,
    title: 'Innovation',
    description: 'We embrace curiosity, creativity, and technology as powerful tools for learning and problem-solving.',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    iconBg: 'bg-violet-100 text-violet-700',
  },
  {
    icon: <FiGlobe    className="w-6 h-6" />,
    title: 'Global Outlook',
    description: 'We prepare students to think beyond borders — appreciating diverse cultures and global challenges.',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    iconBg: 'bg-teal-100 text-teal-700',
  },
  {
    icon: <FiFeather  className="w-6 h-6" />,
    title: 'Compassion',
    description: 'We cultivate empathy and kindness, teaching students to lead with their hearts as much as their minds.',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    iconBg: 'bg-rose-100 text-rose-700',
  },
]

const CoreValues = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold uppercase tracking-widest text-xs"
          >
            Our Guiding Principles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-3"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-base leading-relaxed font-light"
          >
            Six principles that shape the culture, decisions, and daily life at Arnab School.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex items-start gap-5 p-6 rounded-2xl border ${val.bg} ${val.border} hover:shadow-lg transition-all duration-400 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${val.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                {val.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-emerald-950 font-extrabold text-base mb-2 tracking-tight">
                  {val.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {val.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CoreValues
