const states = [
  { img: '/ap.png', name: 'Andhra Pradesh' },
  { img: '/arunachalp.png', name: 'Arunachal Pradesh' },
  { img: '/assam.png', name: 'Assam' },
  { img: '/bihar.png', name: 'Bihar' },
  { img: '/chhattisgarh.png', name: 'Chhattisgarh' },
  { img: '/goa.png', name: 'Goa' },
  { img: '/gujarat.png', name: 'Gujarat' },
  { img: '/haryana.png', name: 'Haryana' },
  { img: '/hp.png', name: 'Himachal Pradesh' },
  { img: '/jharkhand.png', name: 'Jharkhand' },
  { img: '/karnataka.png', name: 'Karnataka' },
  { img: '/kerala.png', name: 'Kerala' },
  { img: '/mp.png', name: 'Madhya Pradesh' },
  { img: '/maharashtra.png', name: 'Maharashtra' },
  { img: '/manipur.png', name: 'Manipur' },
  { img: '/odisha.png', name: 'Odisha' },
  { img: '/punjab.png', name: 'Punjab' },
  { img: '/rajasthan.png', name: 'Rajasthan' },
  { img: '/telengana.png', name: 'Telangana' },
  { img: '/uttarpradesh.png', name: 'Uttar Pradesh' },
  { img: '/westbengal.png', name: 'West Bengal' },
  { img: '/chandigarh.png', name: 'Chandigarh (UT)' },
  { img: '/delhi.png', name: 'Delhi (NCT)' },
  { img: '/jnk.png', name: 'Jammu & Kashmir' },
]

export default function States() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">Universities by State</h2>
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 px-2">
          {states.map((s) => (
            <a key={s.name} href="#"
              className="min-w-[140px] flex flex-col items-center bg-white rounded-2xl p-5 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="h-20 w-20 rounded-xl bg-gradient-to-tr from-indigo-50 to-sky-50 flex items-center justify-center mb-2">
                <img src={s.img} alt={s.name} className="h-14 object-contain" />
              </div>
              <p className="text-xs font-semibold text-gray-700 text-center">{s.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
