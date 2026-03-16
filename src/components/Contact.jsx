import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Study Abroad',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="bg-[#f8f9ff] py-24 px-6 lg:px-16" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-blue-600/10 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Ready to Start Your <br />
              <span className="text-blue-600">Educational Journey?</span>
            </h2>
            <p className="text-lg text-gray-500 font-medium mb-12 leading-relaxed">
              Our expert consultants are ready to guide you. Fill out the form, and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/5 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-1">Email Us</h4>
                  <p className="text-lg font-black text-gray-900 tracking-tight">admissions@beyond.in</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/5 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-1">Call Support</h4>
                  <p className="text-lg font-black text-gray-900 tracking-tight">+91 800 123 4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-blue-900/5 border border-gray-100">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="John Doe"
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 outline-none focus:border-blue-600 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="john@example.com"
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 outline-none focus:border-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="+91 00000 00000"
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 outline-none focus:border-blue-600 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Service Interested</label>
                  <select 
                    name="service"
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 outline-none focus:border-blue-600 transition-colors appearance-none"
                  >
                    <option>Study Abroad</option>
                    <option>MBBS Abroad</option>
                    <option>Study in India</option>
                    <option>Profile Development</option>
                    <option>Admission Support</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Message</label>
                <textarea 
                  name="message"
                  rows="4"
                  placeholder="How can we help you?"
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 outline-none focus:border-blue-600 transition-colors"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white text-xs font-black tracking-[0.2em] uppercase rounded-2xl py-5 hover:bg-blue-500 transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-[0.98]">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
