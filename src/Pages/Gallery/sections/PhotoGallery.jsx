import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMaximize2, FiX, FiChevronLeft, FiChevronRight, FiFilter } from 'react-icons/fi'

/**
 * PhotoGallery
 * ────────────
 * Interactive photo gallery with category filter tabs, hover effects,
 * and a full-screen Lightbox modal preview with next/prev controls.
 */

const categories = ['All', 'Campus', 'Academics', 'Sports', 'Events', 'Arts']

const photoData = [
  {
    id: 1,
    category: 'Campus',
    title: 'Main Academic Building & Quadrangle',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    caption: 'The heart of our 5-acre campus in New Delhi.',
  },
  {
    id: 2,
    category: 'Academics',
    title: 'Robotics & Artificial Intelligence Lab',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    caption: 'Students building autonomous bots during STEM workshop.',
  },
  {
    id: 3,
    category: 'Sports',
    title: 'Annual Inter-House Athletics Meet',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop',
    caption: 'Track and field competition at our Olympic-standard stadium.',
  },
  {
    id: 4,
    category: 'Events',
    title: 'Annual Cultural Festival & Gala Night',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    caption: 'Vibrant musical performances celebrating national heritage.',
  },
  {
    id: 5,
    category: 'Arts',
    title: 'Visual Arts Exhibition & Pottery Workshop',
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=800&auto=format&fit=crop',
    caption: 'Creative self-expression at our dedicated fine arts studio.',
  },
  {
    id: 6,
    category: 'Campus',
    title: 'Digital Resource Library & Reading Lounge',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop',
    caption: 'Quiet research and reading space for students.',
  },
  {
    id: 7,
    category: 'Academics',
    title: 'Senior Chemistry Laboratory Practical',
    image: 'https://images.unsplash.com/photo-1532094349884-543559741776?q=80&w=800&auto=format&fit=crop',
    caption: 'Hands-on experimentation under expert supervision.',
  },
  {
    id: 8,
    category: 'Sports',
    title: 'Inter-School Basketball Championship',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
    caption: 'Arnab School Tigers winning the regional trophy.',
  },
  {
    id: 9,
    category: 'Events',
    title: 'Science & Innovation Exhibition',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    caption: 'Innovations presented by student researchers to guest judges.',
  },
]

const PhotoGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredPhotos = activeFilter === 'All'
    ? photoData
    : photoData.filter(p => p.category === activeFilter)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length)
    }
  }

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">
            <FiFilter /> Filter:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-emerald-950 text-amber-400 shadow-md scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={photo.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500 text-emerald-950 shadow-sm">
                    {photo.category}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiMaximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-extrabold text-base leading-snug">{photo.title}</h3>
                  <p className="text-emerald-300/80 text-xs font-light mt-1 line-clamp-1">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div
                className="relative max-w-4xl w-full bg-emerald-950 rounded-3xl overflow-hidden shadow-2xl border border-emerald-800"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-amber-500 hover:text-emerald-950 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>

                {/* Image */}
                <div className="relative aspect-[16/10] bg-black">
                  <img
                    src={filteredPhotos[lightboxIndex].image}
                    alt={filteredPhotos[lightboxIndex].title}
                    className="w-full h-full object-contain"
                  />
                  {/* Prev/Next Controls */}
                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-amber-500 hover:text-emerald-950 transition-colors"
                  >
                    <FiChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-amber-500 hover:text-emerald-950 transition-colors"
                  >
                    <FiChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Caption Bar */}
                <div className="p-6 bg-emerald-950 border-t border-emerald-800 flex items-center justify-between">
                  <div>
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                      {filteredPhotos[lightboxIndex].category}
                    </span>
                    <h3 className="text-white text-lg font-extrabold mt-0.5">
                      {filteredPhotos[lightboxIndex].title}
                    </h3>
                    <p className="text-emerald-300/70 text-xs mt-1 font-light">
                      {filteredPhotos[lightboxIndex].caption}
                    </p>
                  </div>
                  <span className="text-slate-400 text-xs">
                    {lightboxIndex + 1} / {filteredPhotos.length}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default PhotoGallery
