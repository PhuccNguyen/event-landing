import { Metadata } from 'next'
import AgendaPage from './AgendaPage'

export const metadata: Metadata = {
  title: 'Event Agenda - TingNect Build for Billions',
  description: 'Complete schedule and detailed agenda for TingNect - Build for Billions event on August 16, 2025 in Ho Chi Minh City, Vietnam.',
  keywords: 'TingNect, agenda, schedule, Web3, blockchain, event, Ho Chi Minh City',
  openGraph: {
    title: 'Event Agenda - TingNect Build for Billions',
    description: 'Complete schedule for TingNect event - August 16, 2025',
    url: 'https://event.tingnect.com/agenda',
  },
}

export default function Agenda() {
  return <AgendaPage />
}
