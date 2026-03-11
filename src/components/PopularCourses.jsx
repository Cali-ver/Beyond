const courses = [
  { img: '/foreign-1.jpg', title: 'MBBS / Medical', items: ['MBBS in Russia', 'MBBS in Philippines', 'MBBS in China', 'MBBS in Ukraine', 'MBBS in India'] },
  { img: '/foreign-2.jpg', title: 'Engineering', items: ['B.Tech in India', 'MS in USA', 'M.Tech in IIT', 'Engineering in Germany', 'B.Tech in Private Universities'] },
  { img: '/foreign-3.jpg', title: 'MBA / Management', items: ['MBA in India', 'MBA in UK', 'MBA in USA', 'PGDM Programs', 'Executive MBA'] },
  { img: '/foreign-4.jpg', title: 'LAW', items: ['BA LLB (5 years)', 'BBA LLB', 'LLB (3 years)', 'LLM', 'Corporate Law'] },
]

export default function PopularCourses() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">Popular Courses</h2>
          <p className="mt-4 text-gray-500 text-lg">Discover top education destinations known for excellence and innovation.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <div key={c.title} className="bg-white rounded-xl overflow-hidden shadow-md border-b-4 border-red-600 hover:shadow-xl transition-shadow">
              <img src={c.img} alt={c.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-base font-bold text-center mb-3">{c.title}</h4>
                <ul className="text-sm text-gray-500 space-y-1 list-disc pl-4">
                  {c.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
