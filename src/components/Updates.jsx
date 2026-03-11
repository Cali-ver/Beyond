const updates = [
  { date: '22 Jan 2026', uni: 'Sage University', title: 'BA BSc Part II Re-Exam' },
  { date: '21 Jan 2026', uni: 'Parul University', title: 'BBA 6th Semester Schedule' },
  { date: '20 Jan 2026', uni: 'RGPV', title: 'Admission 2026-27' },
  { date: '20 Jan 2026', uni: 'LNCT University', title: 'PGDM Admission 2026-27' },
  { date: '22 Jan 2026', uni: 'Barkatullah University', title: 'UG Philosophy Exam Date Change' },
  { date: '22 Jan 2026', uni: 'Sage University', title: 'BA BSc Part II Re-Exam' },
  { date: '21 Jan 2026', uni: 'Parul University', title: 'BBA 6th Semester Schedule' },
  { date: '20 Jan 2026', uni: 'RGPV', title: 'Admission 2026-27' },
]

const leftBtns = [
  { label: 'APPLY NOW', cls: 'bg-red-600' },
  { label: 'MERIT LIST', cls: 'bg-green-600' },
  { label: 'ADMISSION INFO', cls: 'bg-blue-600' },
  { label: 'ADMISSION INFO', cls: 'bg-blue-600' },
  { label: 'NEWS', cls: 'bg-yellow-400 text-black' },
  { label: 'NEWS', cls: 'bg-yellow-400 text-black' },
  { label: 'Colleges in India', cls: 'bg-indigo-700' },
]
const rightBtns = [
  { label: 'EXAM SCHEDULE', cls: 'bg-purple-600' },
  { label: 'EXAM RESULTS', cls: 'bg-pink-600' },
  { label: 'NOTIFICATIONS', cls: 'bg-gray-700' },
  { label: 'EXAM RESULTS', cls: 'bg-pink-600' },
  { label: 'NOTIFICATIONS', cls: 'bg-gray-700' },
  { label: 'STUDY ABROAD', cls: 'bg-orange-500' },
  { label: 'Colleges in States', cls: 'bg-indigo-700' },
]

export default function Updates() {
  return (
    <div className="bg-gray-50 py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-10">Updates</h2>
        <div className="grid lg:grid-cols-[180px_1fr_180px] gap-4">
          {/* Left buttons */}
          <div className="flex lg:flex-col flex-wrap gap-2">
            {leftBtns.map((b, i) => (
              <a key={i} href="#" className={`${b.cls} text-white text-center rounded px-3 py-2.5 text-xs font-bold`}>
                {b.label}
              </a>
            ))}
          </div>

          {/* Feed */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-[#242d3e] text-white px-4 py-2.5 font-bold text-sm">LATEST UPDATES 2026</div>
            <div className="h-96 overflow-y-auto p-4 flex flex-col gap-3">
              {updates.map((u, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-3 flex flex-wrap gap-2 items-start">
                  <span className="text-red-600 text-xs font-medium">{u.date}</span>
                  <span className="text-gray-500 text-xs">{u.uni}</span>
                  <span className="font-semibold text-sm w-full">{u.title}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#242d3e] text-right text-white text-xs px-4 py-2">View All →</div>
          </div>

          {/* Right buttons */}
          <div className="flex lg:flex-col flex-wrap gap-2">
            {rightBtns.map((b, i) => (
              <a key={i} href="#" className={`${b.cls} text-white text-center rounded px-3 py-2.5 text-xs font-bold`}>
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
