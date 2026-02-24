export default function RulesSubmission() {
  return (
    <section className="bg-black border-2 border-indigo rounded-lg p-8 md:p-10">
      <h2 className="text-3xl font-title font-bold mb-8 text-white">Rules & Submission Guidelines</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Competition Rules</h3>
          <div className="space-y-4">
            <div className="bg-indigo/10 border-2 border-indigo rounded-lg p-5">
              <h4 className="font-title font-semibold text-lg mb-2 text-white">Team composition:</h4>
              <p className="text-white/80">Teams must have 2-5 members. All team members must be currently enrolled undergraduate students at Babson, Olin, or Wellesley.</p>
            </div>

            <div className="bg-indigo/10 border-2 border-indigo rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2 text-white">Original work:</h4>
              <p className="text-white/80">All analysis and presentation materials must be the original work of your team, completed during the competition weekend.</p>
            </div>

            <div className="bg-indigo/10 border-2 border-indigo rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2 text-white">Attendance & competition hours:</h4>
              <p className="text-white/80">While as many of your team members as possible should be present at the introduction at 6:15 PM on Friday, you do not have to be present for the entire duration of the competition. Team members can come and go as you please, but all work has to be done during the competition hours (i.e., no all-nighters!).</p>
            </div>

            <div className="bg-indigo/10 border-2 border-indigo rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2 text-white">Friendly competition & support:</h4>
              <p className="text-white/80">This is a friendly competition. We encourage you to collaborate and help out other teams when they encounter issues you know how to solve. There will be a Slack channel to post questions, and faculty and mentors will also be available throughout the weekend to attempt to answer questions you might have.</p>
            </div>

            <div className="bg-indigo/10 border-2 border-indigo rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2 text-white">Software:</h4>
              <p className="text-white/80">There are no limitations on what software you use.</p>
            </div>

            <div className="bg-indigo/10 border-2 border-indigo rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2 text-white">External resources allowed:</h4>
              <p className="text-white/80">You may use any software, libraries, online documentation, or reference materials. However, you may not consult with people outside the event (family, friends, professors not serving as mentors).</p>
            </div>

            <div className="bg-indigo/10 border-2 border-indigo rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2 text-white">Confidentiality:</h4>
              <p className="text-white/80">The dataset is confidential. You may not share it with anyone outside the competition or post it online.</p>
            </div>

            <div className="bg-indigo/10 border-2 border-indigo rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2 text-white">Presentation format:</h4>
              <p className="text-white/80">Each team must prepare a 5-minute video presentation, followed by live questions from the judges. Submission details will be confirmed and communicated during the opening ceremony.</p>
            </div>

            <div className="bg-indigo/10 border-2 border-indigo rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2 text-white">Judging criteria:</h4>
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
