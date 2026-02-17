import ParticipantRegistration from '@/components/register/ParticipantRegistration'
import MentorJudgeSponsorRegistration from '@/components/register/MentorJudgeSponsorRegistration'

export default function Register() {
  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-title font-bold text-center mb-12 text-bubblegum uppercase tracking-wider">Register</h1>
        <div className="space-y-16">
          <div id="participant">
            <ParticipantRegistration />
          </div>
          <div id="mentor">
            <MentorJudgeSponsorRegistration />
          </div>
        </div>
      </div>
    </div>
  )
}
