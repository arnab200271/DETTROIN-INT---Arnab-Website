import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlay, FiClock, FiX, FiVideo } from 'react-icons/fi'

/**
 * VideoGallery
 * ────────────
 * Displays school video highlights with play button overlay,
 * video details, and an interactive video modal player.
 */

const videoData = [
  {
    id: 1,
    title: 'Arnab School Campus Tour & Infrastructure Highlights',
    category: 'Campus Tour',
    duration: '4:15',
    date: 'Jan 2026',
    thumbnail: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Sample embed
    description: 'Take a 360-degree virtual tour of our 5-acre smart campus, sports complex, and robotics labs.',
  },
  {
    id: 2,
    title: 'Annual Sports Meet Highlights 2025',
    category: 'Sports',
    duration: '3:45',
    date: 'Dec 2025',
    thumbnail: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Exciting glimpses of sprint races, basketball finals, and march past at Arnab Sports Arena.',
  },
  {
    id: 3,
    title: 'Robotics & STEM Exhibition Showcase',
    category: 'Academics',
    duration: '5:20',
    date: 'Nov 2025',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Watch our junior engineers showcase automated rovers, AI models, and IoT projects.',
  },
  {
    id: 4,
    title: 'Grand Annual Cultural Gala Evening',
    category: 'Events',
    duration: '6:10',
    date: 'Oct 2025',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Musical performances, classical dances, and theatrical plays performed by student artists.',
  },
]

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Video Highlights</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-2">
            Watch Life at Arnab School
          </h2>
          <p className="text-slate-500 text-base font-light mt-3">
            Experience our school culture, events, and campus activities through high-definition video stories.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoData.map((vid, index) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedVideo(vid)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-amber-500 text-emerald-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-amber-400 transition-all duration-300">
                    <FiPlay className="w-7 h-7 ml-1 fill-current" />
                  </div>
                </div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-950/80 text-amber-400 border border-emerald-800 backdrop-blur-sm">
                    {vid.category}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 text-white text-xs font-medium backdrop-blur-sm">
                  <FiClock className="w-3 h-3 text-amber-400" />
                  {vid.duration}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="flex items-center gap-1"><FiVideo className="text-amber-500" /> Video Highlight</span>
                  <span>{vid.date}</span>
                </div>
                <h3 className="text-emerald-950 font-extrabold text-lg leading-snug group-hover:text-amber-600 transition-colors">
                  {vid.title}
                </h3>
                <p className="text-slate-500 text-sm font-light mt-2 line-clamp-2">
                  {vid.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <div
                className="relative max-w-4xl w-full bg-emerald-950 rounded-3xl overflow-hidden shadow-2xl border border-emerald-800"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-amber-500 hover:text-emerald-950 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>

                {/* Video Container */}
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`${selectedVideo.videoUrl}?autoplay=1`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>

                {/* Info Bar */}
                <div className="p-6 bg-emerald-950">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                    {selectedVideo.category} · {selectedVideo.duration}
                  </span>
                  <h3 className="text-white text-xl font-extrabold mt-1">{selectedVideo.title}</h3>
                  <p className="text-emerald-300/70 text-xs font-light mt-2">{selectedVideo.description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default VideoGallery
