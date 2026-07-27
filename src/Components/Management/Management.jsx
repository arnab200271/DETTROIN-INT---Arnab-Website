import React from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiMail, FiAward } from 'react-icons/fi'

// ─── Management Member Data ────────────────────────────────────────────────────
// Add, remove, or update members here — the grid auto-adapts.
const managementMembers = [
  {
    id: 1,
    name: 'Dr. Ramesh Arnab',
    designation: 'Chairman & Founder',
    description:
      'A visionary educator with 35+ years of experience, dedicated to building an institution that blends global academic standards with Indian values.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
    email: 'chairman@arnabschool.edu',
    badge: 'Founder',
  },
  {
    id: 2,
    name: 'Mrs. Priya Sharma',
    designation: 'Principal',
    description:
      'An accomplished academician who champions progressive pedagogy, student well-being, and holistic curriculum design across all grades.',
    photo: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
    email: 'principal@arnabschool.edu',
    badge: 'Principal',
  },
  {
    id: 3,
    name: 'Mr. Aditya Verma',
    designation: 'Director of Academics',
    description:
      'With expertise in curriculum architecture and STEM education, he drives academic excellence through data-informed teaching strategies.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
    email: 'academics@arnabschool.edu',
    badge: null,
  },
  {
    id: 4,
    name: 'Dr. Sunita Nair',
    designation: 'Head of Student Affairs',
    description:
      'A child psychologist and mentor who oversees student wellness programs, counseling services, and co-curricular leadership development.',
    photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
    email: 'studentaffairs@arnabschool.edu',
    badge: null,
  },
  {
    id: 5,
    name: 'Mr. Kiran Mehta',
    designation: 'Director of Infrastructure',
    description:
      'Oversees campus development, technology integration, and smart-classroom initiatives, ensuring a world-class learning environment.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
    email: 'infra@arnabschool.edu',
    badge: null,
  },
  {
    id: 6,
    name: 'Mrs. Ananya Bose',
    designation: 'Head of Co-Curriculars',
    description:
      'A celebrated performing arts graduate who has built one of the region\'s finest school arts and sports programs from the ground up.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
    email: 'cocurricular@arnabschool.edu',
    badge: null,
  },
]

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

const Management = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section Header ────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold uppercase tracking-widest text-xs"
          >
            Leadership & Vision
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-950 tracking-tight mt-3 leading-tight"
          >
            Board of Management
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-base md:text-lg leading-relaxed font-light"
          >
            Meet the dedicated leaders who shape Arnab School's vision, drive academic excellence,
            and build a legacy of holistic education for every student.
          </motion.p>
        </div>

        {/* ── Management Cards Grid ─────────────────────────────── */}
        {/* Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementMembers.map((member, i) => (
            <motion.div
              key={member.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="group relative bg-slate-50/60 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* ─ Top Image Area ─ */}
              <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-emerald-950 to-slate-900">

                {/* Subtle grid decoration behind photo */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #d97706 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* Photo */}
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/400x320/064e3b/d97706?text=${encodeURIComponent(member.name[0])}`
                  }}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Gradient bleed from bottom of photo into card body */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/90 via-transparent to-transparent" />

                {/* Founder / Special badge */}
                {member.badge && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500 text-emerald-950 text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                    <FiAward className="w-3 h-3" />
                    {member.badge}
                  </div>
                )}
              </div>

              {/* ─ Card Body ─ */}
              <div className="px-6 pb-7 pt-4 flex flex-col gap-3">

                {/* Name & Designation */}
                <div>
                  <h3 className="text-lg font-extrabold text-emerald-950 leading-snug tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mt-0.5">
                    {member.designation}
                  </p>
                </div>

                {/* Accent divider */}
                <div className="w-10 h-0.5 bg-gradient-to-r from-emerald-800 to-amber-500 rounded-full" />

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed font-light line-clamp-3">
                  {member.description}
                </p>

                {/* Contact / Social Links */}
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name} on LinkedIn`}
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-emerald-800 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-300 shadow-sm"
                  >
                    <FiLinkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-200 hover:bg-amber-50 transition-all duration-300 shadow-sm"
                  >
                    <FiMail className="w-3.5 h-3.5" />
                  </a>
                  {/* Designation pill */}
                  <span className="ml-auto text-[10px] font-semibold text-slate-400 border border-slate-100 bg-white px-2.5 py-1 rounded-full">
                    Management
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Management
