import React from 'react'
import { motion } from 'framer-motion'
import { FiZap, FiLayers, FiGlobe, FiHeart, FiCpu, FiBarChart2 } from 'react-icons/fi'

/**
 * LearningApproach
 * ─────────────────
 * Six methodology pillars displayed as icon cards with
 * a two-column image+text introduction above the grid.
 */

// ─── Methodology Pillars ───────────────────────────────────────────────────────
const pillars = [
  {
    icon: <FiLayers  className="w-6 h-6" />,
    title: 'Interdisciplinary Learning',
    description: 'Subjects are taught in connection — science meets art, maths meets music — building a broader, richer understanding.',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50 border-emerald-200 hover:border-emerald-400',
  },
  {
    icon: <FiZap     className="w-6 h-6" />,
    title: 'Experiential Education',
    description: 'Classroom theory is always paired with hands-on labs, field trips, and real-world projects that make learning stick.',
    color: 'text-amber-700',
    bg: 'bg-amber-50 border-amber-200 hover:border-amber-400',
  },
  {
    icon: <FiCpu     className="w-6 h-6" />,
    title: 'Technology Integration',
    description: 'Smart classrooms, AI tools, and coding curricula ensure students are fluent in the language of the future.',
    color: 'text-violet-700',
    bg: 'bg-violet-50 border-violet-200 hover:border-violet-400',
  },
  {
    icon: <FiGlobe   className="w-6 h-6" />,
    title: 'Global Perspective',
    description: 'Through MUN, global exchange programmes, and internationally benchmarked assessments, students think beyond borders.',
    color: 'text-blue-700',
    bg: 'bg-blue-50 border-blue-200 hover:border-blue-400',
  },
  {
    icon: <FiHeart   className="w-6 h-6" />,
    title: 'Social-Emotional Learning',
    description: 'SEEL is woven throughout the curriculum, building empathy, resilience, and self-awareness alongside academic skills.',
    color: 'text-rose-700',
    bg: 'bg-rose-50 border-rose-200 hover:border-rose-400',
  },
  {
    icon: <FiBarChart2 className="w-6 h-6" />,
    title: 'Data-Informed Teaching',
    description: "Continuous assessments and learning analytics guide teachers to personalise instruction for every student's growth path.",
    color: 'text-teal-700',
    bg: 'bg-teal-50 border-teal-200 hover:border-teal-400',
  },
]

const LearningApproach = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Two-column intro ───────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-slate-200/60">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
                alt="Students in modern classroom"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/064e3b/d97706?text=Learning' }}
              />
            </div>
            {/* Floating stat badge */}
            <div className="absolute -bottom-5 -right-5 bg-emerald-950 text-white rounded-2xl px-6 py-4 shadow-xl border border-emerald-800">
              <p className="text-3xl font-extrabold text-amber-400">98%</p>
              <p className="text-emerald-300/70 text-xs font-medium mt-0.5">Board Pass Rate 2025</p>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">
              How We Teach
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight leading-tight">
              Our Learning Philosophy &amp; Approach
            </h2>
            <div className="w-10 h-0.5 bg-gradient-to-r from-emerald-800 to-amber-500 rounded-full" />
            <p className="text-slate-500 text-base leading-relaxed font-light">
              At Arnab School, we don't just teach content — we cultivate thinking. Our pedagogy
              is rooted in research-backed practices that treat every student as a unique learner
              with individual strengths, interests, and growth trajectories.
            </p>
            <p className="text-slate-500 text-base leading-relaxed font-light">
              Teachers act as facilitators and mentors, guiding students to ask better questions,
              collaborate meaningfully, and take ownership of their own learning journey.
            </p>
            {/* Key point */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 mt-2">
              <span className="text-2xl">🎯</span>
              <p className="text-emerald-900 text-sm font-medium leading-relaxed">
                "We don't measure success only in marks — we measure it in confidence, curiosity,
                and the ability to solve real problems."
                <span className="block text-xs text-emerald-600/70 mt-1 font-normal">— Mrs. Priya Sharma, Principal</span>
              </p>
            </div>
          </motion.div>

        </div>

        {/* ── Methodology pillars grid ────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group flex items-start gap-4 p-5 rounded-2xl border ${pillar.bg} transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white shadow-sm ${pillar.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-emerald-950 font-bold text-sm leading-snug mb-1">{pillar.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default LearningApproach
