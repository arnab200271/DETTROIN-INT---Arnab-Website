import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin,
  FiMapPin, FiPhone, FiMail, FiArrowRight, FiSend,
  FiBookOpen, FiAward, FiHeart
} from 'react-icons/fi'

// ─── Footer Link Data ──────────────────────────────────────────────────────────

const quickLinks = [
  { label: 'Home',        to: '/'           },
  { label: 'About Us',   to: '/about'       },
  { label: 'Admissions', to: '/admissions'  },
  { label: 'Facilities', to: '/facilities'  },
  { label: 'Gallery',    to: '/gallery'     },
  { label: 'Contact',    to: '/contact'     },
]

const academicsLinks = [
  { label: 'Pre-Primary Wing',  to: '/academics/pre-primary' },
  { label: 'Primary School',    to: '/academics/primary'     },
  { label: 'Middle School',     to: '/academics/middle'      },
  { label: 'Senior Secondary',  to: '/academics/senior'      },
  { label: 'AI & Robotics Lab', to: '/academics/robotics'    },
  { label: 'SEEL Programme',    to: '/academics/seel'        },
]

const socialLinks = [
  { icon: <FiFacebook  className="w-4 h-4" />, href: '#', label: 'Facebook',  color: 'hover:bg-blue-600'   },
  { icon: <FiInstagram className="w-4 h-4" />, href: '#', label: 'Instagram', color: 'hover:bg-pink-600'   },
  { icon: <FiTwitter   className="w-4 h-4" />, href: '#', label: 'Twitter',   color: 'hover:bg-sky-500'    },
  { icon: <FiYoutube   className="w-4 h-4" />, href: '#', label: 'YouTube',   color: 'hover:bg-red-600'    },
  { icon: <FiLinkedin  className="w-4 h-4" />, href: '#', label: 'LinkedIn',  color: 'hover:bg-blue-700'   },
]

const contactInfo = [
  {
    icon: <FiMapPin className="w-4 h-4 shrink-0 mt-0.5" />,
    text: '123 Education Hub, Knowledge Square, New Delhi – 110001, India',
  },
  {
    icon: <FiPhone className="w-4 h-4 shrink-0" />,
    text: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: <FiMail className="w-4 h-4 shrink-0" />,
    text: 'info@arnabschool.edu',
    href: 'mailto:info@arnabschool.edu',
  },
]

// ─── Reusable Footer Column Heading ───────────────────────────────────────────
const FooterHeading = ({ children }) => (
  <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5 relative inline-block">
    {children}
    {/* Amber underline accent */}
    <span className="absolute -bottom-1.5 left-0 w-6 h-0.5 bg-amber-500 rounded-full" />
  </h3>
)

// ─── Reusable Footer Nav Link ──────────────────────────────────────────────────
const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="group flex items-center gap-2 text-emerald-300/70 hover:text-amber-400 text-sm transition-colors duration-300"
    >
      <FiArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      {children}
    </Link>
  </li>
)

// ─── Main Footer Component ─────────────────────────────────────────────────────
const Footer = () => {
  const [email, setEmail]       = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      // Reset feedback message after 4 seconds
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="bg-emerald-950 relative overflow-hidden">

      {/* ── Decorative background blobs ───────────────────────── */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl pointer-events-none" />

      {/* ════════════════════════════════════════════════════════
          TOP STRIPE — Newsletter CTA
      ════════════════════════════════════════════════════════ */}
      <div className="border-b border-emerald-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

            {/* Left label */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                <FiSend className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <p className="text-white font-bold text-base">Stay Updated</p>
                <p className="text-emerald-400/70 text-xs">
                  Get news, events & admissions straight to your inbox.
                </p>
              </div>
            </div>

            {/* Newsletter form */}
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 md:w-72 px-4 py-2.5 rounded-full bg-emerald-900/60 border border-emerald-700 text-sm text-white placeholder-emerald-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-emerald-950 text-sm font-bold shrink-0 shadow-lg shadow-amber-500/20 active:scale-95 transition-all duration-300"
              >
                {subscribed ? '✓ Done!' : 'Subscribe'}
              </button>
            </form>

          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          MAIN FOOTER BODY — 4 Columns
      ════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Col 1: Brand ─────────────────────────────────── */}
          <div className="lg:col-span-1 flex flex-col gap-5">

            {/* Logo + School name */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <FiBookOpen className="w-6 h-6 text-emerald-950" />
              </div>
              <div>
                <p className="text-white font-extrabold text-lg leading-none tracking-tight">
                  Arnab School
                </p>
                <p className="text-amber-400/80 text-[10px] font-semibold uppercase tracking-widest mt-0.5">
                  Est. 2000 · New Delhi
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-emerald-300/60 text-sm leading-relaxed font-light">
              Inspiring students to learn, grow, and lead through world-class
              education, holistic development, and a legacy of excellence.
            </p>

            {/* Accreditation badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-700/50 bg-emerald-900/40 w-fit">
              <FiAward className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-emerald-300/70 text-[10px] font-semibold uppercase tracking-wider">
                CBSE Affiliated · Reg. No. 12345
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`w-8 h-8 rounded-full border border-emerald-700 bg-emerald-900/50 text-emerald-400 ${s.color} hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-90`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ───────────────────────────── */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <FooterLink key={link.label} to={link.to}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Academics ─────────────────────────────── */}
          <div>
            <FooterHeading>Academics</FooterHeading>
            <ul className="flex flex-col gap-3">
              {academicsLinks.map((link) => (
                <FooterLink key={link.label} to={link.to}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact Info ──────────────────────────── */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* Icon bubble */}
                  <span className="w-7 h-7 rounded-lg bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-amber-400 shrink-0">
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-emerald-300/70 hover:text-amber-400 text-sm leading-relaxed transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-emerald-300/70 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            {/* Office Hours */}
            <div className="mt-6 p-3 rounded-xl bg-emerald-900/40 border border-emerald-700/30">
              <p className="text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                Office Hours
              </p>
              <p className="text-emerald-300/60 text-xs leading-relaxed">
                Mon – Fri: 8:00 AM – 5:00 PM<br />
                Saturday: 9:00 AM – 1:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          BOTTOM BAR — Copyright
      ════════════════════════════════════════════════════════ */}
      <div className="border-t border-emerald-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            {/* Copyright */}
            <p className="text-emerald-400/50 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Arnab School. All Rights Reserved. Designed with{' '}
              <FiHeart className="inline w-3 h-3 text-amber-500" /> for education.
            </p>

            {/* Legal links */}
            <div className="flex items-center gap-4">
              {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-emerald-400/40 hover:text-amber-400 text-xs transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
