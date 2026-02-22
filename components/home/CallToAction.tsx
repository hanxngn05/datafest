import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="bg-black py-16 relative overflow-hidden">
      {/* Subtle tech background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(63, 65, 224, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(63, 65, 224, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Participant Registration */}
          <div className="bg-black border-2 border-indigo rounded-lg p-8 hover:border-bubblegum transition-all duration-300 group relative overflow-hidden">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-indigo blur-xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-title font-bold text-white mb-4 uppercase">
                Ready to compete?
              </h2>
              <p className="text-white/70 mb-6 font-sans">
                Registration: February 27 (Friday) – March 29 (Sunday), 2026.
              </p>
              <Link
                href="/register#participant"
                className="inline-block bg-indigo text-white px-6 py-3 rounded-lg font-title font-semibold hover:bg-indigo-light transition-all duration-300 border-2 border-indigo shadow-[4px_4px_0px_0px_rgba(63,65,224)] hover:shadow-[6px_6px_0px_0px_rgba(63,65,224)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:drop-shadow-[0_0_15px_rgba(63,65,224,0.6)]"
              >
                Register as Participant →
              </Link>
            </div>
          </div>

          {/* Mentor Registration */}
          <div className="bg-black border-2 border-bubblegum rounded-lg p-8 hover:border-indigo transition-all duration-300 group relative overflow-hidden">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-bubblegum blur-xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-title font-bold text-white mb-4 uppercase">
                Want to support our students?
              </h2>
              <p className="text-white/70 mb-6 font-sans">
                We welcome mentors from industry and academia.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeaL3VQYMKA9gEl7EG3nJxIHXO4WvjS6ksffTREoixppAO5Vg/viewform?usp=sharing&ouid=102435638879991526711"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-bubblegum text-white px-6 py-3 rounded-lg font-title font-semibold hover:bg-bubblegum-light transition-all duration-300 border-2 border-bubblegum shadow-[4px_4px_0px_0px_rgba(241,111,189)] hover:shadow-[6px_6px_0px_0px_rgba(241,111,189)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:drop-shadow-[0_0_15px_rgba(241,111,189,0.6)]"
              >
                Register as Mentor →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
