export default function Guides() {
  return (
    <section className="bg-black border-2 border-indigo rounded-lg p-8 md:p-10">
      <h2 className="text-3xl font-title font-bold mb-6 text-black">Guides</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Getting Started with DataFest</h3>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            New to data analysis competitions? Here are some resources to help you prepare:
          </p>

          <div className="bg-indigo/5 border-l-4 border-indigo p-6 space-y-3">
            <div>
              <h4 className="font-title font-semibold text-white mb-2">Recommended tools:</h4>
              <p className="text-white/80">R, Python, Tableau, Excel, or any data analysis software you are comfortable with</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Team collaboration:</h4>
              <p className="text-white/80">Consider using shared documents, version control (Git), or cloud storage to coordinate your work</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Time management:</h4>
              <p className="text-white/80">Plan to spend time on data cleaning, exploratory analysis, focused investigation, and presentation creation</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Technical Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 border-2 border-black text-center">
              <p className="text-white/40 font-sans">[Placeholder]</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-black text-center">
              <p className="text-white/40 font-sans">[Placeholder]</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-black text-center">
              <p className="text-white/40 font-sans">[Placeholder]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
