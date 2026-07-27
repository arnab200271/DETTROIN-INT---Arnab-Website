import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiList, FiCheckCircle, FiFileText, FiDollarSign, FiSend } from 'react-icons/fi'

// ─── Section Imports ───────────────────────────────────────────────────────────
import AdmissionHero     from './sections/AdmissionHero'
import AdmissionProcess  from './sections/AdmissionProcess'
import Eligibility       from './sections/Eligibility'
import RequiredDocuments from './sections/RequiredDocuments'
import FeeStructure      from './sections/FeeStructure'
import ApplyNow          from './sections/ApplyNow'

// ─── Shared Components ─────────────────────────────────────────────────────────
import PageTabNav from '../../Components/PageTabNav/PageTabNav'

// ─── Tab Definitions ───────────────────────────────────────────────────────────
const ADMISSION_TABS = [
  { id: 'process',    label: 'Admission Process',  icon: <FiList        className="w-4 h-4" /> },
  { id: 'eligibility',label: 'Eligibility',        icon: <FiCheckCircle className="w-4 h-4" /> },
  { id: 'documents',  label: 'Required Documents', icon: <FiFileText   className="w-4 h-4" /> },
  { id: 'fees',       label: 'Fee Structure',      icon: <FiDollarSign className="w-4 h-4" /> },
  { id: 'apply',      label: 'Apply Now',          icon: <FiSend        className="w-4 h-4" /> },
]

// ─── Animated Content Panel ────────────────────────────────────────────────────
const panelVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.25 } },
}

/**
 * Admission Page
 * ───────────────
 * - Hero Banner (always visible)
 * - PageTabNav → switches between Admission Process | Eligibility | Required Documents | Fee Structure | Apply Now
 */
const Admission = () => {
  const [activeTab, setActiveTab] = useState('process')

  // Map each tab id to its section component
  const tabContent = {
    process:     <AdmissionProcess />,
    eligibility: <Eligibility />,
    documents:   <RequiredDocuments />,
    fees:        <FeeStructure />,
    apply:       <ApplyNow />,
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">

      {/* 1. Hero Banner ─────────────────────────────────────── */}
      <AdmissionHero />

      {/* 2. Tab Navigation Bar ──────────────────────────────── */}
      <PageTabNav
        tabs={ADMISSION_TABS}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* 3. Animated Tab Panel ──────────────────────────────── */}
      <div className="min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  )
}

export default Admission
