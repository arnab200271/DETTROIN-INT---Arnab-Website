import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiFile, FiUser, FiHome, FiShield, FiChevronDown, FiAlertCircle } from 'react-icons/fi'

/**
 * RequiredDocuments
 * ──────────────────
 * Categorised document checklist with expand/collapse per category.
 * Plus an important notice banner at the bottom.
 */

// ─── Document Categories ───────────────────────────────────────────────────────
const categories = [
  {
    id: 'child',
    icon: <FiUser  className="w-5 h-5" />,
    label: "Child's Documents",
    color: 'bg-amber-500',
    lightBg: 'bg-amber-50 border-amber-200',
    accentText: 'text-amber-700',
    documents: [
      'Birth Certificate (original + 1 photocopy)',
      'Aadhaar Card of the child (original + photocopy)',
      "Last school's Report Card / Mark Sheet (all terms)",
      'Transfer Certificate (TC) from previous school — attested',
      'Passport-sized photographs of the child (6 copies)',
      'Medical fitness certificate from a registered doctor',
      'Any disability/special needs documentation (if applicable)',
    ],
  },
  {
    id: 'parents',
    icon: <FiHome  className="w-5 h-5" />,
    label: "Parent / Guardian Documents",
    color: 'bg-emerald-600',
    lightBg: 'bg-emerald-50 border-emerald-200',
    accentText: 'text-emerald-700',
    documents: [
      "Father's Aadhaar Card (original + photocopy)",
      "Mother's Aadhaar Card (original + photocopy)",
      'Proof of current residence (utility bill / rental agreement — last 3 months)',
      'Passport-sized photographs of both parents (2 each)',
      'PAN Card of the fee-paying parent/guardian',
      'Marriage Certificate (if names differ from child records)',
    ],
  },
  {
    id: 'identity',
    icon: <FiShield className="w-5 h-5" />,
    label: 'Identity & Verification',
    color: 'bg-violet-600',
    lightBg: 'bg-violet-50 border-violet-200',
    accentText: 'text-violet-700',
    documents: [
      'Completed Admission Application Form (signed)',
      'Demand Draft / Online payment receipt for Application Fee (₹500)',
      'EWS / DG Category Certificate (if applying under reserved category)',
      'Caste Certificate — SC/ST/OBC (attested copy, if applicable)',
      'Army / Government employee certificate (for priority admission)',
      'Sibling currently enrolled at Arnab School — ID card photocopy',
    ],
  },
  {
    id: 'lateral',
    icon: <FiFile  className="w-5 h-5" />,
    label: 'Lateral Entry (Grade VI onwards)',
    color: 'bg-blue-600',
    lightBg: 'bg-blue-50 border-blue-200',
    accentText: 'text-blue-700',
    documents: [
      "Previous school's full academic records (last 2 years)",
      'TC & Migration Certificate (if changing board/state)',
      'CBSE Board Admit Card & Result (for Grade IX applicants)',
      'Class X Board Mark Sheet (for Grade XI applicants)',
      'Stream preference form for Grade XI (Science / Commerce / Humanities)',
    ],
  },
]

// ─── Document Category Card ────────────────────────────────────────────────────
const DocCategory = ({ cat }) => {
  const [open, setOpen] = useState(true)
  return (
    <div className={`rounded-2xl border ${cat.lightBg} overflow-hidden`}>
      {/* Header toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl ${cat.color} text-white flex items-center justify-center shrink-0`}>
            {cat.icon}
          </div>
          <span className="text-emerald-950 font-extrabold text-base">{cat.label}</span>
          <span className="text-xs text-slate-400 font-medium">({cat.documents.length} items)</span>
        </div>
        <FiChevronDown
          className={`w-4 h-4 ${cat.accentText} transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Document list */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 flex flex-col gap-2.5">
              {cat.documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className={`shrink-0 mt-1 w-1.5 h-1.5 rounded-full ${cat.color}`} />
                  {doc}
                </li>
              ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

const RequiredDocuments = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold uppercase tracking-widest text-xs"
          >
            Document Checklist
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-3"
          >
            Required Documents
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-base leading-relaxed font-light"
          >
            Please have all documents ready before submitting your application. Incomplete
            applications will not be processed.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <DocCategory cat={cat} />
            </motion.div>
          ))}
        </div>

        {/* Important notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex items-start gap-3 p-5 rounded-2xl bg-amber-50 border border-amber-300"
        >
          <FiAlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-800 font-bold text-sm">Important Notice</p>
            <p className="text-amber-700/80 text-sm leading-relaxed mt-1">
              All original documents must be presented for verification at the time of admission.
              Photocopies must be self-attested by the parent/guardian. Documents in a language other
              than English or Hindi must be accompanied by an official translated copy.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default RequiredDocuments
