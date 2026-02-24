import FAQSection from '@/components/faq/FAQSection'

export default function FAQ() {
  const faqSections = [
    {
      title: 'Eligibility',
      questions: [
        {
          q: 'Who can participate in BOW DataFest?',
          a: 'Any undergraduate student currently enrolled at Babson College, Olin College, or Wellesley College is eligible to participate.',
        },
        {
          q: 'Do I need prior experience with data analysis?',
          a: 'No prior experience with large datasets is required. If you have taken at least one course involving statistics, data analysis, or programming, you will have the foundation to contribute meaningfully to a team. Students with more advanced skills are also welcome and encouraged to participate.',
        },
        {
          q: 'Can graduate students participate?',
          a: 'No, BOW DataFest is exclusively for undergraduate students.',
        },
      ],
    },
    {
      title: 'Teams & Participation',
      questions: [
        {
          q: 'How do I form a team?',
          a: 'You can register as an individual and we will help match you with teammates, or you can register as a pre-formed team of 2-5 students. Teams can include students from one college or multiple colleges.',
        },
        {
          q: 'Can I participate if I cannot attend the entire weekend?',
          a: 'We strongly encourage participants to attend the full weekend. However, we understand that conflicts may arise. If you need to miss a portion of the event, please communicate with your team and the organizing committee.',
        },
        {
          q: 'What if I register but then cannot attend?',
          a: 'Please notify us as soon as possible at qwang@wellesley.edu so we can plan accordingly.',
        },
        {
          q: 'Will food be provided?',
          a: 'Yes, all meals and snacks throughout the weekend are included. We will accommodate dietary restrictions noted during registration.',
        },
      ],
    },
    {
      title: 'Data & Submissions',
      questions: [
        {
          q: 'What kind of data will we be analyzing?',
          a: 'The dataset is provided by the American Statistical Association and will remain confidential until the opening ceremony. Past DataFest datasets have been large (1-3 GB), real-world, and intentionally messy to simulate authentic data science challenges.',
        },
        {
          q: 'What software should I use?',
          a: 'You may use any software or programming language you prefer. Common choices include R, Python, Tableau, Excel, SPSS, and SAS. Make sure you have your preferred tools installed on your laptop before the event.',
        },
        {
          q: 'What should our presentation include?',
          a: 'Your 5-minute video presentation should clearly communicate your research question, analytical approach, key findings, and real-world implications. Each team will then answer live questions from the judges. Judges will evaluate presentations on clarity, methodology, creativity, and insight.',
        },
        {
          q: 'How will presentations be submitted?',
          a: 'Detailed submission instructions and format (e.g., slides, video) will be provided during the opening ceremony.',
        },
      ],
    },
    {
      title: 'Logistics',
      questions: [
        {
          q: 'Where should I park?',
          a: 'Limited parking is available at Wellesley College. Detailed parking instructions will be sent to registered participants in early April. We encourage students to use the BOW shuttle service when possible.',
        },
        {
          q: 'Will there be shuttle service between campuses?',
          a: 'Yes, additional BOW shuttle runs will be scheduled at the beginning and end of each day. Exact times and pickup locations will be shared with registered participants by April 1.',
        },
        {
          q: 'Can I work overnight?',
          a: 'The Science Center is open until midnight on Friday and Saturday.',
        },
        {
          q: 'What should I bring?',
          a: 'Bring your laptop, chargers, any software you plan to use, and a water bottle. We will provide all meals, snacks, and a DataFest t-shirt. Dress comfortably.',
        },
        {
          q: 'Where can I sleep?',
          a: 'This is a day event, and participants are expected to return to their own accommodations each evening. The venue closes at midnight on Friday and Saturday.',
        },
      ],
    },
    {
      title: 'Contact',
      questions: [
        {
          q: 'Have questions?',
          a: 'BOW DataFest is sponsored by the American Statistical Association and supported by the BOW Presidential Innovation Grant. For questions, contact qwang@wellesley.edu',
        },
      ],
    },
  ]

  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-title font-bold text-center mb-12 text-bubblegum uppercase tracking-wider">Frequently Asked Questions</h1>
        <div className="space-y-8">
          {faqSections.map((section, index) => (
            <FAQSection key={index} title={section.title} questions={section.questions} />
          ))}
        </div>
      </div>
    </div>
  )
}
