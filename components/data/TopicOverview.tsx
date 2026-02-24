export default function TopicOverview() {
  return (
    <section className="bg-black border-2 border-indigo rounded-lg p-8 md:p-10">
      <h2 className="text-3xl font-title font-bold mb-6 text-white">Topic Overview</h2>

      <div>
        <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">The Challenge</h3>
        <p className="text-lg text-white/80 leading-relaxed mb-4">
          The dataset for BOW DataFest 2026 is provided by the American Statistical Association and will remain confidential until the opening ceremony on Friday, April 10 at 7:00 PM.
        </p>
        <p className="text-lg text-white/80 leading-relaxed mb-4">
          Past DataFest challenges have included data from diverse sources such as dating apps, online job platforms, and public health organizations. The datasets are large (typically 1-3 GB), messy, and designed to mimic the complexity of real-world data analysis projects.
        </p>
        <p className="text-lg text-white/80 leading-relaxed">
          Your mission is to explore the data, identify interesting patterns or insights, formulate research questions, and present your findings in a compelling 5-minute video presentation, followed by live questions from the judges.
        </p>
      </div>
    </section>
  )
}
