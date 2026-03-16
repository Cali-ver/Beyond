const exams = [
  { 
    name: 'IELTS', 
    full: 'International English Language Testing System',
    desc: 'The world\'s most popular English language test for higher education and global migration.',
    grad: 'hover:bg-gradient-to-br hover:from-red-600 hover:to-rose-800',
    logo: (
      <svg viewBox="0 0 100 40" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fontWeight="900" fill="currentColor" fontFamily="Arial, sans-serif">IELTS</text>
        <rect x="0" y="35" width="100" height="2" fill="currentColor" opacity="0.5" />
      </svg>
    )
  },
  { 
    name: 'SAT', 
    full: 'Scholastic Assessment Test',
    desc: 'Standardized test widely used for college admissions in the United States and other countries.',
    grad: 'hover:bg-gradient-to-br hover:from-blue-700 hover:to-indigo-900',
    logo: (
      <svg viewBox="0 0 100 40" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="28" fontWeight="900" fill="currentColor" fontFamily="Verdana, sans-serif">SAT</text>
        <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.6" />
        <circle cx="90" cy="30" r="3" fill="currentColor" opacity="0.6" />
      </svg>
    )
  },
  { 
    name: 'GRE', 
    full: 'Graduate Record Examination',
    desc: 'Requirement for many graduate schools in the United States and Canada, and a few other countries.',
    grad: 'hover:bg-gradient-to-br hover:from-slate-800 hover:to-zinc-900',
    logo: (
      <svg viewBox="0 0 100 40" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="28" fontWeight="900" fill="currentColor" fontFamily="Georgia, serif">GRE</text>
        <path d="M5 5 L15 5 L10 15 Z" fill="currentColor" opacity="0.4" />
      </svg>
    )
  },
  { 
    name: 'GMAT', 
    full: 'Graduate Management Admission Test',
    desc: 'Computer adaptive test intended to assess certain analytical, writing, quantitative, verbal, and reading skills.',
    grad: 'hover:bg-gradient-to-br hover:from-emerald-700 hover:to-teal-900',
    logo: (
      <svg viewBox="0 0 100 40" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fontWeight="900" fill="currentColor" fontFamily="Impact, sans-serif">GMAT</text>
        <rect x="0" y="0" width="100" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" opacity="0.3" />
      </svg>
    )
  }
]

export default function Exams() {
  return (
    <section className="py-12 bg-white relative overflow-hidden" id="exams">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-50/50 blur-[120px] rounded-full -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50/50 blur-[120px] rounded-full -ml-40 -mb-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block bg-purple-600/10 text-purple-600 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
            Test Preparation
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Standardized Exams</h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Master the path to your dream university. We provide expert guidance and resources for all major international entrance exams.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {exams.map((exam) => (
            <a 
              key={exam.name} 
              href="#"
              className={`group relative bg-white border border-gray-100 rounded-[2.5rem] p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col ${exam.grad}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-white flex items-center justify-center p-2 mb-8 group-hover:scale-110 transition-all duration-300 shadow-inner text-gray-900 group-hover:text-gray-900">
                {exam.logo}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-1 transition-colors duration-300">
                {exam.name}
              </h3>
              <p className="text-[10px] font-bold text-gray-400 group-hover:text-white/60 mb-4 tracking-wider uppercase">
                {exam.full}
              </p>
              
              <p className="text-gray-500 group-hover:text-white/80 font-medium text-sm leading-relaxed mb-8">
                {exam.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-gray-50 group-hover:border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex items-center">
                  PREPARE NOW
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
