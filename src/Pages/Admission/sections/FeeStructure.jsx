import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiHelpCircle, FiCreditCard } from 'react-icons/fi'

/**
 * FeeStructure
 * ────────────
 * Displays tuition fees by grade band, payment schedule, and fee guidelines.
 */

const feeSchedule = [
  {
    gradeBand: 'Pre-Primary (Nursery – UKG)',
    admissionFee: '₹15,000',
    tuitionFee: '₹6,000 / month',
    annualCharges: '₹10,000 / year',
    bg: 'bg-rose-50 border-rose-200',
    badge: 'bg-rose-100 text-rose-700',
  },
  {
    gradeBand: 'Primary (Grades I – V)',
    admissionFee: '₹20,000',
    tuitionFee: '₹7,500 / month',
    annualCharges: '₹12,000 / year',
    bg: 'bg-amber-50 border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
  },
  {
    gradeBand: 'Middle School (Grades VI – VIII)',
    admissionFee: '₹25,000',
    tuitionFee: '₹9,000 / month',
    annualCharges: '₹14,000 / year',
    bg: 'bg-emerald-50 border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  {
    gradeBand: 'Senior Secondary (Grades IX – XII)',
    admissionFee: '₹30,000',
    tuitionFee: '₹11,000 / month',
    annualCharges: '₹16,000 / year',
    bg: 'bg-violet-50 border-violet-200',
    badge: 'bg-violet-100 text-violet-700',
  },
]

const feeNotes = [
  'Admission fee is a one-time non-refundable charge payable at registration.',
  'Tuition fee can be paid monthly or quarterly (with 5% discount on annual upfront payment).',
  'Annual charges cover sports facilities, digital subscriptions, laboratory access, and insurance.',
  'Transport, uniform, and books are billed separately based on route and requirements.',
  'Scholarships up to 50% tuition waiver available for merit and sports achievers.',
]

const FeeStructure = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold uppercase tracking-widest text-xs"
          >
            Transparent Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-3"
          >
            Fee Structure (2026–27)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-base leading-relaxed font-light"
          >
            Clear, transparent fee breakdown with no hidden charges. Flexible quarterly
            or annual payment modes available.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {feeSchedule.map((item, i) => (
            <motion.div
              key={item.gradeBand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border ${item.bg} p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300`}
            >
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${item.badge}`}>
                  Academic Year 2026-27
                </span>
                <h3 className="text-emerald-950 font-extrabold text-lg mt-3 mb-4">{item.gradeBand}</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200/60">
                    <span className="text-slate-500 font-light">One-time Admission Fee</span>
                    <span className="font-bold text-emerald-950">{item.admissionFee}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200/60">
                    <span className="text-slate-500 font-light">Tuition Fee</span>
                    <span className="font-bold text-amber-600">{item.tuitionFee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-light">Annual Composite Charges</span>
                    <span className="font-bold text-emerald-950">{item.annualCharges}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-slate-50 border border-slate-200/70 p-6"
        >
          <div className="flex items-center gap-2 mb-4 text-emerald-950 font-extrabold text-base">
            <FiCreditCard className="w-5 h-5 text-amber-500" />
            Payment Terms &amp; Guidelines
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-600">
            {feeNotes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  )
}

export default FeeStructure
