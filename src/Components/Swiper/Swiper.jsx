import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const SwiperComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  // Slide Data
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop',
      tag: 'EXCELLENCE IN ACADEMICS',
      title: 'Shaping the Leaders and Innovators of Tomorrow',
      description: 'Welcome to Arnab School, where academic achievement is combined with holistic character development to nurture future-ready global citizens.',
      primaryCta: 'Apply Today',
      secondaryCta: 'Explore Programs',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop',
      tag: 'INNOVATIVE LEARNING',
      title: 'State-of-the-Art Science Labs & Tech Hubs',
      description: 'Dive into hands-on research and exploration. Our modern scientific labs encourage students to ask questions and design the future.',
      primaryCta: 'Virtual Tour',
      secondaryCta: 'View Curriculum',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1920&auto=format&fit=crop',
      tag: 'PRESTIGIOUS LEGACY',
      title: 'A Creative Environment for Personal Growth',
      description: 'Explore a vibrant campus that fosters physical, emotional, and creative development through sports tournaments, music, drama, and fine arts.',
      primaryCta: 'Admissions Open',
      secondaryCta: 'Campus Life',
    }
  ]

  // Animation variants for text slide-ins
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-950">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
        style={{
          '--swiper-navigation-color': '#fbbf24',
          '--swiper-pagination-color': '#d97706',
          '--swiper-pagination-bullet-inactive-color': '#ffffff',
          '--swiper-pagination-bullet-inactive-opacity': '0.4',
          '--swiper-pagination-bullet-size': '12px',
          '--swiper-pagination-bullet-horizontal-gap': '8px',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover scale-105 object-center"
              />
              {/* Premium Emerald/Charcoal Radial Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/85 via-slate-950/60 to-slate-950/30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            </div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  
                  {/* Animation controlled by activeIndex */}
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                      >
                        {/* Tagline */}
                        <motion.div variants={textVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                            {slide.tag}
                          </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1 
                          variants={textVariants}
                          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight"
                        >
                          {slide.title}
                        </motion.h1>

                        {/* Description */}
                        <motion.p 
                          variants={textVariants}
                          className="text-lg text-slate-200/90 max-w-2xl font-light leading-relaxed"
                        >
                          {slide.description}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div 
                          variants={textVariants}
                          className="pt-4 flex flex-wrap gap-4"
                        >
                          <a
                            href="/apply"
                            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-emerald-950 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 rounded-full shadow-lg shadow-amber-500/20 active:scale-95 transition-all duration-300 group"
                          >
                            <span>{slide.primaryCta}</span>
                            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </a>
                          <a
                            href="/about"
                            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 rounded-full backdrop-blur-sm active:scale-95 transition-all duration-300"
                          >
                            {slide.secondaryCta}
                          </a>
                        </motion.div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Dynamic Slide Counter Overlay (Top Right for Premium Touch) */}
      <div className="absolute right-8 bottom-8 z-10 hidden sm:flex items-center gap-3">
        <span className="text-sm font-bold text-amber-500 tracking-wider">
          0{activeIndex + 1}
        </span>
        <span className="w-12 h-px bg-white/20" />
        <span className="text-sm font-medium text-white/40">
          0{slides.length}
        </span>
      </div>
    </div>
  )
}

export default SwiperComponent
