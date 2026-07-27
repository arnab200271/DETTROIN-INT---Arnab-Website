import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiCheck, FiChevronDown } from 'react-icons/fi'

/**
 * Programs
 * ────────
 * Displays all academic levels as interactive expandable cards.
 * Desktop: 2-column grid. Mobile: single column stacked.
 */

// ─── Academic Program Data ─────────────────────────────────────────────────────
const programs = [
  {
    id: 1,
    level: 'Pre-Primary',
    grades: 'Nursery · LKG · UKG',
    age: 'Ages 3 – 5',
    color: 'from-rose-500 to-pink-600',
    lightBg: 'bg-rose-50 border-rose-200',
    accentText: 'text-rose-600',
    accentBorder: 'border-l-rose-500',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=700&auto=format&fit=crop',
    tagline: 'Play, Discover & Wonder',
    description:
      'Our play-based early childhood programme cultivates curiosity, language skills, and social-emotional foundations in a warm, nurturing environment.',
    highlights: [
      'Activity-based holistic learning',
      'Bilingual literacy (English & Hindi)',
      'Creative arts & music integration',
      'Structured free-play and Montessori-inspired zones',
    ],
    ctaLink: '/academics/pre-primary',
  },
  {
    id: 2,
    level: 'Primary School',
    grades: 'Classes I – V',
    age: 'Ages 6 – 10',
    color: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50 border-amber-200',
    accentText: 'text-amber-600',
    accentBorder: 'border-l-amber-500',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=700&auto=format&fit=crop',
    tagline: 'Build · Explore · Achieve',
    description:
      'A strong academic foundation blended with experiential learning. Students develop literacy, numeracy, and critical thinking through engaging, hands-on project work.',
    highlights: [
      'CBSE-aligned core curriculum',
      'Project-based interdisciplinary learning',
      'Introduction to STEM thinking',
      'Reading clubs, art & physical education',
    ],
    ctaLink: '/academics/primary',
  },
  {
    id: 3,
    level: 'Middle School',
    grades: 'Classes VI – VIII',
    age: 'Ages 11 – 13',
    color: 'from-emerald-600 to-teal-600',
    lightBg: 'bg-emerald-50 border-emerald-200',
    accentText: 'text-emerald-700',
    accentBorder: 'border-l-emerald-600',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=700&auto=format&fit=crop',
    tagline: 'Think · Debate · Lead',
    description:
      'A critical transitional stage where students deepen subject expertise, develop independent learning habits, and explore a wide range of co-curricular interests.',
    highlights: [
      'Subject specialisation begins (Science / Maths / Languages)',
      'Coding & computational thinking modules',
      'Student council and leadership workshops',
      'Debate, MUN, and problem-solving competitions',
    ],
    ctaLink: '/academics/middle',
  },
  {
    id: 4,
    level: 'Senior Secondary',
    grades: 'Classes IX – XII',
    age: 'Ages 14 – 17',
    color: 'from-violet-600 to-indigo-600',
    lightBg: 'bg-violet-50 border-violet-200',
    accentText: 'text-violet-700',
    accentBorder: 'border-l-violet-600',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=700&auto=format&fit=crop',
    tagline: 'Aspire · Excel · Transform',
    description:
      'A rigorous, career-focused senior programme with Science, Commerce, and Humanities streams. Expert mentoring for board examinations, competitive entrances, and global university applications.',
    highlights: [
      'Science, Commerce & Humanities streams',
      'Board exam prep with personalised mentoring',
      'Career counselling and university guidance',
      'Internship and industry exposure programmes',
    ],
    ctaLink: '/academics/senior',
  },
]

// ─── Individual Program Card ───────────────────────────────────────────────────
const ProgramCard = ({ prog, index }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-3xl overflow-hidden border ${prog.lightBg} hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-500`}
    >
      {/* ── Top image strip ──────────────────────────── */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={prog.image}
          alt={prog.level}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/700x300/064e3b/d97706?text=${encodeURIComponent(prog.level)}`
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Gradient overlay on image */}
        <div className={`absolute inset-0 bg-gradient-to-r ${prog.color} opacity-70`} />
        {/* Level label */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest block">{prog.grades} · {prog.age}</span>
          <h3 className="text-white text-2xl font-extrabold tracking-tight mt-0.5">{prog.level}</h3>
          <p className="text-white/70 text-xs mt-1 italic">{prog.tagline}</p>
        </div>
      </div>

      {/* ── Card body ──────────────────────────────────── */}
      <div className="p-6">
        <p className="text-slate-600 text-sm leading-relaxed font-light">
          {prog.description}
        </p>

        {/* Toggle highlights */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`mt-4 flex items-center gap-1.5 text-xs font-bold ${prog.accentText} hover:opacity-80 transition-opacity`}
          aria-expanded={expanded}
        >
          {expanded ? 'Hide Details' : 'View Highlights'}
          <FiChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden mt-4 flex flex-col gap-2"
            >
              {prog.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <FiCheck className={`w-4 h-4 ${prog.accentText} shrink-0 mt-0.5`} />
                  {item}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* CTA */}
        <a
          href={prog.ctaLink}
          className={`mt-5 inline-flex items-center gap-1.5 text-xs font-extrabold ${prog.accentText} group/link`}
        >
          Learn More
          <FiArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-300" />
        </a>
      </div>
    </motion.div>
  )
}

// ─── Main Programs Section ─────────────────────────────────────────────────────
const Programs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold uppercase tracking-widest text-xs"
          >
            From Nursery to Grade XII
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-3"
          >
            Academic Programmes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-base leading-relaxed font-light"
          >
            Four purposefully designed learning stages that grow with your child,
            building on each milestone with care and ambition.
          </motion.p>
        </div>

        {/* Programs Grid — 2 columns on md+, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {programs.map((prog, i) => (
            <ProgramCard key={prog.id} prog={prog} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Programs
