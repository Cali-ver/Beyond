import { useState } from 'react'

const tabs = ['Engineering', 'Management', 'Commerce and Banking', 'Medical', 'Science', 'Hotel Management', 'Information Technology', 'Arts & Humanities', 'Agriculture', 'Law', 'Pharmacy']

const data = {
  colleges: ['Parul University', 'Jadhavpur University', 'Delhi University', 'Jawahar Lal Nehru University', 'Dev Bhoomi University', 'Indian Institute Of Technology', 'Jaipur National University', 'Institute of Engineering and Management', "Lingaya's Vidyapeeth", 'Vivekananda Global University'],
  exams: ['JEE Main', 'JEE Advanced', 'TS EAMCET', 'WBJEE', 'VITEEE'],
  states: ['Maharashtra', 'Tamilnadu', 'Madhya Pradesh', 'Uttar Pradesh', 'Karnataka', 'Rajasthan', 'Punjab', 'Bihar', 'Assam', 'Jharkhand', 'Himachal Pradesh'],
  courses: ['B Tech', 'M Tech', 'Bachelor of Engineering', 'Civil Engineering', 'Mechanical Engineering', 'Automobile Engineering', 'Aerospace Engineering', 'Aeronautical Engineering', 'Software Engineering', 'Computer Engineering'],
}

function Tag({ label }) {
  return <span className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-600 hover:border-blue-400 hover:text-blue-600 cursor-pointer transition-colors">{label}</span>
}

export default function Trending() {
  const [activeTab, setActiveTab] = useState('Engineering')

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold">Trending Colleges &amp; Courses</h2>
          <p className="mt-4 text-gray-500 text-lg">Updated list of colleges, specializations &amp; career paths</p>
        </div>
        {/* Tab bar */}
        <div className="relative bg-white shadow-sm rounded py-3 mb-6 overflow-hidden">
          <div className="flex gap-3 overflow-x-auto no-scrollbar px-4">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition-colors ${activeTab === t ? 'bg-red-600 text-white border-red-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        {/* Content grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-5 h-[440px] overflow-y-auto">
            <h3 className="text-base font-bold mb-4">Featured Colleges</h3>
            <div className="flex flex-wrap gap-2">{data.colleges.map(c => <Tag key={c} label={c} />)}</div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow p-5 flex-1 overflow-y-auto">
              <h3 className="text-base font-bold mb-4">Important Exams</h3>
              <div className="flex flex-wrap gap-2">{data.exams.map(e => <Tag key={e} label={e} />)}</div>
            </div>
            <div className="bg-white rounded-xl shadow p-5 flex-1 overflow-y-auto">
              <h3 className="text-base font-bold mb-4">Top States</h3>
              <div className="flex flex-wrap gap-2">{data.states.map(s => <Tag key={s} label={s} />)}</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-5 h-[440px] overflow-y-auto">
            <h3 className="text-base font-bold mb-4">Related Courses</h3>
            <div className="flex flex-wrap gap-2">{data.courses.map(c => <Tag key={c} label={c} />)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
