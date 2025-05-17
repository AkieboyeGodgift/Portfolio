'use client'

import Link from 'next/link'
import { useState } from 'react'

const PhoneNumber = 'tel:+2348122981722';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="flex justify-between items-center py-6 px-8 md:px-16">
        {/* Logo */}
        <div className="text-2xl font-semibold text-gray-900">
          Akieboye Godgift
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <li><Link href="#services" className="hover:text-blue-600 transition">Services</Link></li>
          <li><Link href="#works" className="hover:text-blue-600 transition">Works</Link></li>
          <li><Link href="#notes" className="hover:text-blue-600 transition">Notes</Link></li>
          <li><Link href="#experience" className="hover:text-blue-600 transition">Experience</Link></li>
        </ul>

        {/* Phone Number */}
        <div className="text-sm font-medium text-gray-800 hidden md:block">
          <Link href={PhoneNumber}>+234 8122 981 722</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-8 pb-4 space-y-4 text-sm font-medium text-gray-700">
          <Link href="#services" className="block hover:text-blue-600">Services</Link>
          <Link href="#works" className="block hover:text-blue-600">Works</Link>
          <Link href="#notes" className="block hover:text-blue-600">Notes</Link>
          <Link href="#experience" className="block hover:text-blue-600">Experience</Link>
          <Link href={PhoneNumber} className="block hover:text-blue-600">+234 8122 981 722</Link>
        </div>
      )}
    </nav>
  )
}
