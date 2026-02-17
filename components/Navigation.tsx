'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Register', href: '/register' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Data', href: '/data' },
    { name: 'Resources', href: '/resources' },
    { name: 'People', href: '/people' },
    { name: 'FAQ', href: '/faq' },
  ]

  return (
    <nav className="bg-black/95 backdrop-blur-sm sticky top-0 z-50 border-b border-indigo/20 shadow-[0_4px_20px_rgba(63,65,224,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-title font-bold text-bubblegum hover:text-bubblegum-light transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(241,111,189,0.6)] tracking-wider">
              BOW DATA FEST 2026
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-bubblegum hover:text-bubblegum-light px-3 py-2 text-sm font-medium transition-all duration-300 font-sans uppercase tracking-wider relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bubblegum group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-bubblegum hover:text-bubblegum-light focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-bubblegum/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-bubblegum hover:text-bubblegum-light block px-3 py-2 text-base font-medium font-sans uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
