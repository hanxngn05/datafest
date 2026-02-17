export default function MentorJudgeSponsorRegistration() {
  return (
    <section className="bg-white border-2 border-bubblegum rounded-lg p-8 md:p-10">
      <h2 className="text-3xl font-title font-bold mb-6 text-black">Mentor / Judge / Sponsor Registration</h2>
      <h3 className="text-2xl font-title font-semibold mb-6 text-bubblegum">
        Support the Next Generation of Data Scientists
      </h3>

      <p className="text-lg text-white/80 mb-8">
        We are seeking mentors, judges, and sponsors who want to engage with talented undergraduate students tackling real-world data challenges.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-bubblegum/5 rounded-lg p-6 border-2 border-bubblegum hover:border-indigo transition-colors">
          <h4 className="text-xl font-title font-semibold mb-3 text-black">Mentors</h4>
          <p className="text-white/80 mb-4">
            Circulate among teams during the weekend to provide technical guidance, brainstorming support, and encouragement.
          </p>
          <p className="text-sm text-black/70">
            <strong className="font-mono">Commitment:</strong> 2-4 hours on Friday evening or Saturday.
          </p>
        </div>

        <div className="bg-dragonfruit/5 rounded-lg p-6 border-2 border-dragonfruit hover:border-bubblegum transition-colors">
          <h4 className="text-xl font-title font-semibold mb-3 text-black">Judges</h4>
          <p className="text-white/80 mb-4">
            Evaluate final presentations on Sunday morning and help select award winners across multiple categories.
          </p>
          <p className="text-sm text-black/70">
            <strong className="font-mono">Commitment:</strong> Sunday, April 12, 10:00 AM - 1:00 PM.
          </p>
        </div>

        <div className="bg-indigo/5 rounded-lg p-6 border-2 border-indigo hover:border-dragonfruit transition-colors">
          <h4 className="text-xl font-title font-semibold mb-3 text-black">Sponsors</h4>
          <p className="text-white/80 mb-4">
            Help make this event possible through financial support or in-kind contributions. Sponsors will be recognized on our website and event materials.
          </p>
        </div>
      </div>

      <div className="text-center">
        <a
          href="#"
          className="inline-block bg-bubblegum text-white px-8 py-4 rounded-lg font-title font-semibold text-lg hover:bg-bubblegum-dark transition-colors border-2 border-black shadow-[4px_4px_0px_0px_rgba(26,28,30)] hover:shadow-[6px_6px_0px_0px_rgba(241,111,189)] hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          Register as Mentor/Judge/Sponsor →
        </a>
        <p className="mt-4 text-black/70">
          For sponsorship inquiries, contact{' '}
          <a href="mailto:qwang@wellesley.edu" className="text-bubblegum hover:text-bubblegum-dark font-semibold">
            qwang@wellesley.edu
          </a>
        </p>
      </div>
    </section>
  )
}
