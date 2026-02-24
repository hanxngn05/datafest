export default function Overview() {
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
        <h2 className="text-3xl font-title font-bold mb-8 text-bubblegum uppercase tracking-wider">Overview</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Weekend at a Glance</h3>
          <p className="text-lg text-white/80 leading-relaxed font-sans">
            BOW DataFest spans three days of intensive collaboration, analysis, and presentation. The weekend kicks off Friday evening with the dataset reveal and concludes Sunday afternoon after team presentations and awards.
          </p>
        </div>

        <div className="bg-indigo/10 border-2 border-indigo rounded-lg p-6">
          <h3 className="text-2xl font-title font-semibold mb-4 text-white">Important Deadlines</h3>
          <ul className="space-y-3 text-white/90 font-sans">
            <li className="flex items-start">
              <span className="font-title font-semibold text-indigo mr-3 min-w-[140px]">February 27 – March 29:</span>
              <span>Registration open</span>
            </li>
            <li className="flex items-start">
              <span className="font-title font-semibold text-indigo mr-3 min-w-[140px]">April 10, 7:00 PM:</span>
              <span>Opening ceremony (attendance required)</span>
            </li>
            <li className="flex items-start">
              <span className="font-title font-semibold text-indigo mr-3 min-w-[140px]">April 12, 10:00 AM:</span>
              <span>Presentations and judging (5 minute video followed by live questions for each team)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
