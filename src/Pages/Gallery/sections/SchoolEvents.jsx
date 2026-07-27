import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiMapPin, FiArrowRight, FiTag } from 'react-icons/fi'

/**
 * SchoolEvents
 * ────────────
 * Showcases upcoming and recent school events with date badges, location,
 * time, category tags, and descriptive event cards.
 */

const eventsData = [
  {
    id: 1,
    day: '15',
    month: 'MAR',
    year: '2026',
    status: 'Upcoming',
    title: 'Annual Science & Technology Innovation Fair 2026',
    category: 'Academics',
    time: '09:00 AM – 03:30 PM',
    location: 'Main Auditorium & STEM Complex',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    description: 'Over 200 student-led research projects, AI models, and robotics demonstrations presented to eminent scientists and guest evaluators.',
  },
  {
    id: 2,
    day: '28',
    month: 'MAR',
    year: '2026',
    status: 'Upcoming',
    title: 'Inter-School Invitational Football Tournament',
    category: 'Sports',
    time: '08:30 AM – 04:00 PM',
    location: 'Arnab Sports Complex Arena',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop',
    description: 'Top 16 school teams across the NCR competing for the prestigious Arnab Founders Trophy in a 3-day tournament.',
  },
  {
    id: 3,
    day: '10',
    month: 'FEB',
    year: '2026',
    status: 'Past',
    title: 'National Model United Nations (MUN) Conference',
    category: 'Leadership',
    time: '10:00 AM – 05:00 PM',
    location: 'Conference Centre & Library Hall',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    description: 'Student delegates debating global climate policies and international diplomacy under UN committee guidelines.',
  },
  {
    id: 4,
    day: '20',
    month: 'JAN',
    year: '2026',
    status: 'Past',
    title: 'Spring Performing Arts & Music Showcase',
    category: 'Arts & Culture',
    time: '05:00 PM – 08:00 PM',
    location: 'Open Air Amphitheatre',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    description: 'An enchanting evening of classical music, fusion band performances, and contemporary dance productions.',
  },
]

const SchoolEvents = () => {
  const [filter, setFilter] = useState('All')

  const filteredEvents = filter === 'All'
    ? eventsData
    : eventsData.filter(e => e.status === filter)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">School Calendar</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-2">
              School Events &amp; Celebrations
            </h2>
            <p className="text-slate-500 text-base font-light mt-2">
              Stay connected with upcoming academic, athletic, and cultural happenings.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            {['All', 'Upcoming', 'Past'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  filter === f
                    ? 'bg-emerald-950 text-amber-400 shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f} Events
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((evt, i) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
            >
              {/* Image & Date Badge */}
              <div className="relative w-full sm:w-5/12 aspect-[4/3] sm:aspect-auto shrink-0 overflow-hidden">
                <img
                  src={evt.image}
                  alt={evt.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 to-transparent sm:hidden" />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-emerald-950 text-white rounded-2xl p-2.5 text-center min-w-[55px] shadow-lg border border-emerald-800">
                  <span className="block text-2xl font-black text-amber-400 leading-none">{evt.day}</span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-200 mt-1">{evt.month}</span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 sm:top-auto sm:bottom-4">
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm ${
                    evt.status === 'Upcoming' ? 'bg-amber-500 text-emerald-950' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {evt.status}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-600 mb-2">
                    <FiTag /> {evt.category}
                  </div>
                  <h3 className="text-emerald-950 font-extrabold text-lg leading-snug hover:text-amber-600 transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-slate-500 text-xs font-light mt-2 leading-relaxed line-clamp-3">
                    {evt.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex flex-col gap-2 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <FiClock className="text-amber-500 shrink-0" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-emerald-600 shrink-0" />
                    <span className="truncate">{evt.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SchoolEvents
