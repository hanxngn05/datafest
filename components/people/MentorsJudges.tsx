export default function MentorsJudges() {
  return (
    <section className="bg-black border-2 border-indigo rounded-lg p-8 md:p-10">
      <h2 className="text-3xl font-title font-bold mb-8 text-white">Mentors & Judges</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Mentors</h3>
          <p className="text-lg text-white/80 leading-relaxed mb-4">
            Throughout the weekend, faculty, staff, and industry professionals will be available to provide guidance and feedback. Mentors can help with brainstorming, technical questions, and strategic advice.
          </p>
          <p className="text-white/60">
            A full list of confirmed mentors will be shared with participants before the event.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Judges</h3>
          <p className="text-lg text-white/80 leading-relaxed mb-4">
            Our panel of three external judges will evaluate all final presentations. Each team presents a 5-minute video followed by live questions from the judges. Winners will be selected across multiple award categories.
          </p>
          <p className="text-white/60">
            Judge profiles will be posted in March 2026.
          </p>
        </div>
      </div>
    </section>
  )
}
