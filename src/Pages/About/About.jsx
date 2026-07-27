import React from 'react'

// ─── Section Imports ───────────────────────────────────────────────────────────
// Each section is a self-contained, independently maintainable component.
import AboutHero    from './sections/AboutHero'
import Stats        from './sections/Stats'
import VisionMission from './sections/VisionMission'
import History      from './sections/History'
import Leadership   from './sections/Leadership'
import CoreValues   from './sections/CoreValues'

/**
 * About Page
 * ──────────
 * Assembles all About page sections in order.
 * To add/remove/reorder sections, simply add/remove/move the component below.
 */
const About = () => {
  return (
    <div className="flex flex-col">

      {/* 1. Hero Banner — page title, breadcrumb, background image */}
      <AboutHero />

      {/* 2. Stats Strip — key numbers at a glance */}
      <Stats />

      {/* 3. Vision, Mission & Core Promise — 3 gradient cards */}
      <VisionMission />

      {/* 4. Our History — alternating timeline with images */}
      <History />

      {/* 5. Leadership Messages — Chairman & Principal quotes */}
      <Leadership />

      {/* 6. Core Values — 6 icon cards */}
      <CoreValues />

    </div>
  )
}

export default About
