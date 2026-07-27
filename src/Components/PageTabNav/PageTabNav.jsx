import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * PageTabNav — Reusable Animated Tab Navigation Bar
 * ──────────────────────────────────────────────────
 * Props:
 *   tabs       {Array<{ id: string, label: string, icon?: JSX }>}
 *   activeTab  {string}  — currently active tab id
 *   onChange   {(id: string) => void} — callback when a tab is clicked
 *
 * Features:
 *  - Sliding amber underline indicator synced to the active tab
 *  - Horizontally scrollable on mobile (no overflow clip on desktop)
 *  - Auto-scrolls the active tab button into view on mobile
 */
const PageTabNav = ({ tabs, activeTab, onChange }) => {
  const containerRef = useRef(null)
  const activeRef    = useRef(null)

  // Auto-scroll the active tab button into view on mobile when it changes
  useEffect(() => {
    if (activeRef.current && containerRef.current) {
      const container = containerRef.current
      const btn       = activeRef.current
      const scrollLeft = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }, [activeTab])

  return (
    <div className="sticky top-[64px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Horizontally scrollable on mobile — flex row on desktop */}
        <div
          ref={containerRef}
          className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1"
          style={{ scrollbarWidth: 'none' }}
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                ref={isActive ? activeRef : null}
                onClick={() => onChange(tab.id)}
                aria-selected={isActive}
                role="tab"
                className={`
                  relative flex items-center gap-2 whitespace-nowrap px-5 py-4
                  text-sm font-semibold transition-colors duration-300 shrink-0
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 rounded-t-lg
                  ${isActive
                    ? 'text-emerald-950'
                    : 'text-slate-400 hover:text-slate-700'
                  }
                `}
              >
                {/* Icon (optional) */}
                {tab.icon && (
                  <span className={`transition-colors duration-300 ${isActive ? 'text-amber-500' : 'text-slate-400'}`}>
                    {tab.icon}
                  </span>
                )}

                {/* Label */}
                {tab.label}

                {/* Sliding amber underline indicator */}
                {isActive && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PageTabNav
