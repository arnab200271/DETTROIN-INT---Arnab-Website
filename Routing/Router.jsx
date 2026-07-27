import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import HomePage from '../src/Pages/Homepage/HomePage'
import About from '../src/Pages/About/About'
import Academics from '../src/Pages/Academics/Academics'
import Admission from '../src/Pages/Admission/Admission'
import Gallery from '../src/Pages/Gallery/Gallery'
import Contact from '../src/Pages/Contact/Contact'

// Mock Pages for demonstration of the interactive premium navbar
const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 px-4 text-center">
    <div className="max-w-3xl">
      <span className="text-orange-500 font-bold uppercase tracking-wider text-sm bg-orange-50 px-4 py-1.5 rounded-full">Welcome to Arnab School</span>
      <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 mt-6 tracking-tight leading-tight">
        Nurturing Minds, <br />
        <span className="bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent">Shaping Futures</span>
      </h1>
      <p className="text-slate-600 mt-6 text-lg max-w-xl mx-auto leading-relaxed">
        Discover an environment dedicated to excellence, innovation, and holistic development. Explore our curriculum, state-of-the-art facilities, and dynamic learning programs.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a href="/admissions" className="px-8 py-3.5 bg-orange-500 hover:bg-orange-655 text-white font-semibold rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
          Admissions Open
        </a>
        <a href="/about" className="px-8 py-3.5 bg-white border border-slate-200 text-slate-700 hover:text-slate-900 font-semibold rounded-full shadow-sm hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-0.5">
          Learn More
        </a>
      </div>
    </div>
  </div>
)







const Facilities = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
    <div className="text-center max-w-xl">
      <h1 className="text-4xl font-extrabold text-slate-800">Our Facilities</h1>
      <p className="text-slate-600 mt-4 leading-relaxed">
        From advanced scientific laboratories to international-standard sports courts and digital classrooms, we provide resources for every student to thrive.
      </p>
    </div>
  </div>
)





const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/*" element={<Academics />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/admissions/*" element={<Admission />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/*" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/*" element={<Contact />} />
          <Route path="/apply" element={<Admission />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default AppRouter