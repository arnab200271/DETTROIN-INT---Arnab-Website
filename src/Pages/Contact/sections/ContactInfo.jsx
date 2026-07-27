import React from 'react'
import { motion } from 'framer-motion'
import {
  FiMapPin, FiPhone, FiMail, FiClock,
  FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiLinkedin
} from 'react-icons/fi'

/**
 * ContactInfo
 * ───────────
 * Responsive cards detailing school address, telephone numbers, email addresses,
 * office hours, and official social media profiles.
 */

const contactDetails = [
  {
    id: 'address',
    icon: <FiMapPin className="w-6 h-6" />,
    title: 'Campus Address',
    accentColor: 'border-emerald-500 text-emerald-700 bg-emerald-50',
    badge: 'bg-emerald-100 text-emerald-800',
    details: [
      'Arnab School Campus, 123 Education Hub',
      'Knowledge Square, Sector 4',
      'New Delhi – 110001, India',
    ],
    actionText: 'Get Directions',
    actionUrl: 'https://maps.google.com',
  },
  {
    id: 'phone',
    icon: <FiPhone className="w-6 h-6" />,
    title: 'Phone Numbers',
    accentColor: 'border-amber-500 text-amber-700 bg-amber-50',
    badge: 'bg-amber-100 text-amber-800',
    details: [
      'Admissions Helpline: +91 98765 43210',
      'Front Desk / Admin: +91 11 2345 6789',
      'Accounts Department: +91 11 2345 6790',
    ],
    actionText: 'Call Helpline',
    actionUrl: 'tel:+919876543210',
  },
  {
    id: 'email',
    icon: <FiMail className="w-6 h-6" />,
    title: 'Email Addresses',
    accentColor: 'border-violet-500 text-violet-700 bg-violet-50',
    badge: 'bg-violet-100 text-violet-800',
    details: [
      'Admissions: admissions@arnabschool.edu',
      'General Enquiries: info@arnabschool.edu',
      'Principal\'s Office: principal@arnabschool.edu',
    ],
    actionText: 'Send Email',
    actionUrl: 'mailto:info@arnabschool.edu',
  },
  {
    id: 'hours',
    icon: <FiClock className="w-6 h-6" />,
    title: 'Office Hours',
    accentColor: 'border-blue-500 text-blue-700 bg-blue-50',
    badge: 'bg-blue-100 text-blue-800',
    details: [
      'Monday – Friday: 8:00 AM – 4:30 PM',
      'Saturday: 9:00 AM – 1:30 PM',
      'Sunday & Gazetted Holidays: Closed',
    ],
    actionText: 'Schedule Visit',
    actionUrl: '#visit',
  },
]

const socialLinks = [
  { icon: <FiFacebook  className="w-4 h-4" />, href: '#', label: 'Facebook',  color: 'hover:bg-blue-600' },
  { icon: <FiInstagram className="w-4 h-4" />, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: <FiTwitter   className="w-4 h-4" />, href: '#', label: 'Twitter',   color: 'hover:bg-sky-500' },
  { icon: <FiYoutube   className="w-4 h-4" />, href: '#', label: 'YouTube',   color: 'hover:bg-red-600' },
  { icon: <FiLinkedin  className="w-4 h-4" />, href: '#', label: 'LinkedIn',  color: 'hover:bg-blue-700' },
]

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Reach Out to Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-2">
            Contact Information
          </h2>
          <p className="text-slate-500 text-base font-light mt-3">
            Choose your preferred method of communication to connect with our campus team.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactDetails.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl border border-slate-200/80 p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-500 bg-white`}
            >
              <div>
                {/* Icon Bubble */}
                <div className={`w-12 h-12 rounded-2xl ${card.accentColor} border flex items-center justify-center mb-5 shadow-sm`}>
                  {card.icon}
                </div>

                <h3 className="text-emerald-950 font-extrabold text-lg leading-tight mb-3">
                  {card.title}
                </h3>

                <ul className="space-y-2 text-xs text-slate-500 font-light leading-relaxed mb-6">
                  {card.details.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <a
                href={card.actionUrl}
                target={card.id === 'address' ? '_blank' : '_self'}
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-bold ${card.accentColor.split(' ')[1]} hover:underline`}
              >
                {card.actionText} →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Social Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-emerald-950 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white shadow-lg"
        >
          <div>
            <p className="font-extrabold text-base">Connect on Social Media</p>
            <p className="text-emerald-300/70 text-xs font-light">Follow our official channels for real-time updates, photos &amp; announcements.</p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className={`w-9 h-9 rounded-full border border-emerald-800 bg-emerald-900/60 text-emerald-300 ${s.color} hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center shadow-sm active:scale-90`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default ContactInfo
