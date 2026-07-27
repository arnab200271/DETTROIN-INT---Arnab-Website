import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

/**
 * Curriculum
 * ──────────
 * CBSE curriculum overview with a horizontal table of subjects per grade band,
 * and a checklist of key curriculum features on the right.
 */

// ─── Subject Grid Data ─────────────────────────────────────────────────────────
const subjectBands = [
  {
    stage: 'Pre-Primary (Nursery–UKG)',
    color: 'bg-rose-500',
    subjects: ['Environmental Awareness', 'Early Literacy', 'Number Sense', 'Creative Arts', 'Music & Movement', 'Life Skills'],
  },
  {
    stage: 'Primary (I–V)',
    color: 'bg-amber-500',
    subjects: ['English', 'Hindi', 'Mathematics', 'EVS / Science', 'Social Studies', 'Computer Basics', 'Art & Craft', 'Physical Education'],
  },
  {
    stage: 'Middle School (VI–VIII)',
    color: 'bg-emerald-600',
    subjects: ['English', 'Hindi / Sanskrit', 'Mathematics', 'Science', 'Social Science', 'Coding & AI', 'Health & PE', 'Visual Arts'],
  },
  {
    stage: 'Senior Secondary (IX–XII)',
    color: 'bg-violet-600',
    subjects: ['Stream electives (PCM / PCB / Commerce / Humanities)', 'English Core', 'Physical Education', 'Career Electives', 'Research Project', 'Language Optional'],
  },
]

const curriculumFeatures = [
  'CBSE Board-affiliated, Reg. No. 12345',
  'NEP 2020 aligned competency-based framework',
  'Continuous & Comprehensive Evaluation (CCE)',
  'Annual Science & Innovation Fair',
  'Olympiads, NTSE, and national competitions',
  'Internal assessment portfolio for every student',
  'Bilingual instruction (English + Hindi)',
  'Annual reading challenge and library programme',
]

const Curriculum = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold uppercase tracking-widest text-xs"
          >
            CBSE Aligned
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-3"
          >
            Curriculum Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-base leading-relaxed font-light"
          >
            A comprehensive, standards-driven curriculum built on the CBSE framework and
            enriched with global best practices to develop complete, capable learners.
          </motion.p>
        </div>

        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* ── Subject bands (2/3 width) ─────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {subjectBands.map((band, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Stage header bar */}
                <div className={`${band.color} px-5 py-3`}>
                  <p className="text-white font-bold text-sm">{band.stage}</p>
                </div>
                {/* Subject pills */}
                <div className="px-5 py-4 flex flex-wrap gap-2">
                  {band.subjects.map((subj, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium shadow-sm"
                    >
                      {subj}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Feature checklist (1/3 width) ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-emerald-950 p-7 flex flex-col gap-5 sticky top-24"
          >
            <div>
              <p className="text-amber-400 font-bold uppercase tracking-widest text-xs mb-2">Key Features</p>
              <h3 className="text-white font-extrabold text-xl leading-snug">
                What Makes Our Curriculum Stand Out
              </h3>
            </div>
            <div className="w-8 h-0.5 bg-amber-500 rounded-full" />
            <ul className="flex flex-col gap-3">
              {curriculumFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-emerald-200/80">
                  <FiCheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  {feat}
                </li>
              ))}
            </ul>
            {/* Download prospectus CTA */}
            <a
              href="/brochure.pdf"
              download
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-emerald-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all duration-300"
            >
              Download Prospectus
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Curriculum
