import React from 'react'
import { motion } from 'framer-motion'
import { FiMessageSquare } from 'react-icons/fi'

// ─── Leadership Messages ───────────────────────────────────────────────────────
const leaders = [
  {
    id: 1,
    name: "Dr. Ramesh Arnab",
    role: "Chairman & Founder",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop",
    message:
      "When I founded Arnab School in 2000, my dream was simple — to create a place where every child could flourish. Twenty-five years on, I am humbled by what this community of students, teachers, and families has built together. Education is not just about marks; it is about character, courage, and compassion. That belief remains the soul of everything we do.",
    accent: 'border-amber-500',
  },
  {
    id: 2,
    name: "Mrs. Priya Sharma",
    role: "Principal",
    photo: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=500&auto=format&fit=crop",
    message:
      "At Arnab School, we believe that every student carries an extraordinary potential waiting to be unlocked. Our faculty works not just as teachers but as mentors — challenging students, celebrating their curiosity, and walking with them through every difficulty. I invite you to partner with us in this wonderful journey of growth and discovery.",
    accent: 'border-emerald-600',
  },
]

const Leadership = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold uppercase tracking-widest text-xs"
          >
            Voices of Leadership
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-3"
          >
            Message from Our Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-base leading-relaxed font-light"
          >
            Hear directly from the visionaries who guide Arnab School's journey every single day.
          </motion.p>
        </div>

        {/* Leader Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col sm:flex-row gap-6 p-7 rounded-3xl border-l-4 ${leader.accent} bg-slate-50/80 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Quote icon watermark */}
              <FiMessageSquare className="absolute top-5 right-6 w-10 h-10 text-slate-100" />

              {/* Photo */}
              <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                <img
                  src={leader.photo}
                  alt={leader.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/200x200/064e3b/d97706?text=${encodeURIComponent(leader.name[0])}`
                  }}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-emerald-950 font-extrabold text-lg leading-snug">
                    {leader.name}
                  </h3>
                  <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mt-0.5">
                    {leader.role}
                  </p>
                </div>

                {/* Accent divider */}
                <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-800 to-amber-500 rounded-full" />

                {/* Message */}
                <p className="text-slate-500 text-sm leading-relaxed font-light italic">
                  "{leader.message}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Leadership
