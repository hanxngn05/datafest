export default function AnalysisSupport() {
  return (
    <section className="bg-black border-2 border-indigo rounded-lg p-8 md:p-10">
      <h2 className="text-3xl font-title font-bold mb-8 text-black">Analysis Support</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">What Makes a Strong DataFest Project?</h3>
          <p className="text-lg text-white/80 mb-4">Successful teams typically:</p>
          <ul className="space-y-2 text-white/80 bg-indigo/5 rounded-lg p-6">
            <li className="flex items-start">
              <span className="text-indigo mr-3">✓</span>
              <span>Start with exploratory data analysis to understand the structure and quality of the data</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo mr-3">✓</span>
              <span>Formulate a clear, interesting research question</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo mr-3">✓</span>
              <span>Use appropriate statistical or computational methods</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo mr-3">✓</span>
              <span>Create clear, informative visualizations</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo mr-3">✓</span>
              <span>Tell a compelling story that connects data insights to real-world implications</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Common Pitfalls to Avoid</h3>
          <ul className="space-y-2 text-white/80 bg-bubblegum/10 rounded-lg p-6 border-l-4 border-bubblegum">
            <li className="flex items-start">
              <span className="text-dragonfruit mr-3 font-mono">⚠</span>
              <span>Spending too much time cleaning data and not enough time on analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-dragonfruit mr-3 font-mono">⚠</span>
              <span>Trying to answer too many questions instead of going deep on one or two</span>
            </li>
            <li className="flex items-start">
              <span className="text-dragonfruit mr-3 font-mono">⚠</span>
              <span>Creating overly complex models when simpler approaches would suffice</span>
            </li>
            <li className="flex items-start">
              <span className="text-dragonfruit mr-3 font-mono">⚠</span>
              <span>Neglecting to check assumptions or validate findings</span>
            </li>
            <li className="flex items-start">
              <span className="text-dragonfruit mr-3 font-mono">⚠</span>
              <span>Leaving presentation creation until the last minute</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
