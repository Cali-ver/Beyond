const courses = [
  { 
    name: 'B.Tech', 
    desc: 'Engineering & Technology: Innovation-driven careers in CS, AI, Mechanical, Civil, and more.',
    grad: 'hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-800',
    icon: '⚙️'
  },
  { 
    name: 'MBA', 
    desc: 'Management & Leadership: Master the art of business at top IIMs and elite private B-schools.',
    grad: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-fuchsia-800',
    icon: '💼'
  },
  { 
    name: 'B.Com', 
    desc: 'Commerce & Accounting: Foundations in Finance, Business Ethics, and Global Trade.',
    grad: 'hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-700',
    icon: '📊'
  },
  { 
    name: 'M.Com', 
    desc: 'Advanced Commerce: Specialized studies in Taxation, Auditing, and Financial Management.',
    grad: 'hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-700',
    icon: '📈'
  },
  { 
    name: 'LAW', 
    desc: 'Legal Studies: Excellence in Jurisprudence at National Law Universities and top faculties.',
    grad: 'hover:bg-gradient-to-br hover:from-slate-700 hover:to-slate-900',
    icon: '⚖️'
  },
  { 
    name: 'B.Sc', 
    desc: 'Science & Research: Deep dive into Physics, Biology, and pure sciences with elite research labs.',
    grad: 'hover:bg-gradient-to-br hover:from-rose-500 hover:to-orange-600',
    icon: '🧪'
  }
]

export default function StudyInIndia() {
  return (
    <section className="py-12 bg-gray-50 relative overflow-hidden" id="study-in-india">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-50/50 blur-[120px] rounded-full -ml-40 -mt-40" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-50/50 blur-[120px] rounded-full -mr-40 -mb-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block bg-orange-600/10 text-orange-600 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
            Domestic Campus
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Study in India</h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Explore the vast academic landscape of your own country. From heritage institutions to modern tech hubs, discover your perfect campus in India.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <a 
              key={course.name} 
              href="#"
              className={`group relative bg-white border border-gray-100 rounded-[2.5rem] p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col ${course.grad}`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-white flex items-center justify-center text-3xl group-hover:scale-110 transition-all duration-300 shadow-inner">
                  {course.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                {course.name}
              </h3>
              
              <p className="text-gray-500 group-hover:text-white/80 font-medium text-sm leading-relaxed mb-8">
                {course.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-gray-100 group-hover:border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex items-center">
                  EXPLORE COURSE
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
            className="inline-flex items-center gap-2 h-14 px-10 bg-gray-900 hover:bg-black text-white rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-gray-900/10 group"
          >
            VIEW ALL INDIAN COLLEGES
            <svg className="w-4 h-4 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
