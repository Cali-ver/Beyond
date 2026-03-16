export default function Hero() {
  const backgroundImage = '/college-4.jpg'
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={backgroundImage} alt="University Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-[calc(100vh-80px)] px-6 lg:px-16 py-20 lg:py-0">
        <div className="flex-1 max-w-3xl text-white mb-12 lg:mb-0">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 px-4 py-2 rounded-full text-sm font-medium text-amber-300 mb-6">
            🎓 Trusted by 10,000+ Students
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-5">
            Your Trusted Partner for{' '}
            <span className="text-green-400">Admissions in India &amp; Abroad</span>
          </h1>
          <p className="text-lg text-white/80 mb-10">
            Unlock your dream career with expert guidance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="inline-flex items-center gap-2 h-12 px-8 bg-amber-500 hover:bg-amber-600 rounded-lg font-semibold text-white transition-colors">
              Profile Evaluation <span>→</span>
            </a>
            <a href="#" className="inline-flex items-center h-12 px-8 border-2 border-white rounded-lg font-semibold text-white hover:bg-white/10 transition-colors">
              Free Counseling
            </a>
          </div>
        </div>

        {/* Testimonials Side */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-6 lg:ml-auto relative w-full lg:w-auto">
          {/* Testimonial 1 */}
          <div className="w-full sm:w-64 h-auto lg:h-64 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl animate-bounce-slow hover:scale-105 transition-all duration-500 cursor-default">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                AS
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Aditya S.</h4>
                <div className="flex text-amber-400 text-xs">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              "Beyond Admissions made my dream of studying in <span className="text-green-400 font-bold underline decoration-green-400/30">USA</span> a reality. Their support was exceptional!"
            </p>
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
              Stanford University
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="w-full sm:w-64 h-auto lg:h-64 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl lg:translate-x-12 lg:translate-y-4 hover:scale-105 transition-all duration-500 cursor-default group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                PM
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Priya M.</h4>
                <div className="flex text-amber-400 text-xs">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              "The <span className="text-amber-400 font-bold underline decoration-amber-400/30">Visa Guidance</span> was so professional. I got my UK visa in just 2 weeks!"
            </p>
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
              Oxford University
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
