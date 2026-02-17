import GuestsSpeakers from '@/components/people/GuestsSpeakers'
import MentorsJudges from '@/components/people/MentorsJudges'
import OrganizingTeam from '@/components/people/OrganizingTeam'

export default function People() {
  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-title font-bold text-center mb-12 text-bubblegum uppercase tracking-wider">People</h1>
        <div className="space-y-16">
          <GuestsSpeakers />
          <MentorsJudges />
          <OrganizingTeam />
        </div>
      </div>
    </div>
  )
}
