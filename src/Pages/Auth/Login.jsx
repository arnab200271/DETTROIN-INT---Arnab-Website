import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiBookOpen, FiCheck, FiShield } from 'react-icons/fi'

/**
 * Login UI Component
 * ──────────────────
 * Modern split-screen authentication layout.
 * Left: School brand visual, quote, and feature list.
 * Right: Clean form with Email, Password, Remember Me, Forgot Password, and Register link.
 */
const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 min-h-[580px]"
      >
        
        {/* ── Left Side: Brand Visual & Illustration Banner (5 cols) ── */}
        <div className="lg:col-span-5 relative bg-emerald-950 p-8 sm:p-10 text-white flex flex-col justify-between overflow-hidden">
          
          {/* Background image & gradient overlay */}
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
            alt="Arnab School Campus"
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
                <p className="text-amber-400/80 text-[9px] font-bold uppercase tracking-widest mt-0.5">Portal Sign In</p>
              </div>
            </Link>
          </div>

          {/* Middle Quote / Highlights */}
          <div className="relative z-10 my-8">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-extrabold uppercase tracking-widest mb-3">
              Student &amp; Parent Portal
            </span>
            <h2 className="text-2xl font-extrabold text-white leading-tight">
              Welcome Back to Arnab Learning Hub
            </h2>
            <p className="text-emerald-300/70 text-xs font-light mt-3 leading-relaxed">
              Access your report cards, attendance records, digital classroom resources, and fee statements.
            </p>

            <ul className="mt-6 space-y-2 text-xs text-emerald-200/80">
              <li className="flex items-center gap-2">
                <FiCheck className="text-amber-400 shrink-0" /> Real-time academic tracking
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-amber-400 shrink-0" /> Fee payments &amp; receipts
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-amber-400 shrink-0" /> Teacher messaging &amp; notices
              </li>
            </ul>
          </div>

          {/* Bottom Security Footer */}
          <div className="relative z-10 flex items-center gap-2 text-[10px] text-emerald-400/60 pt-4 border-t border-emerald-800/60">
            <FiShield className="text-amber-400" />
            <span>256-bit Encrypted Secure Portal</span>
          </div>
        </div>

        {/* ── Right Side: Form Area (7 cols) ── */}
        <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
          <div>
            
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-extrabold text-emerald-950 tracking-tight">Sign In</h3>
              <p className="text-slate-500 text-xs font-light mt-1">
                Enter your registered email address and password to log in.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Email Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
                <div className="relative">
                  <FiMail className="absolute left-3.5 top-3.5 text-slate-400 text-base" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@arnabschool.edu"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3.5 top-3.5 text-slate-400 text-base" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-emerald-800 focus:ring-amber-500 accent-emerald-800"
                  />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="font-bold text-amber-600 hover:text-amber-700 transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/20 active:scale-98 transition-all duration-300 group"
              >
                <span>Sign In to Account</span>
                <FiArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </div>

          {/* Footer Link to Register */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-500">
            Don't have an account yet?{' '}
            <Link to="/register" className="font-extrabold text-emerald-950 hover:text-amber-600 transition-colors">
              Create an Account →
            </Link>
          </div>

        </div>

      </motion.div>
    </div>
  )
}

export default Login
