const faqs = [
  'What is Beyond Admission?',
  'How is Beyond Admission different from other platforms?',
  'Is Beyond Admission or college change service free to use?',
  'Can I apply to multiple universities and countries through Beyond Admission?',
  'Which countries can I apply to through Beyond Admission?',
  'Do you provide visa assistance?',
  'What happens after I receive an admission offer?',
  'Can someone help me choose the right university or program?',
  'Do you offer support for SOPs and LORs?',
]

export default function FAQ() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Have questions about Beyond Admission? Find answers to the most common queries from students.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:px-6 md:px-10 lg:px-16">
          {faqs.map((q) => (
            <div key={q} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <button className="w-full flex justify-between items-center px-4 py-3.5 font-medium text-sm bg-white hover:bg-blue-50 transition-colors text-left gap-2">
                <span>{q}</span>
                <svg className="text-blue-600 flex-shrink-0" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
