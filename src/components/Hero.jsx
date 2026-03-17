const testimonials = [
  {
    initials: 'AS',
    name: 'Aditya S.',
    feedback: '"Beyond Admissions made my dream of studying in <span class="text-green-400 font-bold underline decoration-green-400/30">USA</span> a reality. Their support was exceptional!"',
    university: 'Stanford University',
    bgColor: 'from-green-400 to-emerald-600',
  },
  {
    initials: 'PM',
    name: 'Priya M.',
    feedback: '"The <span class="text-amber-400 font-bold underline decoration-amber-400/30">Visa Guidance</span> was so professional. I got my UK visa in just 2 weeks!"',
    university: 'Oxford University',
    bgColor: 'from-amber-400 to-orange-600',
  },
  {
    initials: 'RK',
    name: 'Rahul K.',
    feedback: '"The counselors helped me find the perfect course that matched my career goals in <span class="text-blue-400 font-bold underline decoration-blue-400/30">Canada</span>."',
    university: 'University of Toronto',
    bgColor: 'from-blue-400 to-indigo-600',
  },
  {
    initials: 'SG',
    name: 'Sneha G.',
    feedback: '"Simplified the entire application process for <span class="text-pink-400 font-bold underline decoration-pink-400/30">Australia</span>. Highly recommended!"',
    university: 'Monash University',
    bgColor: 'from-pink-400 to-rose-600',
  },
  {
    initials: 'VR',
    name: 'Vikram R.',
    feedback: '"Got my master\'s admission in <span class="text-purple-400 font-bold underline decoration-purple-400/30">Germany</span> with a full scholarship. Incredible support!"',
    university: 'TU Munich',
    bgColor: 'from-purple-400 to-fuchsia-600',
  },
  {
    initials: 'ML',
    name: 'Maya L.',
    feedback: '"The best decision for my career! They took care of everything from university shortlisting to accommodation in <span class="text-cyan-400 font-bold underline decoration-cyan-400/30">Australia</span>."',
    university: 'University of Sydney',
    bgColor: 'from-cyan-400 to-blue-500',
  },
  {
    initials: 'DK',
    name: 'David K.',
    feedback: '"Highly professional and supportive. They made the complex process of applying to <span class="text-orange-400 font-bold underline decoration-orange-400/30">USA</span> universities feel so simple and clear."',
    university: 'UT Austin',
    bgColor: 'from-orange-400 to-red-500',
  },
];

export default function Hero() {
  const backgroundImage = '/1000_F_1267748980_pR2HgfHfTPkUuiJ7l903gPn3MbgLtctK.jpg'

  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="University Campus"
          className="w-full h-full object-cover brightness-110 contrast-110 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
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

        {/* Testimonials Side - Vertical Scrollable / Grid */}
        <div className="w-full lg:w-[320px] h-[500px] lg:h-[600px] overflow-hidden relative lg:ml-auto">
          <div className="flex flex-col gap-6 animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-all duration-500 cursor-default group shrink-0"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.bgColor} flex items-center justify-center text-xl font-bold text-white shadow-lg`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                    <div className="flex text-amber-400 text-xs">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <p
                  className="text-white/90 text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: testimonial.feedback }}
                />
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  {testimonial.university}
                </div>
              </div>
            ))}
          </div>

          {/* Fading Gradients for Smooth Scroll Effect */}
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/0 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  )
}

