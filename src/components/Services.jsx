const blogs = [
  { img: '/campus-1.jpg', date: 'Feb 02, 2024', author: 'Career Team', title: 'How Hostel & Campus Support Shapes Student Success' },
  { img: '/campus-2.jpg', date: 'Feb 05, 2024', author: 'Placement Desk', title: 'Placement Preparation: What Every Student Should Know' },
  { img: '/campus-3.jpg', date: 'Feb 07, 2024', author: 'Internship Team', title: 'Why Internships Matter More Than Your Degree' },
  { img: '/campus-4.jpg', date: 'Feb 10, 2024', author: 'Mentorship Team', title: 'Career Mentorship: Your Roadmap After College' },
  { img: '/campus-5.jpg', date: 'Feb 12, 2024', author: 'Student Support', title: 'Life After Admission: Managing Academics & Growth' },
  { img: '/campus-6.jpg', date: 'Feb 15, 2024', author: 'Career Coach', title: 'From Classroom to Career: Your Transition Guide' },
]

export default function Services() {
  return (
    <div className="bg-gradient-to-t from-blue-50 to-white">
      <div className="text-center px-4 py-16">
        <span className="text-blue-600 text-xl font-bold tracking-widest">Our Services</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-black pt-3 pb-4 max-w-3xl mx-auto">
          Support, Growth &amp; Career After Enrollment
        </h2>
        <p className="text-gray-500 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
          Our commitment doesn't stop once you secure admission. We continue to walk with you through every stage of your academic and professional journey — from accommodation support and career mentoring to internships, skill development, and placement preparation.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-16 pb-20">
        {blogs.map((b) => (
          <div key={b.title} className="flex flex-col group">
            <img src={b.img} alt={b.title} className="rounded-3xl w-full h-52 object-cover" />
            <div className="flex gap-4 px-2 pt-4 text-sm text-gray-400">
              <span>⏱ {b.date}</span>
              <span>👤 {b.author}</span>
            </div>
            <p className="text-black text-lg font-semibold hover:text-blue-700 px-2 pt-3 cursor-pointer">{b.title}</p>
            <a href="#" className="text-blue-700 font-semibold px-2 pt-2 text-sm">Read more →</a>
          </div>
        ))}
      </div>
    </div>
  )
}
