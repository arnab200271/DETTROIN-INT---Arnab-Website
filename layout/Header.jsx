import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { BiChevronDown } from 'react-icons/bi'
import { FiArrowRight } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  // Navigation Links definition
  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      submenu: [
        { name: 'Our History', path: '/about/history' },
        { name: 'Principal\'s Message', path: '/about/message' },
        { name: 'Vision & Mission', path: '/about/vision' },
      ]
    },
    { 
      name: 'Academics', 
      path: '/academics',
      submenu: [
        { name: 'Curriculum', path: '/academics/curriculum' },
        { name: 'Special Programs', path: '/academics/programs' },
        { name: 'Faculty', path: '/academics/faculty' },
      ]
    },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  // Dynamic glassmorphic header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  // Framer Motion animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.08,
        when: "beforeChildren"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.25, when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 }
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: 10, 
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" }
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-slate-100/50 py-3' 
          : 'bg-white/40 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & School Name */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border border-slate-200 shadow-sm bg-white flex items-center justify-center p-1 group-hover:border-orange-200 transition-colors duration-300">
              <img 
                src="/school_logo.png" 
                alt="Arnab School Logo" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-slate-800 group-hover:text-blue-900 transition-colors duration-300">
                ARNAB
              </span>
              <span className="text-[10px] font-semibold tracking-[0.25em] text-slate-500 uppercase -mt-1 group-hover:text-orange-500 transition-colors duration-300">
                — School —
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const hasSubmenu = !!link.submenu
              const isDropdownActive = activeDropdown === link.name

              return (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => hasSubmenu && setActiveDropdown(link.name)}
                  onMouseLeave={() => hasSubmenu && setActiveDropdown(null)}
                >
                  {hasSubmenu ? (
                    <button 
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                        location.pathname.startsWith(link.path)
                          ? 'text-orange-500 bg-orange-50/50' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/80'
                      }`}
                    >
                      {link.name}
                      <BiChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isDropdownActive ? 'rotate-180 text-orange-500' : 'text-slate-400'
                        }`} 
                      />
                    </button>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => 
                        `relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                          isActive 
                            ? 'text-orange-500 bg-orange-50/50' 
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/80'
                        }`
                      }
                    >
                      {link.name}
                      {location.pathname === link.path && (
                        <motion.span 
                          layoutId="activePill"
                          className="absolute inset-0 bg-orange-500/10 rounded-full -z-10"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </NavLink>
                  )}

                  {/* Dropdown Menu (Framer Motion) */}
                  <AnimatePresence>
                    {hasSubmenu && isDropdownActive && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute left-0 mt-2 w-56 rounded-2xl bg-white border border-slate-100 shadow-xl py-2 z-50 origin-top-left"
                      >
                        <div className="absolute top-0 left-6 w-3 h-3 bg-white border-t border-l border-slate-100 transform -translate-y-1.5 rotate-45 -z-10"></div>
                        {link.submenu.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            className={({ isActive }) => 
                              `block px-5 py-2.5 text-sm font-medium rounded-lg mx-2 transition-all duration-200 ${
                                isActive 
                                  ? 'text-orange-500 bg-orange-50/30' 
                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                              }`
                            }
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

          {/* Apply Now Call-to-Action */}
          <div className="hidden lg:block">
            <NavLink 
              to="/apply"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 transition-all duration-300 overflow-hidden group"
            >
              <span>Apply Now</span>
              <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </NavLink>
          </div>

          {/* Mobile Toggler */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <HiX className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <HiMenu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => {
                const hasSubmenu = !!link.submenu
                const isDropdownActive = activeDropdown === link.name

                return (
                  <motion.div key={link.name} variants={itemVariants} className="overflow-hidden">
                    {hasSubmenu ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(isDropdownActive ? null : link.name)}
                          className={`flex items-center justify-between w-full px-4 py-3 text-base font-semibold rounded-2xl transition-all duration-300 ${
                            location.pathname.startsWith(link.path)
                              ? 'text-orange-500 bg-orange-50/40' 
                              : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          <span>{link.name}</span>
                          <BiChevronDown 
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isDropdownActive ? 'rotate-180 text-orange-500' : 'text-slate-400'
                            }`} 
                          />
                        </button>

                        {/* Accordion Submenu (Framer Motion) */}
                        <AnimatePresence initial={false}>
                          {isDropdownActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="pl-6 pr-2 py-1 space-y-1 bg-slate-50/50 rounded-b-2xl"
                            >
                              {link.submenu.map((subItem) => (
                                <NavLink
                                  key={subItem.name}
                                  to={subItem.path}
                                  className={({ isActive }) => 
                                    `block px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                                      isActive 
                                        ? 'text-orange-500 bg-orange-50/30' 
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                    }`
                                  }
                                >
                                  {subItem.name}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        to={link.path}
                        className={({ isActive }) => 
                          `block px-4 py-3 text-base font-semibold rounded-2xl transition-all duration-300 ${
                            isActive 
                              ? 'text-orange-500 bg-orange-50/40' 
                              : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </motion.div>
                )
              })}

              {/* Apply Now button inside mobile drawer */}
              <motion.div variants={itemVariants} className="pt-4 border-t border-slate-100">
                <NavLink
                  to="/apply"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 text-center text-base font-semibold text-white rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md hover:shadow-orange-500/10 active:scale-[0.98] transition-all duration-300"
                >
                  <span>Apply Now</span>
                  <FiArrowRight className="w-5 h-5" />
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
