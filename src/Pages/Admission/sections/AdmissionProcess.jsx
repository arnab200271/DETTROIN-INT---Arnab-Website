import React from 'react'
import { motion } from 'framer-motion'
import {
  FiFileText, FiSearch, FiCheckSquare, FiCalendar,
  FiBook, FiUserCheck, FiArrowRight
} from 'react-icons/fi'

/**
 * AdmissionProcess
 * ─────────────────
 * Vertical numbered step timeline showing the full admission journey.
 * Alternates card color on each step for visual rhythm.
 */

// ─── Process Steps ─────────────────────────────────────────────────────────────
const steps = [
  {
    step: '01',
    icon: <FiSearch       className="w-5 h-5" />,
    title: 'Explore & Enquire',
    description:
      'Visit our campus or browse our website to explore programmes, curriculum, and facilities. Submit an online enquiry form and our admissions team will contact you within 24 hours.',
    note: 'Open Year-Round',
    color: 'bg-amber-500',
    lightBg: 'bg-amber-50 border-amber-200',
    accentText: 'text-amber-700',
  },
  {
    step: '02',
    icon: <FiFileText     className="w-5 h-5" />,
    title: 'Submit Application Form',
    description:
      'Download and complete the official application form or apply online through the portal. Attach all required documents. Ensure the form is submitted before the deadline for the relevant academic year.',
    note: 'Application Fee: ₹500 (non-refundable)',
    color: 'bg-emerald-600',
    lightBg: 'bg-emerald-50 border-emerald-200',
    accentText: 'text-emerald-700',
  },
  {
    step: '03',
    icon: <FiBook         className="w-5 h-5" />,
    title: 'Entrance Assessment',
    description:
      'Students applying for Grade I and above undergo a grade-appropriate entrance assessment covering language, numeracy, and general aptitude. This is a relaxed interaction, not a high-pressure exam.',
    note: 'Held every Saturday (by appointment)',
    color: 'bg-violet-600',
    lightBg: 'bg-violet-50 border-violet-200',
    accentText: 'text-violet-700',
  },
  {
    step: '04',
    icon: <FiCalendar     className="w-5 h-5" />,
    title: 'Parent Interaction',
    description:
      "A warm conversation between the parents and our Principal's office. We take time to understand the child's background, interests, and learning needs — and answer your questions about school life.",
    note: 'Scheduled post assessment',
    color: 'bg-blue-600',
    lightBg: 'bg-blue-50 border-blue-200',
    accentText: 'text-blue-700',
  },
  {
    step: '05',
    icon: <FiCheckSquare  className="w-5 h-5" />,
    title: 'Offer Letter & Fee Payment',
    description:
      'Selected candidates receive an official offer letter via email. Admission is confirmed upon payment of the first-term fee within the stipulated window. Seat reservation is on a first-come basis.',
    note: 'Offer valid for 7 business days',
    color: 'bg-teal-600',
    lightBg: 'bg-teal-50 border-teal-200',
    accentText: 'text-teal-700',
  },
  {
    step: '06',
    icon: <FiUserCheck    className="w-5 h-5" />,
    title: 'Welcome & Orientation',
    description:
      'Newly enrolled students and parents attend a full-day welcome orientation before the academic year begins. Meet teachers, explore facilities, collect uniforms and books, and get ready for Day One.',
    note: 'Held in the last week of March',
    color: 'bg-rose-600',
    lightBg: 'bg-rose-50 border-rose-200',
    accentText: 'text-rose-700',
  },
]

const AdmissionProcess = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold uppercase tracking-widest text-xs"
          >
            Step by Step
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-3"
          >
            Admission Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-base leading-relaxed font-light"
          >
            A transparent, welcoming, and streamlined journey from first enquiry
            to your child's first day at Arnab School.
          </motion.p>
        </div>

        {/* Steps — vertical timeline */}
        <div className="relative flex flex-col gap-0">

          {/* Vertical connector line */}
          <div className="absolute left-[22px] sm:left-[28px] top-10 bottom-10 w-px bg-gradient-to-b from-amber-300 via-emerald-300 to-rose-300 opacity-40" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-start gap-5 sm:gap-7 pb-10 last:pb-0"
            >
              {/* Step circle number */}
              <div className={`shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl ${step.color} flex flex-col items-center justify-center shadow-lg z-10`}>
                <span className="text-white text-[9px] font-black uppercase tracking-widest leading-none">{step.step}</span>
                <span className="text-white/80 mt-0.5">{step.icon}</span>
              </div>

              {/* Card */}
              <div className={`flex-1 rounded-2xl border ${step.lightBg} p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h3 className="text-emerald-950 font-extrabold text-lg leading-snug">{step.title}</h3>
                  <span className={`shrink-0 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white border border-slate-200 ${step.accentText} w-fit`}>
                    {step.note}
                  </span>
                </div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-800 to-amber-500 rounded-full mb-3" />
                <p className="text-slate-500 text-sm leading-relaxed font-light">{step.description}</p>

                {/* Arrow connector hint */}
                {i < steps.length - 1 && (
                  <div className={`flex items-center gap-1 mt-3 text-xs font-semibold ${step.accentText} opacity-60`}>
                    <FiArrowRight className="w-3 h-3" /> Next step follows
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AdmissionProcess
