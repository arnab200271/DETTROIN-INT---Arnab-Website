import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiUser, FiArrowRight, FiBookOpen } from 'react-icons/fi'

/**
 * Blogs
 * ─────
 * Professional educational blog section displaying featured school articles,
 * insights on modern pedagogy, student achievements, and parenting guidance.
 */

const blogPosts = [
  {
    id: 1,
    title: 'Nurturing 21st Century Skills: Why AI & Robotics Belong in Primary School',
    category: 'Pedagogy',
    author: 'Dr. Ramesh Arnab',
    authorRole: 'Chairman',
    date: 'Feb 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Computational thinking is no longer an elective skill — it is the new literacy. Discover how early exposure to robotics fosters logical problem-solving in children.',
    featured: true,
  },
  {
    id: 2,
    title: 'The Role of Social-Emotional Learning (SEEL) in Student Mental Health',
    category: 'Student Welfare',
    author: 'Dr. Sunita Nair',
    authorRole: 'Student Counselor',
    date: 'Feb 02, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Academic excellence and emotional stability go hand in hand. Learn how our daily mindfulness and reflection modules build resilience in teenagers.',
    featured: false,
  },
  {
    id: 3,
    title: 'Preparing for CBSE Board Examinations: Proven Study Strategies for Students',
    category: 'Exam Tips',
    author: 'Mr. Aditya Verma',
    authorRole: 'Director of Academics',
    date: 'Jan 22, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Key time-management frameworks, revision schedules, and stress-busting habits to help Class X and XII students perform at their personal best.',
    featured: false,
  },
  {
    id: 4,
    title: 'Building Stronger Parent-Teacher Partnerships in the Digital Age',
    category: 'Parenting',
    author: 'Mrs. Priya Sharma',
    authorRole: 'Principal',
    date: 'Jan 10, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Consistent communication between home and school is the single greatest predictor of student happiness and academic success.',
    featured: false,
  },
]

const Blogs = () => {
  const featuredPost = blogPosts.find(p => p.featured)
  const regularPosts = blogPosts.filter(p => !p.featured)

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">School Journal</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-2">
            Articles, Insights &amp; Stories
          </h2>
          <p className="text-slate-500 text-base font-light mt-3">
            Read perspectives from our educators, leadership, and academic experts on modern learning.
          </p>
        </div>

        {/* Featured Blog Post Banner */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 group bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-7 relative min-h-[280px] lg:min-h-[380px] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/800x600/064e3b/d97706?text=${encodeURIComponent(featuredPost.category)}`
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full bg-amber-500 text-emerald-950 shadow-md">
                  ★ Featured Article
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 font-medium">
                  <span className="text-amber-600 font-bold uppercase tracking-wider">{featuredPost.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><FiCalendar /> {featuredPost.date}</span>
                </div>

                <h3 className="text-emerald-950 font-extrabold text-2xl leading-tight group-hover:text-amber-600 transition-colors">
                  {featuredPost.title}
                </h3>

                <p className="text-slate-500 text-sm font-light mt-4 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-950 text-amber-400 flex items-center justify-center font-bold text-xs">
                    {featuredPost.author[0]}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-950">{featuredPost.author}</p>
                    <p className="text-[10px] text-slate-400">{featuredPost.authorRole}</p>
                  </div>
                </div>

                <a
                  href="#read"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950 text-amber-400 text-xs font-bold hover:bg-emerald-900 transition-colors group/btn"
                >
                  <span>Read Article</span>
                  <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {regularPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/800x600/064e3b/d97706?text=${encodeURIComponent(post.category)}`
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-950/80 text-amber-400 border border-emerald-800 backdrop-blur-sm">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                    <span className="flex items-center gap-1"><FiCalendar /> {post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><FiClock /> {post.readTime}</span>
                  </div>

                  <h3 className="text-emerald-950 font-extrabold text-base leading-snug group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 text-xs font-light mt-3 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">{post.author}</span>
                  <a
                    href="#read"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors group/link"
                  >
                    Read More
                    <FiArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Blogs
