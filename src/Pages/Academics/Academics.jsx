import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiGrid, FiBookOpen, FiZap, FiClipboard } from 'react-icons/fi'

// ─── Section Imports ───────────────────────────────────────────────────────────
import AcademicsHero      from './sections/AcademicsHero'
import Programs           from './sections/Programs'
import Curriculum         from './sections/Curriculum'
import LearningApproach   from './sections/LearningApproach'
import AcademicFacilities from './sections/AcademicFacilities'
import AssessmentSystem   from './sections/AssessmentSystem'

// ─── Shared Components ─────────────────────────────────────────────────────────
import PageTabNav from '../../Components/PageTabNav/PageTabNav'

// ─── Tab Definitions ───────────────────────────────────────────────────────────
const ACADEMICS_TABS = [
  { id: 'programs',    label: 'Academic Programs',  icon: <FiGrid       className="w-4 h-4" /> },
  { id: 'curriculum',  label: 'Curriculum',          icon: <FiBookOpen   className="w-4 h-4" /> },
  { id: 'learning',    label: 'Learning Approach',   icon: <FiZap        className="w-4 h-4" /> },
  { id: 'assessment',  label: 'Assessment System',   icon: <FiClipboard  className="w-4 h-4" /> },
]

// ─── Animated Content Panel ────────────────────────────────────────────────────
const panelVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.25 } },
}

/**
 * Academics Page
 * ──────────────
 * - Hero Banner (always visible)
 * - PageTabNav → switches between Programs | Curriculum | Learning Approach | Assessment System
 *
 * Note: AcademicFacilities is rendered inside the "Learning Approach" tab
 * since facilities are closely tied to how learning is delivered.
 */
const Academics = () => {
  const [activeTab, setActiveTab] = useState('programs')

  // Map each tab id to its rendered section(s)
  const tabContent = {
    programs:   <Programs />,
    curriculum: <Curriculum />,
    learning: (
      <>
        <LearningApproach />
        <AcademicFacilities />
      </>
    ),
    assessment: <AssessmentSystem />,
  }

  return (
    <div className="flex flex-col">

      {/* 1. Hero Banner ─────────────────────────────────────── */}
      <AcademicsHero />

      {/* 2. Tab Navigation Bar ──────────────────────────────── */}
      <PageTabNav
        tabs={ACADEMICS_TABS}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* 3. Animated Tab Panel ──────────────────────────────── */}
      <div className="min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}         /* key change triggers exit→enter animation */
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

export default Academics
