import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiCamera, FiVideo, FiCalendar, FiBookOpen } from 'react-icons/fi'

// ─── Section Imports ───────────────────────────────────────────────────────────
import GalleryHero  from './sections/GalleryHero'
import PhotoGallery from './sections/PhotoGallery'
import VideoGallery from './sections/VideoGallery'
import SchoolEvents from './sections/SchoolEvents'
import Blogs        from './sections/Blogs'

// ─── Shared Components ─────────────────────────────────────────────────────────
import PageTabNav from '../../Components/PageTabNav/PageTabNav'

// ─── Tab Definitions ───────────────────────────────────────────────────────────
const GALLERY_TABS = [
  { id: 'photo',  label: 'Photo Gallery',  icon: <FiCamera   className="w-4 h-4" /> },
  { id: 'video',  label: 'Video Gallery',  icon: <FiVideo    className="w-4 h-4" /> },
  { id: 'events', label: 'School Events',  icon: <FiCalendar className="w-4 h-4" /> },
  { id: 'blogs',  label: 'Blogs',          icon: <FiBookOpen className="w-4 h-4" /> },
]

// ─── Animated Content Panel ────────────────────────────────────────────────────
const panelVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.25 } },
}

/**
 * Gallery Page
 * ────────────
 * - Hero Banner (always visible)
 * - PageTabNav → switches between Photo Gallery | Video Gallery | School Events | Blogs
 */
const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photo')

  // Map tab id to rendered section
  const tabContent = {
    photo:  <PhotoGallery />,
    video:  <VideoGallery />,
    events: <SchoolEvents />,
    blogs:  <Blogs />,
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* 1. Hero Banner ─────────────────────────────────────── */}
      <GalleryHero />

      {/* 2. Tab Navigation Bar ──────────────────────────────── */}
      <PageTabNav
        tabs={GALLERY_TABS}
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

export default Gallery
