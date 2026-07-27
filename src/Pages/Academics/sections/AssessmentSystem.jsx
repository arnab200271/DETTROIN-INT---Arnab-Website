import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiTrendingUp, FiAward, FiUsers, FiBookOpen, FiClipboard, FiStar } from 'react-icons/fi'

/**
 * AssessmentSystem
 * ─────────────────
 * Covers Arnab School's evaluation methodology:
 *  - CCE overview cards
 *  - Assessment types breakdown
 *  - Academic results & achievements strip
 */

// ─── Assessment Types ──────────────────────────────────────────────────────────
const assessmentTypes = [
  {
    type: 'Formative Assessment (FA)',
    frequency: 'Continuous — Throughout the Term',
    description: 'Regular classroom activities, quizzes, assignments, and group projects that track day-to-day progress without the pressure of high-stakes exams.',
    tools: ['Class participation', 'Weekly quizzes', 'Project work', 'Peer review', 'Lab practicals'],
    color: 'border-emerald-500',
    bg: 'bg-emerald-50',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  {
    type: 'Summative Assessment (SA)',
    frequency: 'Twice per Academic Year',
    description: 'Comprehensive half-yearly and annual examinations aligned with CBSE patterns that measure mastery of the full term curriculum.',
    tools: ['Half-yearly exams', 'Annual board exams', 'Practical exams', 'Written papers', 'Oral vivas'],
    color: 'border-violet-500',
    bg: 'bg-violet-50',
    badge: 'bg-violet-100 text-violet-700',
  },
  {
    type: 'Portfolio Assessment',
    frequency: 'Ongoing — Updated Each Term',
    description: 'Every student maintains a living portfolio showcasing their best work, creative projects, and personal growth across all subjects.',
    tools: ['Written projects', 'Art & design work', 'Research papers', 'Reflection journals', 'Digital portfolios'],
    color: 'border-amber-500',
    bg: 'bg-amber-50',
    badge: 'bg-amber-100 text-amber-700',
  },
]

// ─── CCE Principles ────────────────────────────────────────────────────────────
const ccePrinciples = [
  'Holistic evaluation of scholastic & co-scholastic areas',
  'Reduced exam stress through continuous feedback',
  'Celebrates student strengths beyond academics',
  'Parent-teacher progress meetings every quarter',
  'Personalised improvement plans for every learner',
  'Digital grade cards accessible via parent portal',
]

// ─── Results Stats ─────────────────────────────────────────────────────────────
const resultStats = [
  { icon: <FiTrendingUp className="w-5 h-5" />, value: '98%',  label: 'Board Pass Rate 2025',    color: 'text-amber-400' },
  { icon: <FiAward      className="w-5 h-5" />, value: '42',   label: 'District Toppers',         color: 'text-emerald-400' },
  { icon: <FiUsers      className="w-5 h-5" />, value: '120+', label: 'IIT / NEET Qualifiers',    color: 'text-amber-400' },
  { icon: <FiBookOpen   className="w-5 h-5" />, value: '15+',  label: 'Olympiad Medals',          color: 'text-emerald-400' },
]

// ─── Notable Achievements ──────────────────────────────────────────────────────
const achievements = [
  { year: '2025', title: 'CBSE Class XII — 4 students scored 100% in Mathematics' },
  { year: '2025', title: 'Science Olympiad — Gold Medals at National Level (3 students)' },
  { year: '2024', title: 'NTSE Stage II — 8 students cleared Stage II nationally' },
  { year: '2024', title: 'Model United Nations — Best Delegate at Harvard MUN Conference' },
  { year: '2023', title: 'National School Excellence Award for Academic Achievement' },
  { year: '2023', title: 'All-India School Coding Championship — 1st Place' },
]

const AssessmentSystem = () => {
  return (
    <div className="flex flex-col">

      {/* ── Section 1: CCE Overview ──────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left: Text block */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">NEP 2020 Aligned</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight">
                Continuous &amp; Comprehensive Evaluation
              </h2>
              <div className="w-10 h-0.5 bg-gradient-to-r from-emerald-800 to-amber-500 rounded-full" />
              <p className="text-slate-500 text-base leading-relaxed font-light">
                Our evaluation framework goes far beyond marks. Built on the CBSE Continuous
                &amp; Comprehensive Evaluation (CCE) model and aligned with NEP 2020, we assess
                the whole student — academic, creative, physical, and social dimensions.
              </p>
              {/* CCE Principle checklist */}
              <ul className="flex flex-col gap-2.5 mt-2">
                {ccePrinciples.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <FiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b6411?q=80&w=800&auto=format&fit=crop"
                  alt="Student assessment at Arnab School"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/064e3b/d97706?text=Assessment' }}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-emerald-950 text-white rounded-2xl px-5 py-4 shadow-xl border border-emerald-800">
                <div className="flex items-center gap-2">
                  <FiClipboard className="w-4 h-4 text-amber-400" />
                  <span className="text-white font-bold text-sm">CBSE Affiliated</span>
                </div>
                <p className="text-emerald-400/70 text-xs mt-1">Reg. No. 12345</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Assessment Types ──────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-extrabold text-emerald-950 tracking-tight"
            >
              Assessment Types &amp; Tools
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 mt-3 text-sm leading-relaxed font-light"
            >
              Three complementary assessment modes ensure a complete, fair picture of every student's growth.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assessmentTypes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border-l-4 ${item.color} ${item.bg} border border-slate-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300`}
              >
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${item.badge}`}>
                    {item.frequency}
                  </span>
                  <h4 className="text-emerald-950 font-extrabold text-base mt-3 leading-snug">{item.type}</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.tools.map((tool, j) => (
                    <span key={j} className="text-xs px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 font-medium shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Results & Achievements ───────────────── */}
      <section className="py-20 bg-emerald-950 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          <div className="text-center max-w-xl mx-auto mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-extrabold text-white"
            >
              Results &amp; Achievements
            </motion.h3>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {resultStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-2 p-6 rounded-2xl border border-emerald-800/50 bg-emerald-900/40 text-center"
              >
                <span className={stat.color}>{stat.icon}</span>
                <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="text-emerald-400/60 text-xs font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Achievement log */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-900/30 border border-emerald-800/40 rounded-3xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-7 py-5 border-b border-emerald-800/40">
              <FiStar className="w-5 h-5 text-amber-400" />
              <p className="text-white font-bold text-sm">Notable Achievements — Last 3 Years</p>
            </div>
            {achievements.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-5 px-7 py-4 hover:bg-emerald-800/20 transition-colors duration-300 ${i !== achievements.length - 1 ? 'border-b border-emerald-800/30' : ''}`}
              >
                <span className="shrink-0 mt-0.5 text-[10px] font-extrabold text-amber-400 uppercase tracking-widest border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 rounded-full">
                  {item.year}
                </span>
                <p className="text-emerald-200/80 text-sm leading-relaxed">{item.title}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  )
}

export default AssessmentSystem
