import React from 'react'
import { motion } from 'framer-motion'

// ─── Timeline Data ─────────────────────────────────────────────────────────────
const milestones = [
  {
    year: '2000',
    title: 'The Foundation',
    description:
      'Dr. Ramesh Arnab founded the school with just 120 students and a vision to blend global academic rigour with the richness of Indian values on a small campus in South Delhi.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=700&auto=format&fit=crop',
    side: 'left',
  },
  {
    year: '2005',
    title: 'CBSE Affiliation & First Batch',
    description:
      'Received full CBSE affiliation and celebrated our first graduating batch of Class X. The school had grown to 600 students with 40 faculty members, earning its first academic award.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=700&auto=format&fit=crop',
    side: 'right',
  },
  {
    year: '2010',
    title: 'New Campus & Sports Complex',
    description:
      'Inaugurated an expanded 5-acre campus featuring a modern sports complex, science wing, and digital library — fulfilling our commitment to world-class infrastructure.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=700&auto=format&fit=crop',
    side: 'left',
  },
  {
    year: '2016',
    title: 'AI Lab & Innovation Hub',
    description:
      'Launched India\'s first school-level dedicated AI & Robotics lab, partnering with leading tech organisations to introduce computational thinking from Grade 3 onwards.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=700&auto=format&fit=crop',
    side: 'right',
  },
  {
    year: '2023',
    title: 'National Excellence Award',
    description:
      'Honoured with the National School Excellence Award for academic outcomes, student welfare initiatives, and our pathbreaking SEEL (Social Emotional Ethical Learning) curriculum.',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=700&auto=format&fit=crop',
    side: 'left',
  },
]

const History = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold uppercase tracking-widest text-xs"
          >
            Two Decades of Excellence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-3"
          >
            Our Journey &amp; History
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-base leading-relaxed font-light"
          >
            From a single classroom to a nationally recognised institution — every milestone
            reflects our unwavering commitment to education.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical centre line — hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-200 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-16">
            {milestones.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col ${
                  item.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-8 md:gap-0`}
              >
                {/* ── Content half ──────────────────────────── */}
                <div className="w-full md:w-1/2 md:px-10">
                  <div
                    className={`bg-white rounded-3xl p-7 shadow-sm border border-slate-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-500 hover:-translate-y-1 ${
                      item.side === 'right' ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                    } max-w-md`}
                  >
                    {/* Year badge */}
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-600 text-xs font-extrabold uppercase tracking-widest mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-emerald-950 text-lg font-extrabold leading-snug tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-800 to-amber-500 rounded-full mb-4" />
                    <p className="text-slate-500 text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* ── Centre dot ────────────────────────────── */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-amber-500 shadow-md shadow-amber-200 z-10" />

                {/* ── Image half ────────────────────────────── */}
                <div className="w-full md:w-1/2 md:px-10">
                  <div
                    className={`aspect-video rounded-2xl overflow-hidden shadow-md border border-slate-100 ${
                      item.side === 'right' ? 'md:ml-auto' : 'md:mr-auto'
                    } max-w-md`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/700x400/064e3b/d97706?text=${encodeURIComponent(item.year)}`
                      }}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default History
