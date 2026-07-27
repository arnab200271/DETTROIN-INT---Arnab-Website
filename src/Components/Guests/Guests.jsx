import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// ─── Distinguished Guest Data ──────────────────────────────────────────────────
// Replace photo URLs with real guest images as needed.
const guests = [
  {
    id: 1,
    name: 'Dr. A.P.J. Abdul Kalam',
    designation: 'Former President of India',
    description:
      'The Missile Man of India and beloved People\'s President visited Arnab School to inspire students with his vision of a developed nation powered by knowledge, science, and unity.',
    photo: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=900&auto=format&fit=crop',
    accolade: 'Bharat Ratna Awardee',
  },
  {
    id: 2,
    name: 'Sudha Murthy',
    designation: 'Author & Philanthropist',
    description:
      'The inspirational author and Chairperson of Infosys Foundation graced our campus, sharing timeless stories of perseverance, compassion, and the transformative power of education.',
    photo: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=900&auto=format&fit=crop',
    accolade: 'Padma Bhushan Awardee',
  },
  {
    id: 3,
    name: 'Dr. Shyama Chona',
    designation: 'Educationist & Social Leader',
    description:
      'A legendary educator and Padma Bhushan awardee who dedicated her life to inclusive education, Dr. Chona addressed our students with profound insights on empathy-driven leadership.',
    photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop',
    accolade: 'Padma Bhushan · Padma Shri',
  },
  {
    id: 4,
    name: 'Gopaldas Neeraj',
    designation: 'Renowned Poet & Lyricist',
    description:
      'The legendary Hindi poet and Padma Bhushan awardee enchanted students and faculty with his celebrated verses, urging every young mind to nurture creativity as a form of national service.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop',
    accolade: 'Padma Shri · Padma Bhushan',
  },
  {
    id: 5,
    name: 'Prof. Vikram Sarabhai',
    designation: 'Pioneer of Indian Space Program',
    description:
      'The visionary founder of ISRO and champion of scientific education whose spirit continues to inspire generations of young scientists and innovators nurtured at Arnab School.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900&auto=format&fit=crop',
    accolade: 'Padma Bhushan · Padma Vibhushan',
  },
  {
    id: 6,
    name: 'Amartya Sen',
    designation: 'Nobel Laureate — Economics',
    description:
      'The Nobel Prize-winning economist and philosopher graced our school with a lecture on equality, capability, and why a quality education is the single greatest instrument of human freedom.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=900&auto=format&fit=crop',
    accolade: 'Nobel Prize · Bharat Ratna',
  },
]

const Guests = () => {
  // Refs to programmatically control custom nav buttons
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="py-24 bg-emerald-950 relative overflow-hidden">

      {/* Ambient glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section Header ────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">

          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-amber-500 font-bold uppercase tracking-widest text-xs"
            >
              Our Prestigious Legacy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3 leading-tight"
            >
              Distinguished Guests at{' '}
              <span className="text-amber-400">Arnab School</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-emerald-300/80 mt-4 text-base leading-relaxed font-light"
            >
              Legendary leaders, Nobel laureates, and national icons who have
              graced our campus, shaping the values and ambitions of every student.
            </motion.p>
          </div>

          {/* Custom Navigation Buttons — top-right on desktop */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              ref={prevRef}
              aria-label="Previous guest"
              className="w-11 h-11 rounded-full border border-emerald-700 bg-emerald-900/60 text-emerald-300 hover:bg-amber-500 hover:border-amber-500 hover:text-emerald-950 transition-all duration-300 flex items-center justify-center shadow-md active:scale-90"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next guest"
              className="w-11 h-11 rounded-full border border-emerald-700 bg-emerald-900/60 text-emerald-300 hover:bg-amber-500 hover:border-amber-500 hover:text-emerald-950 transition-all duration-300 flex items-center justify-center shadow-md active:scale-90"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Swiper Carousel ───────────────────────────────────── */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          speed={700}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            // Wire up the custom nav button refs to Swiper
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}
          breakpoints={{
            0:   { slidesPerView: 1,   spaceBetween: 16 },
            640: { slidesPerView: 2,   spaceBetween: 20 },
            1024:{ slidesPerView: 3,   spaceBetween: 24 },
          }}
          style={{
            '--swiper-pagination-color': '#d97706',
            '--swiper-pagination-bullet-inactive-color': '#6ee7b7',
            '--swiper-pagination-bullet-inactive-opacity': '0.35',
            '--swiper-pagination-bullet-size': '10px',
            '--swiper-pagination-bullet-horizontal-gap': '6px',
          }}
          className="!pb-12"   /* room for pagination dots below cards */
        >
          {guests.map((guest) => (
            <SwiperSlide key={guest.id}>
              {/* ─ Guest Card ─ */}
              <div className="group relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-emerald-800/40 cursor-pointer">

                {/* Background Photo */}
                <img
                  src={guest.photo}
                  alt={guest.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/900x1200/064e3b/d97706?text=${encodeURIComponent(guest.name[0])}`
                  }}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark gradient — always visible from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/50 to-transparent" />

                {/* Hover: secondary overlay for extra polish */}
                <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Accolade badge — top-left */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 backdrop-blur-sm">
                  <FiStar className="w-3 h-3 text-amber-400" />
                  <span className="text-[10px] font-bold text-amber-300 tracking-wider">
                    {guest.accolade}
                  </span>
                </div>

                {/* Text content — pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">

                  {/* Name */}
                  <h3 className="text-xl font-extrabold text-white leading-tight tracking-tight">
                    {guest.name}
                  </h3>

                  {/* Designation */}
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mt-1">
                    {guest.designation}
                  </p>

                  {/* Divider */}
                  <div className="w-8 h-0.5 bg-amber-500 rounded-full my-3 opacity-70" />

                  {/* Description — fades in on hover */}
                  <p className="text-emerald-200/80 text-xs leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                    {guest.description}
                  </p>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default Guests
