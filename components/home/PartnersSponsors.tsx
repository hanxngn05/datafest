'use client'

import { useState, useEffect } from 'react'

export default function PartnersSponsors() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const [logoVersion, setLogoVersion] = useState<string>('')

  useEffect(() => {
    // Set version once on mount to bust cache
    setLogoVersion(`?v=${Date.now()}`)
  }, [])

  const partners = [
    {
      name: 'American Statistical Association',
      logo: `/asa.png${logoVersion}`,
      alt: 'ASA Logo',
      borderColor: 'border-indigo'
    },
    {
      name: 'Babson College',
      logo: '/babson-logo.png',
      alt: 'Babson College Logo',
      borderColor: 'border-indigo'
    },
    {
      name: 'Olin College',
      logo: '/olin-logo.png',
      alt: 'Olin College Logo',
      borderColor: 'border-bubblegum'
    },
    {
      name: 'Wellesley College',
      logo: '/wellesley.svg',
      alt: 'Wellesley College Logo',
      borderColor: 'border-indigo'
    },
    {
      name: 'BOW Three College Collaboration',
      logo: '/bow.png',
      alt: 'BOW Collaboration Logo',
      borderColor: 'border-indigo'
    },
  ]

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  return (
    <section className="bg-black py-16 relative overflow-hidden">
      {/* Tech background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(63, 65, 224, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(63, 65, 224, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-title font-bold text-center mb-12 text-bubblegum uppercase tracking-wider relative inline-block">
          <span className="relative z-10">Partners & Sponsors</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-start p-6 bg-black border-2 ${partner.borderColor} hover:border-bubblegum transition-all duration-300 rounded-xl min-h-[220px] shadow-lg hover:shadow-indigo/20 group relative overflow-hidden`}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${partner.borderColor === 'border-indigo' ? 'bg-indigo' : partner.borderColor === 'border-bubblegum' ? 'bg-bubblegum' : 'bg-indigo'} blur-xl`}></div>

              {/* Logo Container - white background for visibility of transparent logos */}
              <div className="relative w-full h-36 mb-4 flex items-center justify-center bg-white rounded-lg p-4 group-hover:bg-gray-50 transition-colors duration-300 z-10">
                {!imageErrors[index] ? (
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="object-contain max-w-full max-h-full w-auto h-auto"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '120px',
                    }}
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="text-gray-400 text-xs font-sans">Logo unavailable</div>
                )}
              </div>
              {/* Partner Name - Fixed height for alignment */}
              <div className="text-sm text-white font-sans font-medium text-center leading-tight px-2 h-12 flex items-center justify-center">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
