export default function DetailedSchedule() {
  const schedule = [
    {
      day: 'Friday, April 10',
      events: [
        { time: '5:00 PM - 6:00 PM', title: 'Opening ceremony in Science Center H-101', description: 'Welcome remarks, dataset reveal, and event overview' },
        { time: '6:00 PM - 7:00 PM', title: 'Dinner at Lulu Dining Hall', description: '' },
        { time: '7:00 PM - 12:00 AM', title: 'Begin exploring the dataset', description: 'Work in your assigned team space. Mentors available for consultation.' },
      ],
    },
    {
      day: 'Saturday, April 11',
      events: [
        { time: '8:00 AM', title: 'Science Center opens for teams', description: '' },
        { time: '8:00 AM - 9:00 AM', title: 'Breakfast available', description: '' },
        { time: '9:00 AM - 6:00 PM', title: 'Data analysis continues', description: 'Mentors circulating throughout the day' },
        { time: '12:00 PM - 1:00 PM', title: 'Lunch provided', description: '' },
        { time: '6:00 PM - 7:00 PM', title: 'Celebratory dinner at Science Center Innovation Hub', description: '' },
        { time: '7:00 PM - 11:59 PM', title: 'Finalize analysis and create presentation', description: 'Final 3-slide presentation must be submitted by midnight' },
      ],
    },
    {
      day: 'Sunday, April 12',
      events: [
        { time: '8:00 AM - 9:00 AM', title: 'Breakfast and presentation practice', description: '' },
        { time: '10:00 AM - 11:30 AM', title: 'Team presentations (5 minutes each)', description: 'Science Center H-101' },
        { time: '11:30 AM - 12:30 PM', title: 'Judging deliberation and awards ceremony', description: '' },
        { time: '12:30 PM - 1:30 PM', title: 'Closing lunch at Science Center Innovation Hub', description: '' },
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
