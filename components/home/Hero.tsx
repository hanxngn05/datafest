export default function Hero() {
  return (
    <section className="bg-black text-white relative overflow-hidden min-h-screen flex items-center">
      {/* Tech-inspired animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bubblegum rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(63, 65, 224, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(63, 65, 224, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full relative z-10">
        <div className="text-center">
          {/* Large Scribbled-Style Title */}
          <div className="mb-16 flex justify-center">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle, rgba(63, 65, 224, 0.4) 0%, transparent 70%)'
              }}></div>
              {/* Logo Image */}
              <img
                src="/logo.png"
                alt="BOW DATA FEST 2026"
                className="max-w-full h-auto mx-auto relative z-10 transition-transform duration-500 group-hover:scale-105"
                style={{ maxHeight: '60vh', filter: 'drop-shadow(0 0 30px rgba(63, 65, 224, 0.5))' }}
              />
              {/* Fallback text if image doesn't load */}
              <h1 className="sr-only text-7xl md:text-8xl lg:text-9xl font-bold mb-4 leading-none" style={{
                fontFamily: 'var(--font-azeret-mono), monospace',
                color: '#3f41e0',
                textShadow: `
                  0 0 10px rgba(63, 65, 224, 0.5),
                  0 0 20px rgba(63, 65, 224, 0.3),
                  0 0 30px rgba(63, 65, 224, 0.2)
                `,
                letterSpacing: '-0.02em',
              }}>
                BOW DATA FEST 2026
              </h1>
            </div>
          </div>

          {/* Subheading */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-title text-bubblegum mb-8 uppercase tracking-wider relative inline-block">
              <span className="relative z-10">One dataset. One weekend. Real decisions.</span>
              <span className="absolute inset-0 blur-lg opacity-50 text-bubblegum animate-pulse">One dataset. One weekend. Real decisions.</span>
            </h2>
          </div>

          {/* Body Text with Pink Highlights */}
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <p className="text-base md:text-lg font-sans leading-relaxed text-white/80">
              DataFest is an intensive, weekend-long data analysis competition where undergraduate students from Babson, Olin, and Wellesley tackle a large-scale, real-world dataset. Over 48 hours, teams of two to five students will explore, <span className="text-bubblegum font-semibold">analyze</span>, and present insights from a surprise dataset provided by the American Statistical Association.
            </p>
            <p className="text-base md:text-lg font-sans leading-relaxed text-white/80">
              This is your chance to apply your skills beyond the classroom, collaborate with peers across three campuses, and compete for recognition in categories like Best in Show, Best <span className="text-bubblegum font-semibold">Visualization</span>, and Best Use of External Data.
            </p>
            <p className="text-base md:text-lg font-sans leading-relaxed text-white/80">
              DataFest is taking place at over 40 locations around the US, Canada, and Germany, with more than 75 colleges and universities participating. Winning contributions from BOW and other locations will be publicized together on the American Statistical Association&apos;s national website.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
