import React from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiNavigation, FiCheck } from 'react-icons/fi'

/**
 * ContactMap
 * ──────────
 * Embedded Google Map showing the school's location along with transport
 * and landmark details for visiting parents and guests.
 */

const locationHighlights = [
  { title: 'Nearest Metro Station', detail: 'Knowledge Square Metro (Line 2) – 500m' },
  { title: 'Landmark', detail: 'Opposite Central City Park & Education Hub Gate 3' },
  { title: 'Visitor Parking', detail: 'Ample free visitor parking available at Gate 1' },
  { title: 'Public Transport', detail: 'Bus routes 412, 534 & 711 stop directly at School Gate' },
]

const ContactMap = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Find Us on the Map</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-2">
            Campus Location &amp; Directions
          </h2>
          <p className="text-slate-500 text-base font-light mt-3">
            Located in a quiet, green educational zone easily accessible by metro, road, and public transport.
          </p>
        </div>

        {/* Map Container & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Google Map Frame */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 rounded-3xl overflow-hidden shadow-lg border border-slate-200 min-h-[380px] sm:min-h-[450px] relative"
          >
            <iframe
              title="Arnab School Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114757270414!2d77.2167211!3d28.6289015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xc36363b7e28a7e3!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] sm:min-h-[450px]"
            />
          </motion.div>

          {/* Location Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 bg-emerald-950 text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-widest mb-3">
                <FiNavigation className="w-4 h-4" /> Visitor Guide
              </div>

              <h3 className="text-2xl font-extrabold text-white leading-tight mb-6">
                Planning Your Campus Visit
              </h3>

              <ul className="space-y-4">
                {locationHighlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-emerald-900 border border-emerald-800 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                      <FiCheck className="w-3 h-3" />
                    </span>
                    <div>
                      <strong className="block text-white">{item.title}</strong>
                      <span className="text-emerald-300/70 font-light">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-800/60">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-5 rounded-full bg-amber-500 hover:bg-amber-400 text-emerald-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
              >
                <FiMapPin /> Open in Google Maps
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default ContactMap
