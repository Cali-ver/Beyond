const reasons = [
  { img: '/art-1.png', title: 'Numerous Study Destinations', desc: 'Explore a growing list of trusted universities in multiple countries across Europe and beyond.' },
  { img: '/art-2.png', title: 'Stress-Free Admission Process', desc: 'Forget the paperwork. We take care of your application from start to finish.' },
  { img: '/art-3.png', title: 'Single Application Form', desc: 'Apply to several partner universities with just one form. Save time and effort.' },
  { img: '/art-4.png', title: 'Advanced Technology Platform', desc: 'Our user-friendly platform lets you register, upload documents, and track your application.' },
  { img: '/art-5.png', title: 'Training and Support for Partners', desc: 'We support recruitment partners with onboarding, training, and ongoing tools.' },
  { img: '/art-6.png', title: 'Personalized Assistance When Needed', desc: 'Need help with your CV, motivation letter, or visa process? We guide you through each step.' },
]

export default function WhyBeyond() {
  return (
    <section className="py-20 bg-gradient-to-l from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold mb-3">Why Beyond Admission</h2>
          <p className="text-gray-500 italic text-lg">"Your Trusted Partner for Fast, Easy, and Reliable University Admissions"</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-2 hover:shadow-lg transition-shadow">
              <img src={r.img} alt="" className="w-20 h-20 object-contain mb-2" />
              <h3 className="text-lg font-bold hover:text-blue-600 cursor-pointer">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
