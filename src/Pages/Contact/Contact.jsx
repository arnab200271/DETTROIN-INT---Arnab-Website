import React from 'react'

// ─── Section Imports ───────────────────────────────────────────────────────────
import ContactHero from './sections/ContactHero'
import ContactInfo from './sections/ContactInfo'
import ContactForm from './sections/ContactForm'
import ContactMap  from './sections/ContactMap'

/**
 * Contact Page
 * ────────────
 * Assembles all Contact page sections:
 * 1. ContactHero — Page Title & Breadcrumbs
 * 2. ContactInfo — Phone, Email, Address, Hours & Social links
 * 3. ContactForm — Validated inquiry form
 * 4. ContactMap  — Interactive Google Map & Visitor guide
 */
const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* 1. Hero Banner */}
      <ContactHero />

      {/* 2. Contact Cards & Social Info */}
      <ContactInfo />

      {/* 3. Message / Inquiry Form */}
      <ContactForm />

      {/* 4. Google Map & Location Details */}
      <ContactMap />

    </div>
  )
}

export default Contact
