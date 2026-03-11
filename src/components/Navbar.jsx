import React, { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Admission', href: '#', dropdown: true },
  { label: 'Franchise', href: '#', dropdown: true },
  { label: 'Counselling', href: '#', dropdown: true },
  { label: 'Study Abroad', href: '#', dropdown: true },
  { label: 'About', href: '#' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <img
          src="/beyond-logo.png"
          alt="Beyond Admissions"
          className="w-36"
        />
        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
          {navLinks.map((l) => (
            <li key={l.label} className="relative group cursor-pointer">
              <a href={l.href} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                {l.label}
                {l.dropdown && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>
        <a href="#" className="hidden lg:block font-medium text-gray-700 hover:text-blue-600 transition-colors">
          Contact
        </a>
        <button className="lg:hidden text-2xl text-gray-700" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white px-4 pb-4 flex flex-col gap-3 font-medium text-gray-700">
          {navLinks.map((l) => <a key={l.label} href={l.href} className="hover:text-blue-600">{l.label}</a>)}
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  )
}
