import React, { useState, useEffect } from 'react'

export default function InquiryModal({ isOpen, onClose, onSubmitted }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      if (onSubmitted) onSubmitted()
      setTimeout(() => {
        setIsSuccess(false)
        onClose()
      }, 2000)
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSuccess ? (
          <div className="p-12 text-center py-20">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-500 font-medium text-lg">Our experts will contact you shortly.</p>
          </div>
        ) : (
          <div className="p-8 sm:p-12">
            <div className="mb-10 text-center">
              <span className="inline-block bg-blue-600/10 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
                Get Expert Guidance
              </span>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Inquiry Form</h2>
              <p className="text-gray-500 font-medium">Please fill in your details to get started.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-medium"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-medium"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="Enter your phone number"
                  className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-medium"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold tracking-wide transition-all duration-300 shadow-xl shadow-gray-900/10 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 disabled:pointer-events-none group"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <>
                    SUBMIT INQUIRY
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
