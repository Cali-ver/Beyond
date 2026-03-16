import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Newsletter Section - Premium Light Design */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24">
        <div className="bg-[#0a0a0a] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-blue-900/10 flex flex-col lg:flex-row items-center justify-between gap-12 group">
          {/* Decorative background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full -mr-48 -mt-48 transition-transform duration-700 group-hover:scale-110" />
          
          <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">Stay Ahead of the Curve</h2>
            <p className="text-blue-200/70 text-lg font-medium">Subscribe to receive the latest updates, scholarships, and admission alerts.</p>
          </div>

          <div className="relative z-10 w-full lg:w-auto">
            <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-full flex items-center border border-white/10 shadow-inner w-full sm:w-[500px]">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                className="flex-1 bg-transparent px-6 py-3 text-[10px] font-black tracking-widest text-white outline-none uppercase placeholder:text-gray-500" 
              />
              <button className="bg-blue-600 text-white text-[10px] font-black tracking-widest uppercase rounded-full px-10 py-4 hover:bg-blue-500 transition-all duration-300 shadow-xl shadow-blue-600/20 active:scale-95">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links - Clean Minimalist */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-24">
        <div className="flex flex-col gap-8">
          <img src="/beyond-logo.png" alt="Beyond Admissions" className="w-44" />
          <p className="text-gray-500 font-medium leading-relaxed pr-8">
            Empowering students to reach their full potential through personalized educational pathways across the globe.
          </p>
          <div className="flex gap-4">
            {['Fb', 'In', 'X', 'Ln'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[10px] font-black text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-transparent hover:border-blue-600 tracking-tighter"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[11px] font-black tracking-[0.2em] text-gray-900 uppercase mb-10 border-l-2 border-blue-600 pl-4">NAVIGATE</h3>
          <ul className="flex flex-col gap-5">
            {['HOME', 'DESTINATIONS', 'ADMISSIONS', 'OUR SERVICES', 'ABOUT US'].map(l => (
              <li key={l}>
                <a href="#" className="text-xs font-bold text-gray-500 hover:text-blue-600 transition-colors tracking-widest">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-black tracking-[0.2em] text-gray-900 uppercase mb-10 border-l-2 border-indigo-600 pl-4">LEGAL</h3>
          <ul className="flex flex-col gap-5">
            {['PRIVACY POLICY', 'TERMS OF SERVICE', 'COOKIE POLICY', 'REFUND POLICY'].map(l => (
              <li key={l}>
                <a href="#" className="text-xs font-bold text-gray-500 hover:text-indigo-600 transition-colors tracking-widest">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-black tracking-[0.2em] text-gray-900 uppercase mb-10 border-l-2 border-amber-600 pl-4">CONTACT</h3>
          <div className="flex flex-col gap-6">
            <p className="text-[11px] font-black tracking-[0.2em] text-gray-400 leading-relaxed uppercase">
              123 Educational Plaza, Suite 456<br />
              Global City, 10110
            </p>
            <a href="mailto:info@beyond.in" className="text-lg font-black text-gray-900 hover:text-blue-600 transition-colors">info@beyond.in</a>
            <p className="text-2xl font-black text-gray-900">+1 800 BEYOND ADM</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-10 border-t border-gray-50 text-center">
        <p className="text-[10px] font-black tracking-[0.3em] text-gray-300 uppercase">
          © 2024 BEYOND ADMISSIONS. DESIGNED FOR EXCELLENCE.
        </p>
      </div>
    </footer>
  )
}
