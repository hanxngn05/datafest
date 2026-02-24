export default function DetailedSchedule() {
  const schedule = [
    {
      day: 'Friday, April 10',
      events: [
        { time: '7:00 PM - 8:00 PM', title: 'Opening ceremony', description: 'Welcome remarks, dataset reveal, and event overview' },
        { time: 'TBD', title: 'Begin exploring the dataset', description: 'Mentors available for consultation.' },
      ],
    },
    {
      day: 'Saturday, April 11',
      events: [
        { time: 'TBD', title: 'Venue opens for teams', description: '' },
        { time: 'TBD', title: 'Breakfast available', description: '' },
        { time: 'TBD', title: 'Data analysis continues', description: 'Mentors circulating throughout the day' },
        { time: 'TBD', title: 'Lunch provided', description: '' },
        { time: 'TBD', title: 'Celebratory dinner', description: '' },
        { time: 'TBD', title: 'Finalize analysis and create presentation', description: '' },
      ],
    },
    {
      day: 'Sunday, April 12',
      events: [
        { time: 'TBD', title: 'Breakfast and presentation practice', description: '' },
        { time: 'TBD', title: 'Presentations and judging', description: '5 minute video followed by live questions for each team' },
        { time: 'TBD', title: 'Awards ceremony', description: '' },
        { time: 'TBD', title: 'Closing lunch', description: '' },
      ],
    },
  ]

  return (
    <section className="bg-black border-2 border-indigo rounded-lg p-8 md:p-10 relative overflow-hidden">
      {/* Tech background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(63, 65, 224, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(63, 65, 224, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-title font-bold mb-8 text-bubblegum uppercase tracking-wider">Detailed Schedule</h2>

        <div className="space-y-8">
          {schedule.map((daySchedule, dayIndex) => (
            <div key={dayIndex} className="border-l-4 border-indigo pl-6">
              <h3 className="text-2xl font-title font-semibold mb-4 text-indigo">{daySchedule.day}</h3>
              <div className="space-y-4">
                {daySchedule.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="bg-black border-2 border-indigo rounded-lg p-4 hover:border-bubblegum transition-all duration-300 group relative overflow-hidden">
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-indigo blur-xl"></div>
                    <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-2">
                      <span className="font-title font-semibold text-indigo min-w-[180px]">{event.time}</span>
                      <div className="flex-1">
                        <h4 className="font-title font-semibold text-white">{event.title}</h4>
                        {event.description && (
                          <p className="text-white/70 text-sm mt-1 font-sans">{event.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-white/60 italic font-sans">
          Detailed room assignments will be provided closer to the event date.
        </p>
      </div>
    </section>
  )
}
