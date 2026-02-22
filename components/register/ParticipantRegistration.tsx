export default function ParticipantRegistration() {
  return (
    <section className="bg-black border-2 border-indigo rounded-lg p-8 md:p-10">
      <h2 className="text-3xl font-title font-bold mb-6 text-white uppercase">Participant Registration</h2>
      <h3 className="text-2xl font-title font-semibold mb-6 text-indigo uppercase">
        Compete at BOW DataFest 2026
      </h3>

      <p className="text-lg text-white/80 mb-6">
        Registration is open to all undergraduate students currently enrolled at Babson, Olin, or Wellesley. Teams can be formed from a single institution or include members from multiple colleges.
      </p>

      <div className="bg-indigo/10 border-l-4 border-indigo p-6 mb-8">
        <h4 className="font-title font-semibold text-lg mb-4 text-white">What to know before you register:</h4>
        <ul className="space-y-2 text-white/80">
          <li className="flex items-start">
            <span className="text-indigo mr-2 font-mono">•</span>
            <span>Teams consist of 2-5 students</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo mr-2 font-mono">•</span>
            <span>You can register individually and we will help you find teammates, or register with a pre-formed team</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo mr-2 font-mono">•</span>
            <span>No prior experience with large datasets is required</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo mr-2 font-mono">•</span>
            <span>All meals, snacks, and a DataFest t-shirt are included</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo mr-2 font-mono">•</span>
            <span>You will need to bring your own laptop</span>
          </li>
          <li className="flex items-start">
            <span className="text-indigo mr-2 font-mono">•</span>
            <span><strong className="font-mono">Registration: February 27 (Friday) – March 29 (Sunday), 2026</strong></span>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <a
          href="https://forms.gle/fjP3F3PVnYfYgvre6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo text-white px-8 py-4 rounded-lg font-title font-semibold text-lg hover:bg-indigo-dark transition-colors border-2 border-black shadow-[4px_4px_0px_0px_rgba(26,28,30)] hover:shadow-[6px_6px_0px_0px_rgba(63,65,224)] hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          Register Now →
        </a>
        <p className="mt-4 text-white/70">
          Questions? Contact us at{' '}
          <a href="mailto:qwang@wellesley.edu" className="text-indigo hover:text-indigo-dark font-semibold">
            qwang@wellesley.edu
          </a>
        </p>
      </div>
    </section>
  )
}
