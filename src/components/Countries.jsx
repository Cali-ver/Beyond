const countries = [
  { 
    flag: 'https://flagcdn.com/w160/us.png', name: 'USA', count: '500+ Universities', desc: 'Ivy League & Top Universities', 
    hoverGradient: 'hover:bg-gradient-to-br hover:from-blue-700 hover:via-white/90 hover:to-red-600' 
  },
  { 
    flag: 'https://flagcdn.com/w160/gb.png', name: 'United Kingdom', count: '130+ Universities', desc: 'Russell Group Universities', 
    hoverGradient: 'hover:bg-gradient-to-br hover:from-blue-800 hover:via-red-600 hover:to-white' 
  },
  { 
    flag: 'https://flagcdn.com/w160/ca.png', name: 'Canada', count: '100+ Universities', desc: 'PR Pathway Options', 
    hoverGradient: 'hover:bg-gradient-to-r hover:from-red-600 hover:via-white hover:to-red-600' 
  },
  { 
    flag: 'https://flagcdn.com/w160/au.png', name: 'Australia', count: '45+ Universities', desc: 'Group of Eight Universities', 
    hoverGradient: 'hover:bg-blue-800' 
  },
  { 
    flag: 'https://flagcdn.com/w160/de.png', name: 'Germany', count: '400+ Universities', desc: 'Low Tuition Fees', 
    hoverGradient: 'hover:bg-gradient-to-b hover:from-zinc-900 hover:via-red-600 hover:to-yellow-500' 
  },
  { 
    flag: 'https://flagcdn.com/w160/ie.png', name: 'Ireland', count: '30+ Universities', desc: 'Post-Study Work Options', 
    hoverGradient: 'hover:bg-gradient-to-b hover:from-emerald-600 hover:via-white hover:to-orange-500' 
  },
]

export default function Countries({ onViewUniversities }) {
  return (
    <section className="py-12 bg-white relative overflow-hidden" id="destinations">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/50 blur-[120px] rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block bg-blue-600/10 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
            Global Opportunities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Explore Study Destinations</h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Discover a world of academic excellence. We bridge the gap between you and the globe's most prestigious institutions.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((c) => (
            <a 
              key={c.name} 
              href="#"
              onClick={onViewUniversities}
              className={`group relative bg-white border border-gray-100 rounded-[2.5rem] p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col ${c.hoverGradient}`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-white/20 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-all duration-300 shadow-inner">
                  <img src={c.flag} alt={`${c.name} flag`} className="w-full h-full object-cover" />
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-blue-600 group-hover:text-black/80 uppercase tracking-wider">{c.count}</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-black mb-3 transition-colors duration-300">
                {c.name}
              </h3>
              
              <p className="text-gray-500 group-hover:text-black/70 font-medium mb-8 leading-relaxed">
                {c.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-gray-100 group-hover:border-black/10 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 flex items-center">
                  VIEW UNIVERSITIES
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="#" 
            onClick={onViewUniversities}
            className="inline-flex items-center gap-2 h-14 px-10 bg-gray-900 hover:bg-black text-white rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-gray-900/10 group"
          >
            VIEW ALL DESTINATIONS
            <svg className="w-4 h-4 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
