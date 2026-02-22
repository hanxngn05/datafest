export default function KeyInfoSnapshot() {
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
          <span className="relative z-10">Key Info Snapshot</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="bg-black border-2 border-indigo rounded-lg p-6 hover:border-bubblegum transition-all duration-300 flex flex-col group relative overflow-hidden">
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-indigo blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-title font-semibold mb-4 text-indigo uppercase h-12 flex items-center">Timeline</h3>
              <ul className="space-y-3 text-white/80 font-sans flex-grow">
                <li className="leading-relaxed">
                  <span className="font-semibold font-title text-indigo">February 27 - March 29:</span> Registration open
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold font-title text-indigo">Friday, April 10 (TBD):</span> Opening ceremony and dataset reveal
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold font-title text-indigo">Saturday, April 11:</span> Full day of analysis and collaboration
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold font-title text-indigo">Sunday, April 12 (TBD):</span> Team presentations and awards
                </li>
              </ul>
            </div>
          </div>

          {/* Who Should Attend */}
          <div className="bg-black border-2 border-bubblegum rounded-lg p-6 hover:border-dragonfruit transition-all duration-300 flex flex-col group relative overflow-hidden">
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-bubblegum blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-title font-semibold mb-4 text-bubblegum uppercase h-12 flex items-center">Who Should Attend</h3>
              <p className="text-white/80 leading-relaxed font-sans flex-grow">
                Current undergraduate students at Babson College, Olin College, or Wellesley College with an interest in data analysis, statistics, or computational problem-solving. All experience levels are welcome. Whether you have taken one statistics course or are a seasoned data science student, you will find challenges and opportunities to learn.
              </p>
            </div>
          </div>

          {/* What You Will Do */}
          <div className="bg-black border-2 border-dragonfruit rounded-lg p-6 hover:border-indigo transition-all duration-300 flex flex-col group relative overflow-hidden">
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-dragonfruit blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-title font-semibold mb-4 text-dragonfruit uppercase h-12 flex items-center">What You Will Do</h3>
              <p className="text-white/80 leading-relaxed font-sans flex-grow">
                Work with a team to explore a complex, messy dataset (typically 1-3 GB). You will formulate your own research questions, conduct original analysis, and present your findings in a 5-minute presentation. Throughout the weekend, faculty, staff, and industry professionals will be available to provide guidance and feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
