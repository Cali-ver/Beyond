export default function Hero() {
  const slides = ['/college-3.jpg', '/college-4.jpg', '/college-5.jpg']
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Slideshow */}
      <div className="flex w-[300%] hero-slide-track h-full absolute inset-0">
        {slides.map((src) => (
          <div key={src} className="relative w-1/3 min-h-[calc(100vh-80px)]">
            <img src={src} alt="" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-black/52" />
          </div>
        ))}
      </div>
      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-80px)] px-6 lg:px-16 pt-20 lg:pt-0">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 px-4 py-2 rounded-full text-sm font-medium text-amber-300 mb-6">
            🎓 Trusted by 10,000+ Students
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-5">
            Your Trusted Partner for{' '}
            <span className="text-amber-400">Admissions in India &amp; Abroad</span>
          </h1>
          <p className="text-lg text-white/80 mb-10">
            Unlock your dream career with expert guidance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="inline-flex items-center gap-2 h-12 px-8 bg-amber-500 hover:bg-amber-600 rounded-lg font-semibold text-white transition-colors">
              Apply Now <span>→</span>
            </a>
            <a href="#" className="inline-flex items-center h-12 px-8 border-2 border-white rounded-lg font-semibold text-white hover:bg-white/10 transition-colors">
              Free Counseling
            </a>
            <a href="#" className="inline-flex items-center h-12 px-8 font-semibold text-white hover:text-amber-300 transition-colors">
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
