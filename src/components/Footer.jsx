import { useState } from 'react'

const galleryImgs = ['/thumb-1-1.png', '/thumb-1-2.png', '/thumb-1-3.png', '/thumb-1-4.png', '/thumb-1-5.png', '/thumb-1-6.png']

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <>
      {/* Newsletter */}
      <div className="bg-[#54baa8] py-14 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:px-24">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">Join Our Newsletter</h2>
            <p className="text-white/90 mt-2">Subscribe to get our latest updates, offers &amp; news.</p>
          </div>
          <div className="w-full sm:w-[420px] bg-white flex items-center rounded-full p-2 shadow-lg">
            <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 text-sm outline-none rounded-full" />
            <button className="bg-black text-white text-sm rounded-full px-5 py-2 hover:bg-gray-800 transition-colors">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0e2a46] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-8 py-14">
          <div>
            <img src="/beyond-logo.png" alt="Beyond Admissions" className="w-36 mb-4" />
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted partner for admissions in India and abroad. We help students achieve their dreams of studying at top universities worldwide.
            </p>
            <div className="flex gap-3 mt-5 flex-wrap">
              {['f', 'in', '', '𝕏'].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-sm transition-colors">{icon}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Study Abroad', 'India Admissions', 'Courses', 'Contact Us'].map(l => (
                <li key={l}><a href="#" className="text-gray-400 font-medium hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-5">Popular Courses</h3>
            <ul className="flex flex-col gap-3">
              {['MBBS Abroad', 'Engineering', 'MBA', 'Medical & Nursing', 'Paramedical'].map(l => (
                <li key={l}><a href="#" className="text-gray-400 font-medium hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-5">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryImgs.map(img => (
                <img key={img} src={img} alt="" className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity" />
              ))}
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#0a2038] text-center py-4 text-white/60 text-sm">
        Copyright © 2023 <span className="text-[#0ab99d]">Educate</span> || All Rights Reserved
      </div>
    </>
  )
}
