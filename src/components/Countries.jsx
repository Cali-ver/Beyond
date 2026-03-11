const countries = [
  { flag: '🇺🇸', name: 'USA', count: '500+ Universities', desc: 'Ivy League & Top Universities' },
  { flag: '🇬🇧', name: 'United Kingdom', count: '130+ Universities', desc: 'Russell Group Universities' },
  { flag: '🇨🇦', name: 'Canada', count: '100+ Universities', desc: 'PR Pathway Options' },
  { flag: '🇦🇺', name: 'Australia', count: '45+ Universities', desc: 'Group of Eight Universities' },
  { flag: '🇩🇪', name: 'Germany', count: '400+ Universities', desc: 'Low Tuition Fees' },
  { flag: '🇮🇳', name: 'India', count: '200+ Universities', desc: 'Top Private Universities' },
]

export default function Countries() {
  return (
    <section className="py-20 bg-gradient-to-l from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block bg-blue-500/10 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
            Study Destinations
          </span>
          <h2 className="mt-4 text-4xl font-extrabold">Countries We Serve</h2>
          <p className="mt-4 text-gray-500 text-lg">
            Explore opportunities across top education destinations worldwide. We have partnerships with leading universities in these countries.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((c) => (
            <a key={c.name} href="#"
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <span className="text-5xl">{c.flag}</span>
                <div>
                  <h3 className="text-xl font-bold">{c.name}</h3>
                  <p className="text-sm text-gray-500">{c.count}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500">{c.desc}</p>
              <div className="mt-4 text-sm font-semibold text-blue-600">Explore Programs →</div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors">
            View All Destinations →
          </a>
        </div>
      </div>
    </section>
  )
}
