import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiUser, FiMail, FiPhone, FiHelpCircle, FiMessageSquare, FiCheckCircle } from 'react-icons/fi'

/**
 * ContactForm
 * ───────────
 * Modern validated inquiry form for parents, students, and visitors.
 */

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admissions Enquiry',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Send Us a Message</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-2">
            Get in Touch
          </h2>
          <p className="text-slate-500 text-base font-light mt-3">
            Have a question or feedback? Fill out the form below and our team will respond promptly.
          </p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-xl shadow-slate-200/50"
        >
          {submitted ? (
            <div className="text-center py-12 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl">
                <FiCheckCircle />
              </div>
              <h3 className="text-2xl font-extrabold text-emerald-950">Message Sent Successfully!</h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you <strong className="text-emerald-950">{formData.name}</strong> for contacting Arnab School.
                We have received your enquiry regarding <span className="text-amber-600 font-semibold">{formData.subject}</span> and will reply to <span className="text-emerald-900 font-medium">{formData.email}</span> shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-emerald-950 text-amber-400 text-xs font-bold hover:bg-emerald-900 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
                  <div className="relative">
                    <FiUser className="absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address *</label>
                  <div className="relative">
                    <FiMail className="absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
                  <div className="relative">
                    <FiPhone className="absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Subject / Category *</label>
                  <div className="relative">
                    <FiHelpCircle className="absolute left-3.5 top-3.5 text-slate-400" />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white"
                    >
                      <option value="Admissions Enquiry">Admissions Enquiry</option>
                      <option value="Academics & Curriculum">Academics &amp; Curriculum</option>
                      <option value="Fee & Accounts Query">Fee &amp; Accounts Query</option>
                      <option value="Transport & Hostel">Transport &amp; Hostel</option>
                      <option value="Careers / Job Application">Careers / Job Application</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Message *</label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3.5 top-3.5 text-slate-400" />
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message or inquiry here..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/20 active:scale-98 transition-all duration-300"
                >
                  <FiSend className="w-4 h-4 text-amber-400" />
                  Submit Message
                </button>
              </div>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  )
}

export default ContactForm
