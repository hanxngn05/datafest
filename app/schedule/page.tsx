import Overview from '@/components/schedule/Overview'
import DetailedSchedule from '@/components/schedule/DetailedSchedule'
import Logistics from '@/components/schedule/Logistics'

export default function Schedule() {
  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-title font-bold text-center mb-12 text-bubblegum uppercase tracking-wider">Schedule</h1>
        <div className="space-y-16">
          <Overview />
          <DetailedSchedule />
          <Logistics />
        </div>
      </div>
    </div>
  )
}
