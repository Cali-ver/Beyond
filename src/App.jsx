import React, { useState, useEffect } from 'react'
// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Countries from './components/Countries'
import Updates from './components/Updates'
import StudyInIndia from './components/StudyInIndia'
import Exams from './components/Exams'
import WhyBeyond from './components/WhyBeyond'
import Contact from './components/Contact'
import Footer from './components/Footer'
import InquiryModal from './components/InquiryModal'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(
    () => localStorage.getItem('inquirySubmitted') === 'true'
  )

  useEffect(() => {
    if (hasSubmitted) return

    // Initial show after 5s
    const initialTimer = setTimeout(() => {
      setIsModalOpen(true)
    }, 5000)

    // Recurring check every 15s
    const interval = setInterval(() => {
      if (!isModalOpen) {
        setIsModalOpen(true)
      }
    }, 15000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [hasSubmitted, isModalOpen])

  const handleModalSuccess = () => {
    setHasSubmitted(true)
    localStorage.setItem('inquirySubmitted', 'true')
  }

  const handleViewUniversities = (e) => {
    if (e) e.preventDefault()
    if (!hasSubmitted) {
      setIsModalOpen(true)
    }
  }
  return (
    <div className="min-h-screen">
      <Hero />
      <Countries onViewUniversities={handleViewUniversities} />
      <div id="core-services">
        <Updates />
        <StudyInIndia />
        <Exams />
      </div>
      <div id="support-section">
        <WhyBeyond />
      </div>
      <Contact />
      <Footer />
      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmitted={handleModalSuccess}
      />
    </div>
  )
}
