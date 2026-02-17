export default function Logistics() {
  return (
    <section className="bg-black border-2 border-indigo rounded-lg p-8 md:p-10 relative overflow-hidden">
      {/* Tech background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(63, 65, 224, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(63, 65, 224, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-title font-bold mb-8 text-bubblegum uppercase tracking-wider">Logistics</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Shuttle Information</h3>
            <p className="text-white/80 leading-relaxed mb-4 font-sans">
              BOW shuttle service will run additional trips between Babson, Olin, and Wellesley at the start and end of each day. Exact pickup times and locations will be shared with registered participants by April 1.
            </p>
            <p className="text-white/80 leading-relaxed font-sans">
              Students may also arrange their own transportation. Limited parking is available at Wellesley College.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Venue Details</h3>
            <p className="text-white/80 leading-relaxed mb-4 font-sans">
              All DataFest activities take place in the Wellesley College Science Center, located at{' '}
              <strong className="text-bubblegum">106 Central Street, Wellesley, MA 02481</strong>.
            </p>
            <div className="bg-indigo/10 border-2 border-indigo rounded-lg p-6 space-y-3">
              <div>
                <span className="font-title font-semibold text-white">Main presentation space:</span>{' '}
                <span className="text-white/80 font-sans">Science Center H-101</span>
              </div>
              <div>
                <span className="font-title font-semibold text-white">Team workspaces:</span>{' '}
                <span className="text-white/80 font-sans">Assigned rooms on the H-floor of the Science Center</span>
              </div>
              <div>
                <span className="font-title font-semibold text-white">Meals:</span>{' '}
                <span className="text-white/80 font-sans">
                  Lulu Dining Hall (Friday dinner, Saturday lunch) and Science Center Innovation Hub (Saturday Breakfast, Saturday dinner, Sunday brunch)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
