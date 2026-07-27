import React from 'react'
import { motion } from 'framer-motion'
import { FiMonitor, FiBook, FiActivity, FiCpu, FiCamera, FiMusic } from 'react-icons/fi'

/**
 * AcademicFacilities
 * ──────────────────
 * Showcases key school facilities with image cards and icon badges.
 * 3-column grid on desktop, 2 on tablet, 1 on mobile.
 */

// ─── Facilities Data ───────────────────────────────────────────────────────────
const facilities = [
  {
    id: 1,
    icon: <FiCpu     className="w-5 h-5" />,
    name: 'AI & Robotics Lab',
    description: 'Industry-grade robotics kits, Raspberry Pi workstations, and a dedicated AI learning environment for Grades 3–12.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=700&auto=format&fit=crop',
    tag: 'STEM Innovation',
    tagColor: 'bg-violet-100 text-violet-700',
  },
  {
    id: 2,
    icon: <FiBook    className="w-5 h-5" />,
    name: 'Digital Library',
    description: 'A 10,000+ volume collection supplemented with e-books, curated databases, and a silent reading lounge.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=700&auto=format&fit=crop',
    tag: 'Knowledge Hub',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    id: 3,
    icon: <FiMonitor className="w-5 h-5" />,
    name: 'Smart Classrooms',
    description: 'Every classroom is equipped with interactive flat-panel displays, cloud-connected learning management systems, and high-speed Wi-Fi.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=700&auto=format&fit=crop',
    tag: 'EdTech Ready',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 4,
    icon: <FiActivity className="w-5 h-5" />,
    name: 'Science Laboratories',
    description: 'Fully equipped Physics, Chemistry, and Biology labs with safety-certified equipment and digital instrumentation for real experimentation.',
    image: 'https://images.unsplash.com/photo-1532094349884-543559741776?q=80&w=700&auto=format&fit=crop',
    tag: 'Research Grade',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 5,
    icon: <FiCamera  className="w-5 h-5" />,
    name: 'Media & Design Studio',
    description: 'A professional-grade studio for photography, video production, podcasting, and graphic design — for students who tell stories through media.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=700&auto=format&fit=crop',
    tag: 'Creative Arts',
    tagColor: 'bg-rose-100 text-rose-700',
  },
  {
    id: 6,
    icon: <FiMusic   className="w-5 h-5" />,
    name: 'Performing Arts Centre',
    description: 'A 400-seat auditorium with professional stage lighting, acoustics, music practice rooms, and a dedicated dance studio.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=700&auto=format&fit=crop',
    tag: 'Arts & Culture',
    tagColor: 'bg-pink-100 text-pink-700',
  },
]

const AcademicFacilities = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold uppercase tracking-widest text-xs"
          >
            World-Class Infrastructure
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-3"
          >
            Academic Facilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-base leading-relaxed font-light"
          >
            Purpose-built spaces that bring every subject to life — from cutting-edge
            science labs to immersive arts studios.
          </motion.p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {facilities.map((fac, i) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1.5 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src={fac.image}
                  alt={fac.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/700x300/064e3b/d97706?text=${encodeURIComponent(fac.name)}`
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Tag */}
                <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${fac.tagColor}`}>
                  {fac.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-3">
                {/* Icon + Name */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950 text-amber-400 flex items-center justify-center shrink-0">
                    {fac.icon}
                  </div>
                  <h3 className="text-emerald-950 font-extrabold text-base leading-snug tracking-tight">
                    {fac.name}
                  </h3>
                </div>

                {/* Divider */}
                <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-800 to-amber-500 rounded-full" />

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {fac.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AcademicFacilities
