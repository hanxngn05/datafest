export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-bubblegum/20 relative overflow-hidden">
      {/* Tech-inspired background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(63, 65, 224, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(63, 65, 224, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1 - Balanced height */}
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-title font-semibold mb-4 text-bubblegum h-7 flex items-center">BOW ASA DataFest 2026</h3>
            <p className="text-white/70 text-sm font-sans leading-relaxed flex-grow">
              An intensive, weekend-long data analysis competition for undergraduate students from Babson, Olin, and Wellesley.
            </p>
          </div>

          {/* Column 2 - Balanced height with spacing */}
          <div className="flex flex-col h-full items-center md:items-start">
            <h3 className="text-lg font-title font-semibold mb-4 text-indigo h-7 flex items-center w-full justify-center md:justify-start">Quick Links</h3>
            <ul className="space-y-3 text-sm flex-grow flex flex-col justify-center md:justify-start w-full">
              <li className="text-center md:text-left">
                <a href="/register" className="text-white/70 hover:text-bubblegum transition-all duration-300 font-sans inline-block hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(241,111,189,0.5)]">
                  → Register
                </a>
              </li>
              <li className="text-center md:text-left">
                <a href="/schedule" className="text-white/70 hover:text-bubblegum transition-all duration-300 font-sans inline-block hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(241,111,189,0.5)]">
                  → Schedule
                </a>
              </li>
              <li className="text-center md:text-left">
                <a href="/data" className="text-white/70 hover:text-bubblegum transition-all duration-300 font-sans inline-block hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(241,111,189,0.5)]">
                  → Data
                </a>
              </li>
              <li className="text-center md:text-left">
                <a href="/faq" className="text-white/70 hover:text-bubblegum transition-all duration-300 font-sans inline-block hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(241,111,189,0.5)]">
                  → FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Balanced height */}
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-title font-semibold mb-4 text-dragonfruit h-7 flex items-center">Contact</h3>
            <div className="flex flex-col flex-grow space-y-4">
              <p className="text-white/70 text-sm font-sans leading-relaxed">
                Questions? Contact us at{' '}
                <a href="mailto:qwang@wellesley.edu" className="text-bubblegum hover:text-bubblegum-light transition-all duration-300 font-semibold hover:drop-shadow-[0_0_8px_rgba(241,111,189,0.6)]">
                  qwang@wellesley.edu
                </a>
              </p>
              <p className="text-white/70 text-sm font-sans leading-relaxed">
                BOW DataFest is sponsored by the American Statistical Association and supported by the BOW Presidential Innovation Grant.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-indigo/30 mt-8 pt-8 text-center text-sm text-white/70">
          <p className="font-title tracking-wider">&copy; 2026 BOW ASA DataFest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
