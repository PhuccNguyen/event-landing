import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SpeakersSection from '@/components/sections/SpeakersSection'
import AgendaSection from '@/components/sections/AgendaSection'
import SponsorsSection from '@/components/sections/SponsorsSection'
import VideoSection from '@/components/sections/VideoSection'
import BecomePartSection from '@/components/sections/BecomePartSection'
import RegistrationSection from '@/components/sections/RegistrationSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <RegistrationSection />
      <SpeakersSection />
      <AgendaSection />
      <SponsorsSection />
      <BecomePartSection />
    </>
  )
}
