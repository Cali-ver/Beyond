const stats = [
  { icon: '👥', num: '10000+', label: 'Students Placed', sub: 'Successfully admitted students' },
  { icon: '🌍', num: '25+', label: 'Countries', sub: 'Global destinations covered' },
  { icon: '🏛️', num: '500+', label: 'Partner Universities', sub: 'Worldwide university network' },
  { icon: '🏆', num: '98%', label: 'Success Rate', sub: 'Visa approval rate' },
  { icon: '🎓', num: '15+', label: 'Years Experience', sub: 'In education consultancy' },
  { icon: '⭐', num: '4.9/5', label: 'Student Rating', sub: 'Based on reviews' },
]

export default function Numbers() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="inline-block bg-green-500/10 text-green-600 px-4 py-1.5 rounded-full text-sm font-medium">
          Our Impact
        </span>
        <h2 className="mt-4 text-4xl font-extrabold">Numbers That Speak</h2>
        <p className="mt-4 text-gray-500 text-lg">Our track record reflects our commitment to student success</p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl">
                {s.icon}
              </div>
              <p className="text-3xl font-extrabold text-blue-600">{s.num}</p>
              <p className="mt-2 text-base font-semibold">{s.label}</p>
              <p className="mt-1 text-sm text-gray-400">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
