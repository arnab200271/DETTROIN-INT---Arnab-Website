import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheckCircle, FiUser, FiMail, FiPhone, FiBookOpen, FiCalendar } from 'react-icons/fi'

/**
 * ApplyNow
 * ────────
 * Online admission application form component with state management and confirmation.
 */

const ApplyNow = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    grade: 'Grade I',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.studentName && formData.phone && formData.email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold uppercase tracking-widest text-xs"
          >
            Online Registration
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-3"
          >
            Apply for Admission (2026–27)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-base leading-relaxed font-light"
          >
            Fill out the digital registration form below to initiate your application process.
            Our admissions team will contact you within 24 business hours.
          </motion.p>
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
              <h3 className="text-2xl font-extrabold text-emerald-950">Application Submitted!</h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you for applying to Arnab School. We have received your application for{' '}
                <strong className="text-emerald-950">{formData.studentName}</strong> ({formData.grade}).
                A confirmation has been sent to <span className="text-amber-600">{formData.email}</span>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-emerald-950 text-white text-xs font-bold hover:bg-emerald-900 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Student Details */}
              <div>
                <h4 className="text-xs font-extrabold text-amber-600 uppercase tracking-widest mb-4">
                  1. Student Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Student's Full Name *</label>
                    <div className="relative">
                      <FiUser className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="text"
                        name="studentName"
                        required
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Date of Birth *</label>
                    <div className="relative">
                      <FiCalendar className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="date"
                        name="dob"
                        required
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Grade Applied For *</label>
                    <div className="relative">
                      <FiBookOpen className="absolute left-3.5 top-3.5 text-slate-400" />
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white"
                      >
                        <option value="Nursery">Nursery</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        <option value="Grade I">Grade I</option>
                        <option value="Grade II">Grade II</option>
                        <option value="Grade III">Grade III</option>
                        <option value="Grade VI">Grade VI</option>
                        <option value="Grade IX">Grade IX</option>
                        <option value="Grade XI">Grade XI</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parent Details */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-extrabold text-amber-600 uppercase tracking-widest mb-4">
                  2. Parent / Guardian Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Parent/Guardian Name *</label>
                    <div className="relative">
                      <FiUser className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number *</label>
                    <div className="relative">
                      <FiPhone className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address *</label>
                    <div className="relative">
                      <FiMail className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="parent@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/20 active:scale-98 transition-all duration-300"
                >
                  <FiSend className="w-4 h-4 text-amber-400" />
                  Submit Online Application
                </button>
              </div>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  )
}

export default ApplyNow
