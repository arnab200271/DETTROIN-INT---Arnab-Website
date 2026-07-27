import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiUser, FiMail, FiPhone, FiLock, FiEye, FiEyeOff, FiArrowRight, FiBookOpen, FiCheck, FiShield } from 'react-icons/fi'

/**
 * Register UI Component
 * ─────────────────────
 * Modern split-screen registration layout.
 * Left: School brand visual, benefits list, and trust badges.
 * Right: Full Name, Email, Phone, Password, Confirm Password, and Login link.
 */
const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 min-h-[640px]"
      >
        
        {/* ── Left Side: Brand Visual & Banner (5 cols) ── */}
        <div className="lg:col-span-5 relative bg-emerald-950 p-8 sm:p-10 text-white flex flex-col justify-between overflow-hidden">
          
          {/* Background image & gradient overlay */}
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"
            alt="Arnab School Registration"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/80 to-emerald-950/60" />

          {/* Top Brand Logo */}
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <FiBookOpen className="w-5 h-5 text-emerald-950" />
              </div>
              <div>
                <p className="text-white font-extrabold text-base tracking-tight leading-none">Arnab School</p>
                <p className="text-amber-400/80 text-[9px] font-bold uppercase tracking-widest mt-0.5">New Account</p>
              </div>
            </Link>
          </div>

          {/* Middle Quote / Highlights */}
          <div className="relative z-10 my-8">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-extrabold uppercase tracking-widest mb-3">
              Join Arnab Community
            </span>
            <h2 className="text-2xl font-extrabold text-white leading-tight">
              Create Your Portal Profile
            </h2>
            <p className="text-emerald-300/70 text-xs font-light mt-3 leading-relaxed">
              Register as a parent or guardian to track application status, view school circulars, and receive real-time updates.
            </p>

            <ul className="mt-6 space-y-2 text-xs text-emerald-200/80">
              <li className="flex items-center gap-2">
                <FiCheck className="text-amber-400 shrink-0" /> Online admission application tracking
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-amber-400 shrink-0" /> Direct communications with administration
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-amber-400 shrink-0" /> Event invitations &amp; academic alerts
              </li>
            </ul>
          </div>

          {/* Bottom Security Footer */}
          <div className="relative z-10 flex items-center gap-2 text-[10px] text-emerald-400/60 pt-4 border-t border-emerald-800/60">
            <FiShield className="text-amber-400" />
            <span>CBSE Affiliated · Secure Family Portal</span>
          </div>
        </div>

        {/* ── Right Side: Form Area (7 cols) ── */}
        <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
          <div>
            
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-emerald-950 tracking-tight">Create Account</h3>
              <p className="text-slate-500 text-xs font-light mt-1">
                Fill in your details below to set up your portal account.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-3.5 text-slate-400 text-sm" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <div className="relative">
                    <FiMail className="absolute left-3.5 top-3.5 text-slate-400 text-sm" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="parent@example.com"
                      className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <div className="relative">
                    <FiPhone className="absolute left-3.5 top-3.5 text-slate-400 text-sm" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Password & Confirm Password grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Password *</label>
                  <div className="relative">
                    <FiLock className="absolute left-3.5 top-3.5 text-slate-400 text-sm" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-9 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 transition-colors text-sm"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Confirm Password *</label>
                  <div className="relative">
                    <FiLock className="absolute left-3.5 top-3.5 text-slate-400 text-sm" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-9 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 transition-colors text-sm"
                    >
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Agree to Terms */}
              <div className="flex items-center gap-2 pt-1 text-xs">
                <label className="flex items-start gap-2 text-slate-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 rounded border-slate-300 text-emerald-800 focus:ring-amber-500 accent-emerald-800 shrink-0"
                  />
                  <span>
                    I agree to Arnab School's{' '}
                    <a href="#terms" className="text-amber-600 font-bold hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#privacy" className="text-amber-600 font-bold hover:underline">Privacy Policy</a>.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 mt-2 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/20 active:scale-98 transition-all duration-300 group"
              >
                <span>Register Account</span>
                <FiArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </div>

          {/* Footer Link to Login */}
          <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
            Already have a portal account?{' '}
            <Link to="/login" className="font-extrabold text-emerald-950 hover:text-amber-600 transition-colors">
              Sign In Here →
            </Link>
          </div>

        </div>

      </motion.div>
    </div>
  )
}

export default Register
