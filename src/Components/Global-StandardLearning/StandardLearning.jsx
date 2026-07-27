import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCpu, FiFeather, FiActivity, FiTrendingUp, FiCompass, FiArrowRight, FiCheck } from 'react-icons/fi'

const StandardLearning = () => {
  const [activeTab, setActiveTab] = useState(0)

  // Learning Paths Tab Data
  const learningPaths = [
    {
      id: 0,
      tabTitle: 'AI & Robotics',
      icon: <FiCpu className="w-5 h-5" />,
      title: 'Advanced AI & Robotics Program',
      subtitle: 'Coding, Building, and Artificial Intelligence',
      description: 'The future belongs to creators and problem-solvers. Our dedicated AI and Robotics lab introduces students to computational thinking, algorithms, and hands-on mechanical building.',
      highlights: [
        'Custom built STEM curriculum for all grade levels',
        'State-of-the-art robotics hardware kits',
        'Annual national-level coding hackathons and competitions',
        'Dedicated mentorship from industry technology experts'
      ],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
      ctaText: 'Explore Tech Lab',
      ctaLink: '/academics/robotics'
    },
    {
      id: 1,
      tabTitle: 'Co-Curricular Exposure',
      icon: <FiFeather className="w-5 h-5" />,
      title: 'Creative Arts & Cultural Expression',
      subtitle: 'Nurturing Artistic and Performing Talents',
      description: 'We believe that true education nurtures the soul. Our co-curricular programs expose students to visual arts, music classes, theatre, and public speaking, developing critical self-expression.',
      highlights: [
        'Professional art studios and recording facilities',
        'Expert guidance in instrumental and vocal music',
        'Bi-annual theatrical productions and exhibitions',
        'Public speaking, debating, and creative writing clubs'
      ],
      image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=800&auto=format&fit=crop',
      ctaText: 'Discover Arts Academy',
      ctaLink: '/academics/arts'
    },
    {
      id: 2,
      tabTitle: 'State-of-the-Art Sports',
      icon: <FiActivity className="w-5 h-5" />,
      title: 'Physical Education & Athletics Academy',
      subtitle: 'Fitness, Teamwork, and Competitive Sports',
      description: 'Physical well-being is fundamental to mental clarity and leadership. Our sports facilities include international-standard courts and professional training regimes that build sportsmanship.',
      highlights: [
        'Olympic-standard swimming pools and athletics tracks',
        'Professional coaching in basketball, soccer, and tennis',
        'Structured physical health and nutrition tracking',
        'Participation in inter-school tournaments and leagues'
      ],
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop',
      ctaText: 'View Sports Arena',
      ctaLink: '/facilities/sports'
    },
    {
      id: 3,
      tabTitle: 'Holistic Development',
      icon: <FiTrendingUp className="w-5 h-5" />,
      title: 'Holistic Growth & Leadership Training',
      subtitle: 'Fostering Responsibility, Integrity, and Empathy',
      description: 'Academic knowledge is complete only when balanced with character. Through leadership programs and social work, we ensure students learn real-world empathy and accountability.',
      highlights: [
        'Student council and student-led leadership seminars',
        'Community outreach and environmental action programs',
        'Career planning workshops and peer counseling',
        'Outdoor adventure, camping, and team-building trips'
      ],
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop',
      ctaText: 'Read Vision & Values',
      ctaLink: '/about/vision'
    },
    {
      id: 4,
      tabTitle: 'SEEL Learning',
      icon: <FiCompass className="w-5 h-5" />,
      title: 'Social, Emotional, & Ethical Learning',
      subtitle: 'Emotional Intelligence and Compassionate Leadership',
      description: 'Mental health and emotional intelligence form the core of a stable mind. Our SEEL initiatives cultivate self-awareness, compassion, stress-management techniques, and positive peer relationship skills.',
      highlights: [
        'Daily mindfulness and reflection periods',
        'Structured curriculum mapping emotional literacy',
        'Ethical decision-making and critical thinking modules',
        'Regular parent-teacher wellness alignment workshops'
      ],
      image: 'https://images.unsplash.com/photo-1491841651911-c44484b47f4c?q=80&w=800&auto=format&fit=crop',
      ctaText: 'Learn About SEEL',
      ctaLink: '/academics/seel'
    }
  ]

  // Active slide detail content animation
  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.3 } 
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      
      {/* Decorative subtle background shape */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold uppercase tracking-widest text-xs"
          >
            OUR LEARNING PATHWAYS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-950 tracking-tight mt-3 leading-tight"
          >
            Offering Global-Standard Learning
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-base md:text-lg leading-relaxed font-light"
          >
            A quick insight into our students' learning path, designed to match international academic benchmarks and foster competitive skills.
          </motion.p>
        </div>

        {/* Tab Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Tab Selectors (Vertical Stack on Desktop, Horizontal/Grid on Mobile) */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 w-full">
            {learningPaths.map((path) => {
              const isActive = activeTab === path.id
              return (
                <button
                  key={path.id}
                  onClick={() => setActiveTab(path.id)}
                  className={`flex items-center justify-between p-4.5 rounded-2xl border text-left w-full transition-all duration-300 group focus:outline-none ${
                    isActive 
                      ? 'bg-emerald-50/70 border-emerald-500/30 shadow-md shadow-emerald-900/5' 
                      : 'bg-white border-slate-100 hover:border-emerald-100 hover:bg-slate-50/50 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon frame */}
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isActive 
                        ? 'bg-emerald-800 text-amber-400' 
                        : 'bg-slate-50 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-700'
                    }`}>
                      {path.icon}
                    </div>
                    {/* Tab Title */}
                    <span className={`text-sm md:text-base font-bold tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-emerald-950' : 'text-slate-600 group-hover:text-slate-900'
                    }`}>
                      {path.tabTitle}
                    </span>
                  </div>

                  {/* Arrow Indicator on Hover/Active */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-amber-500 text-white scale-100 rotate-0' 
                      : 'bg-slate-50 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-emerald-700 scale-90'
                  }`}>
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              )
            })}
          </div>

          {/* RIGHT COLUMN: Active Tab Details Display Card */}
          <div className="lg:col-span-8 w-full min-h-[500px]">
            <AnimatePresence mode="wait">
              {learningPaths.map((path) => {
                if (activeTab !== path.id) return null
                return (
                  <motion.div
                    key={path.id}
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="bg-white/80 backdrop-blur-md rounded-3xl border border-slate-100 shadow-2xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-center"
                  >
                    {/* Left: Text Details */}
                    <div className="flex-1 space-y-5">
                      
                      <div className="space-y-1">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
                          {path.subtitle}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-emerald-950 tracking-tight leading-tight">
                          {path.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {path.description}
                      </p>

                      {/* Checklist Highlights */}
                      <ul className="space-y-2.5">
                        {path.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <span className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                              <FiCheck className="w-3 h-3 text-emerald-800" />
                            </span>
                            <span className="font-medium leading-normal">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Action */}
                      <div className="pt-4">
                        <a
                          href={path.ctaLink}
                          className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-emerald-850 hover:bg-emerald-900 rounded-full shadow-lg shadow-emerald-900/10 active:scale-95 transition-all duration-300 group"
                        >
                          <span>{path.ctaText}</span>
                          <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      </div>

                    </div>

                    {/* Right: Round Card Styled Image */}
                    <div className="w-full md:w-5/12 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-slate-100 relative group shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent z-10" />
                      <img
                        src={path.image}
                        alt={path.title}
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to a reliable placeholder if image fails to load
                          e.currentTarget.src = `https://placehold.co/600x750/064e3b/d97706?text=${encodeURIComponent(path.tabTitle)}`
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-center"
                      />
                    </div>

                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}

export default StandardLearning
