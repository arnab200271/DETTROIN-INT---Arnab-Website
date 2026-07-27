import React from 'react'
import { motion } from 'framer-motion'
import { FiEye, FiTarget, FiStar } from 'react-icons/fi'

// ─── Vision & Mission Data ─────────────────────────────────────────────────────
const vmCards = [
  {
    id: 1,
    icon: <FiEye className="w-6 h-6" />,
    color: 'from-emerald-800 to-emerald-900',
    accent: 'bg-emerald-700/40 border-emerald-600/30',
    label: 'Our Vision',
    heading: 'A World-Class Centre of Learning',
    body: 'To be a globally recognised institution that inspires every student to reach their highest potential — academically, morally, and creatively — becoming lifelong learners and responsible world citizens.',
    quote: '"Education is the passport to the future."',
  },
  {
    id: 2,
    icon: <FiTarget className="w-6 h-6" />,
    color: 'from-amber-700 to-amber-900',
    accent: 'bg-amber-700/40 border-amber-600/30',
    label: 'Our Mission',
    heading: 'Nurture, Empower, and Transform',
    body: 'To deliver a holistic, values-driven education that cultivates critical thinking, empathy, and resilience — equipping students with the knowledge, skills, and character needed to thrive in a rapidly changing world.',
    quote: '"Empowering every child to excel."',
  },
  {
    id: 3,
    icon: <FiStar className="w-6 h-6" />,
    color: 'from-slate-700 to-slate-900',
    accent: 'bg-slate-700/40 border-slate-600/30',
    label: 'Core Promise',
    heading: 'Excellence Without Compromise',
    body: 'Every decision at Arnab School — from curriculum design to campus life — is guided by a single promise: to give each student the best possible foundation for a meaningful, successful, and compassionate life.',
    quote: '"Character above certificates."',
  },
]

const VisionMission = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* Soft ambient blobs */}
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-amber-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-16 w-72 h-72 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold uppercase tracking-widest text-xs"
          >
            What We Stand For
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-3"
          >
            Vision, Mission &amp; Promise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-base leading-relaxed font-light"
          >
            The guiding principles that define every decision, every programme,
            and every interaction at Arnab School.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {vmCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl bg-gradient-to-br ${card.color} p-8 flex flex-col gap-5 overflow-hidden group hover:-translate-y-1.5 transition-transform duration-500`}
            >
              {/* Decorative circle blob */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/5 rounded-full" />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl border ${card.accent} flex items-center justify-center text-amber-300`}>
                {card.icon}
              </div>

              {/* Label */}
              <span className="text-amber-400/80 text-[10px] font-bold uppercase tracking-widest">
                {card.label}
              </span>

              {/* Heading */}
              <h3 className="text-white text-xl font-extrabold leading-snug tracking-tight">
                {card.heading}
              </h3>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-amber-500/60 rounded-full" />

              {/* Body */}
              <p className="text-white/60 text-sm leading-relaxed font-light flex-1">
                {card.body}
              </p>

              {/* Quote */}
              <p className="text-amber-300/70 text-xs italic font-medium border-l-2 border-amber-500/40 pl-3">
                {card.quote}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default VisionMission
