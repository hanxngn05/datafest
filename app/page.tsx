import Hero from '@/components/home/Hero'
import CallToAction from '@/components/home/CallToAction'
import KeyInfoSnapshot from '@/components/home/KeyInfoSnapshot'
import PartnersSponsors from '@/components/home/PartnersSponsors'

export default function Home() {
  return (
    <div>
      <Hero />
      <CallToAction />
      <KeyInfoSnapshot />
      <PartnersSponsors />
    </div>
  )
}
