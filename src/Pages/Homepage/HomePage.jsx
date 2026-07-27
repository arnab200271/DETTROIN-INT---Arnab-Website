import React from 'react'
import SwiperComponent from '../../Components/Swiper/Swiper'
import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiBookOpen, FiHeart, FiBriefcase, FiArrowRight } from 'react-icons/fi'
import StandardLearning from '../../Components/Global-StandardLearning/StandardLearning'
import Management from '../../Components/Management/Management'
import Guests from '../../Components/Guests/Guests'
import DiscoverBanner from '../../Components/DiscoverBanner/DiscoverBanner'

const HomePage = () => {
  // Stats Data
  const stats = [
    {
      id: 1,
      icon: <FiAward className="w-8 h-8 text-amber-500" />,
      number: '28+',
      label: 'Years Legacy',
      description: 'Educating and empowering generations since 1998.'
    },
    {
      id: 2,
      icon: <FiUsers className="w-8 h-8 text-amber-500" />,
      number: '250+',
      label: 'Expert Educators',
      description: 'Highly qualified mentors dedicated to student success.'
    },
    {
      id: 3,
      icon: <FiBookOpen className="w-8 h-8 text-amber-500" />,
      number: '30k+',
      label: 'Learners Base',
      description: 'Students who have pursued excellence in academics & sports.'
    },
    {
      id: 4,
      icon: <FiHeart className="w-8 h-8 text-amber-500" />,
      number: '20k+',
      label: 'Happy Parents',
      description: 'Trusted partnership in building holistic futures.'
    },
    {
      id: 5,
      icon: <FiBriefcase className="w-8 h-8 text-amber-500" />,
      number: '6,000+',
      label: 'Alumni Network',
      description: 'Graduates leading in premium universities & careers.'
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* 1. Hero Banner Slider Section */}
      <section className="relative w-full h-screen">
        <SwiperComponent />
      </section>

      {/* 2. Floating Stats Cards Section */}
      <section className="relative z-20 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-900/5 flex flex-col items-center text-center transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                {stat.icon}
              </div>
              
              {/* Count */}
              <span className="text-3xl font-extrabold text-emerald-950 tracking-tight">
                {stat.number}
              </span>
              
              {/* Label */}
              <span className="text-sm font-bold text-slate-700 mt-1 uppercase tracking-wider">
                {stat.label}
              </span>
              
              {/* Description */}
              <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Overlapping Editorial Highlight Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Collage Layout */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            
            {/* Background gold decorative grid */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/5 rounded-3xl border border-amber-500/10 -z-10 hidden sm:block" />
            
            {/* Collage Outer Container */}
            <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[4/3] flex items-center">
              
              {/* Image 1: Main Large Library/Hallway View */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-10/12 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop"
                  alt="School Campus Library"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Image 2: Smaller Offset Image Overlapping Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute right-0 bottom-[-20px] w-6/12 aspect-[1/1] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 group"
              >
                {/* Decorative Gold Frame inside hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400 rounded-xl transition-all duration-300 z-30 pointer-events-none" />
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop"
                  alt="Students Collaborating"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

            </div>
          </div>

          {/* Right Column: Editorial Text Card */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white shadow-xl shadow-slate-900/5 relative"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-10 w-20 h-1 bg-gradient-to-r from-emerald-800 to-amber-500 rounded-b-full" />
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
                  Featured Highlights
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight leading-tight">
                Nurturing Future Leaders Through Holistic Education
              </h2>
              
              {/* Accent Tag */}
              <p className="text-amber-600 font-bold text-sm tracking-wider uppercase mt-4 mb-2">
                #InspiredToExcel
              </p>

              {/* Description */}
              <p className="text-slate-600 mt-4 leading-relaxed text-sm md:text-base">
                At Arnab School, we believe that education extends beyond the classroom walls. Our programs encourage students to explore, create, and innovate. By balancing strict academic standards with rich visual arts, music, competitive athletics, and community service, we ensure each student develops a solid foundation for their lifelong journey.
              </p>

              {/* CTA button */}
              <div className="mt-8">
                <a
                  href="/admissions"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-emerald-950 hover:bg-emerald-900 rounded-full shadow-lg shadow-emerald-900/10 hover:shadow-emerald-950/20 active:scale-95 transition-all duration-300 group"
                >
                  <span>Admission Open 2026-27</span>
                  <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. Global-Standard Learning Section */}
      <StandardLearning />

      {/* 5. Board of Management Section */}
      <Management />

      {/* 6. Distinguished Guests Section */}
      <Guests />

      {/* 7. Discover The Future — CTA Banner */}
      <DiscoverBanner />

    </div>
  )
}

export default HomePage
