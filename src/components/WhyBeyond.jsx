import React from 'react'

const supportServices = [
  {
    title: 'Visa Support',
    points: [
      'Expert guidance on documentation',
      'Interview preparation sessions',
      'Smooth submission process'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-orange-600">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    color: 'from-orange-500/10 to-orange-600/5',
    borderColor: 'border-orange-200',
    iconBg: 'bg-orange-100',
  },
  {
    title: 'Application Support',
    points: [
      'University application assistance',
      'Document vetting & verification',
      'SOP & Essay crafting'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-green-600">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    color: 'from-green-500/10 to-green-600/5',
    borderColor: 'border-green-200',
    iconBg: 'bg-green-100',
  },
  {
    title: 'Financial Assistance',
    points: [
      'Financial statement preparation',
      'Asset documentation help',
      'Admissions verification'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-blue-600">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    color: 'from-blue-500/10 to-blue-600/5',
    borderColor: 'border-blue-200',
    iconBg: 'bg-blue-100',
  },
  {
    title: 'Post-Admission Support',
    points: [
      'Accommodation assistance',
      'City orientation programs',
      'Networking & community support'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-indigo-600">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    color: 'from-indigo-500/10 to-indigo-600/5',
    borderColor: 'border-indigo-200',
    iconBg: 'bg-indigo-100',
  },
]

export default function WhyBeyond() {
  return (
    <div className="bg-white py-24 px-6 lg:px-16" id="support-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-600/10 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">
            Total Support Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">End-to-End Assistance</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
            We don't just stop at admissions. Our comprehensive support system ensures you are fully prepared for every logistical challenge of your education.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportServices.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-white border border-gray-100 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 flex flex-col`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-3xl`} />
              
              <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                {typeof service.icon === 'string' ? (
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-10 h-10 object-contain drop-shadow-sm"
                  />
                ) : (
                  service.icon
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 min-h-[3.5rem] flex items-center">
                {service.title}
              </h3>

              <ul className="space-y-2 mb-8 flex-grow">
                {service.points.map((point, i) => (
                  <li key={i} className="text-gray-400 text-sm font-medium flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-gray-50">
                <a 
                  href="#" 
                  className="inline-flex items-center text-[10px] font-black tracking-widest text-gray-400 group-hover:text-blue-600 transition-all duration-300 uppercase"
                >
                  LEARN MORE 
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
