export default function OrganizingTeam() {
  const faculty = [
    {
      name: 'Qing (Wendy) Wang',
      role: 'Associate Professor of Mathematics, Wellesley College',
      title: 'Team Leader',
    },
    {
      name: 'Cassandra Pattanayak',
      role: 'Jack and Sandra Polk Guthman \'65 Director, Quantitative Analysis Institute & Associate Teaching Professor in Quantitative Reasoning and Mathematics, Wellesley College',
    },
    {
      name: 'Vicky R. Zhu',
      role: 'Assistant Professor of Business Analytics, Babson College',
    },
    {
      name: 'David Shuman',
      role: 'Professor of Data Science and Applied Mathematics, Olin College',
    },
  ]

  const students = [
    {
      name: 'Diana Tsang \'28',
      role: 'Co-President, Wellesley Student Interdisciplinary Data Initiative (SIDI)',
    },
    {
      name: 'Han Nguyen \'27',
      role: 'Co-President, Wellesley Student Interdisciplinary Data Initiative (SIDI)',
    },
  ]

  return (
    <section className="bg-black border-2 border-indigo rounded-lg p-8 md:p-10">
      <h2 className="text-3xl font-title font-bold mb-8 text-white">Organizing Team</h2>

      <div className="mb-6">
        <h3 className="text-xl font-title font-semibold mb-4 text-indigo">BOW DataFest Planning Committee</h3>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Faculty Organizers</h3>
          <div className="space-y-4">
            {faculty.map((person, index) => (
              <div key={index} className="bg-indigo/10 rounded-lg p-5 border-l-4 border-indigo">
                <h4 className="font-semibold text-lg text-white">{person.name}</h4>
                {person.title && (
                  <p className="text-indigo font-medium text-sm mb-1">{person.title}</p>
                )}
                <p className="text-white/80">{person.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">Student Organizers</h3>
          <div className="space-y-4">
            {students.map((person, index) => (
              <div key={index} className="bg-indigo/10 rounded-lg p-5 border-l-4 border-indigo">
                <h4 className="font-semibold text-lg text-white">{person.name}</h4>
                <p className="text-white/80">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-indigo/5 border-l-4 border-indigo p-6 rounded-lg">
        <p className="text-white/80 leading-relaxed">
          BOW DataFest 2026 represents an exciting evolution in our event model. For the first time, student leaders are playing a central role in planning and executing the competition. This collaboration between faculty and students across three colleges exemplifies the spirit of the BOW Three College Collaboration.
        </p>
      </div>
    </section>
  )
}
