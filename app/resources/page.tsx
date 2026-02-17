import Workshops from '@/components/resources/Workshops'
import Guides from '@/components/resources/Guides'
import AnalysisSupport from '@/components/resources/AnalysisSupport'

export default function Resources() {
  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-title font-bold text-center mb-12 text-bubblegum uppercase tracking-wider">Resources</h1>
        <div className="space-y-16">
          <Workshops />
          <Guides />
          <AnalysisSupport />
        </div>
      </div>
    </div>
  )
}
