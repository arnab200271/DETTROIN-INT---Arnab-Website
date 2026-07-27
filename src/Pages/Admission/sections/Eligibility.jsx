import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiAlertCircle, FiInfo } from 'react-icons/fi'

/**
 * Eligibility
 * ───────────
 * Grade-wise age criteria table + general eligibility rules.
 */

// ─── Grade-wise Age Criteria ───────────────────────────────────────────────────
const ageCriteria = [
  { grade: 'Nursery',    ageRange: '3 – 4 years',  dob: 'Born between Apr 2022 – Mar 2023', seats: '40' },
  { grade: 'LKG',        ageRange: '4 – 5 years',  dob: 'Born between Apr 2021 – Mar 2022', seats: '40' },
  { grade: 'UKG',        ageRange: '5 – 6 years',  dob: 'Born between Apr 2020 – Mar 2021', seats: '40' },
  { grade: 'Grade I',    ageRange: '6 – 7 years',  dob: 'Born between Apr 2019 – Mar 2020', seats: '60' },
  { grade: 'Grade II',   ageRange: '7 – 8 years',  dob: 'Born between Apr 2018 – Mar 2019', seats: 'Limited' },
  { grade: 'Grade III',  ageRange: '8 – 9 years',  dob: 'Born between Apr 2017 – Mar 2018', seats: 'Limited' },
  { grade: 'Grade VI',   ageRange: '11 – 12 years', dob: 'Born between Apr 2014 – Mar 2015', seats: '60' },
  { grade: 'Grade IX',   ageRange: '14 – 15 years', dob: 'Born between Apr 2011 – Mar 2012', seats: '60' },
  { grade: 'Grade XI',   ageRange: '16 – 17 years', dob: 'Born between Apr 2009 – Mar 2010', seats: '80' },
]

// ─── General Eligibility Rules ─────────────────────────────────────────────────
const generalRules = [
  { type: 'required', text: 'Age as on 31st March of the academic year must match the grade criteria.' },
  { type: 'required', text: 'Previous academic records (mark sheets & transfer certificate) must be from a recognised board/school.' },
  { type: 'required', text: 'Students seeking lateral entry (Grade II onwards) must clear the entrance assessment.' },
  { type: 'required', text: 'A Transfer Certificate (TC) from the previous school is mandatory for all lateral entry applications.' },
  { type: 'info',     text: 'Children with special educational needs are warmly welcome — please contact the counselling team for individualised assessment.' },
  { type: 'info',     text: 'Sibling preference is given during seat allocation where seats are limited.' },
  { type: 'info',     text: 'All admissions are subject to seat availability and assessment outcome.' },
]

const Eligibility = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-600 font-bold uppercase tracking-widest text-xs"
          >
            Who Can Apply
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-emerald-950 tracking-tight mt-3"
          >
            Eligibility Criteria
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 text-base leading-relaxed font-light"
          >
            Age criteria as per CBSE norms for the academic year 2026–27.
            All ages are calculated as of 31st March 2026.
          </motion.p>
        </div>

        {/* Age Criteria Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm mb-12"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-emerald-950 text-white">
                <th className="text-left px-6 py-4 font-bold uppercase tracking-widest text-xs rounded-tl-2xl">Grade / Class</th>
                <th className="text-left px-6 py-4 font-bold uppercase tracking-widest text-xs">Age Range</th>
                <th className="text-left px-6 py-4 font-bold uppercase tracking-widest text-xs">Date of Birth Window</th>
                <th className="text-left px-6 py-4 font-bold uppercase tracking-widest text-xs rounded-tr-2xl">Available Seats</th>
              </tr>
            </thead>
            <tbody>
              {ageCriteria.map((row, i) => (
                <tr
                  key={row.grade}
                  className={`border-b border-slate-100 transition-colors duration-200 hover:bg-amber-50/40 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                >
                  <td className="px-6 py-4 font-bold text-emerald-950">{row.grade}</td>
                  <td className="px-6 py-4 text-slate-600">{row.ageRange}</td>
                  <td className="px-6 py-4 text-slate-500 font-light">{row.dob}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${row.seats === 'Limited' ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'}`}>
                      {row.seats} {row.seats !== 'Limited' ? 'seats' : ''}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* General eligibility rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className="text-emerald-950 font-extrabold text-xl mb-6">General Eligibility Rules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {generalRules.map((rule, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 p-4 rounded-xl border text-sm leading-relaxed ${
                  rule.type === 'required'
                    ? 'bg-emerald-50 border-emerald-200 text-slate-700'
                    : 'bg-blue-50 border-blue-200 text-slate-600'
                }`}
              >
                {rule.type === 'required'
                  ? <FiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  : <FiInfo        className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                }
                {rule.text}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Eligibility
