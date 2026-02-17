import TopicOverview from '@/components/data/TopicOverview'
import DatasetAccess from '@/components/data/DatasetAccess'
import RulesSubmission from '@/components/data/RulesSubmission'

export default function Data() {
  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-title font-bold text-center mb-12 text-bubblegum uppercase tracking-wider">Data</h1>
        <div className="space-y-16">
          <TopicOverview />
          <DatasetAccess />
          <RulesSubmission />
        </div>
      </div>
    </div>
  )
}
