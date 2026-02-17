export default function RulesSubmission() {
  return (
    <section className="bg-black border-2 border-indigo rounded-lg p-8 md:p-10">
      <h2 className="text-3xl font-title font-bold mb-8 text-black">Rules & Submission Guidelines</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Competition Rules</h3>
          <div className="space-y-4">
            <div className="bg-indigo/5 border-2 border-black rounded-lg p-5">
              <h4 className="font-title font-semibold text-lg mb-2 text-black">Team composition:</h4>
              <p className="text-white/80">Teams must have 2-5 members. All team members must be currently enrolled undergraduate students at Babson, Olin, or Wellesley.</p>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2 text-black">Original work:</h4>
              <p className="text-white/80">All analysis and presentation materials must be the original work of your team, completed during the competition weekend.</p>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2 text-black">External resources allowed:</h4>
              <p className="text-white/80">You may use any software, libraries, online documentation, or reference materials. However, you may not consult with people outside the event (family, friends, professors not serving as mentors).</p>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2 text-black">Confidentiality:</h4>
              <p className="text-white/80">The dataset is confidential. You may not share it with anyone outside the competition or post it online.</p>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2 text-black">Presentation format:</h4>
              <p className="text-white/80">Each team must create a presentation with a 5-minute video recording. Slides must be submitted by 11:59 PM on Saturday, April 11.</p>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2 text-black">Judging criteria:</h4>
              <p className="text-white/80">Presentations will be evaluated on clarity of research question, appropriateness of analysis methods, quality of visualizations, insight and creativity, and overall presentation quality.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Submission Process</h3>
          <p className="text-lg text-white/80 leading-relaxed">
            Detailed submission instructions, including file formats and upload links, will be provided during the opening ceremony and posted in your team workspace.
          </p>
        </div>
      </div>
    </section>
  )
}
