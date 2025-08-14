'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronDown,
  ChevronUp,
  Users,
  Mic,
  Coffee,
  Star,
  Play,
  Handshake,
  Gift,
  Info,
  User,
  Building
} from 'lucide-react'
import styles from './agenda.module.css'

// Event data structure
const eventsData = [
  {
    id: 1,
    title: 'August 16',
    subtitle: 'Main Conference',
    date: '2025-08-16',
    time: '14:00 – 17:00',
    isActive: true,
    color: '#3b82f6',
    sessions: [
       {
        id: 'session-1',
        time: '14:00 – 14:20',
        duration: '20 min',
        title: 'Welcome Guest & Check-in',
        description: 'Registration, welcome reception, networking with early arrivals and event material distribution. Connect with fellow Web3 enthusiasts and prepare for an exciting day.',
        icon: <Users size={20} />,
        type: 'welcome',
        location: 'Main Lobby & Registration Area',
        details: [
          'Event registration and check-in process',
          'Welcome reception with refreshments',
          'Networking opportunities with attendees',
          'Distribution of event materials and swag',
          'Photography and social media moments'
        ]
      },
      {
        id: 'session-2',
        time: '14:20 – 14:40',
        duration: '20 min',
        title: 'Opening Ceremony',
        description: 'Official event launch with welcome address by Ting Foundation leadership, event overview, and setting the stage for innovation.',
        icon: <Play size={20} />,
        type: 'ceremony',
        location: 'Main Auditorium',
        speaker: 'Ting Foundation Leadership Team',
        details: [
          'Welcome address from Ting Foundation executives',
          'Event vision, mission, and objectives overview',
          'Introduction to keynote speakers and agenda',
          'Housekeeping and logistics information',
          'Official ceremony opening declaration'
        ]
      },
      {
        id: 'session-3',
        time: '14:40 – 15:00',
        duration: '20 min',
        title: 'Keynote Session',
        description: 'Build for Billions: Strategic insights on scaling Web3 applications for billion-user markets. Learn from real-world experience and proven strategies.',
        icon: <Mic size={20} />,
        type: 'keynote',
        location: 'Main Auditorium',
        speaker: 'Lucid Hoang',
        speakerTitle: 'Founder UFIN, UFIN GROUP',
        featured: true,
        details: [
          'Strategic approaches to Web3 user acquisition and scaling',
          'Revenue optimization techniques in decentralized ecosystems',
          'Case studies from billion-user platform successes',
          'Market opportunities in emerging Web3 economies',
          'Interactive Q&A session with audience participation'
        ]
      },
      {
        id: 'session-4',
        time: '15:00 – 15:40',
        duration: '40 min',
        title: 'Panel Discussion',
        description: 'Industry experts discuss Web3 innovation trends, implementation challenges, regulatory landscape, and future opportunities in the decentralized space.',
        icon: <Users size={20} />,
        type: 'panel',
        location: 'Main Auditorium',
        speaker: 'Industry Expert Panel',
        details: [
          'Web3 technology evolution and future trends analysis',
          'Implementation challenges and practical solutions',
          'Investment landscape and funding opportunities',
          'Regulatory environment and compliance strategies',
          'Open floor discussion and audience Q&A'
        ]
      },
      {
        id: 'session-5',
        time: '15:40 – 16:00',
        duration: '20 min',
        title: 'Launching Ceremony',
        description: 'Exclusive launch ceremony for new Web3 initiatives, platform announcements, product reveals, and strategic partnership introductions.',
        icon: <Star size={20} />,
        type: 'launch',
        location: 'Main Auditorium',
        speaker: 'Ting Foundation & Strategic Partners',
        details: [
          'Unveiling of groundbreaking Web3 platform initiatives',
          'Live product demonstrations and feature showcases',
          'Strategic partnership announcements and collaborations',
          'Early access opportunities and beta program introductions',
          'Press coverage and exclusive media interactions'
        ]
      },
      {
        id: 'session-6',
        time: '16:00 – 16:30',
        duration: '30 min',
        title: 'MOU Signing Ceremony',
        description: 'Historic moment as strategic partnerships are formalized through memorandum of understanding signings and collaboration framework establishments.',
        icon: <Handshake size={20} />,
        type: 'partnership',
        location: 'Main Auditorium',
        speaker: 'Executive Leadership Teams',
        details: [
          'Strategic partnership agreement formal signings',
          'Multi-party collaboration framework presentations',
          'Joint venture announcements and alliance declarations',
          'Executive photo opportunities and press documentation',
          'Future roadmap presentations and partnership benefits'
        ]
      },
      {
        id: 'session-7',
        time: '16:30 – 17:00',
        duration: '30 min',
        title: 'Appreciation Gifts & Closing Remarks',
        description: 'Heartfelt appreciation messages, exclusive souvenir distribution, group photography, and formal conclusion of the landmark event.',
        icon: <Gift size={20} />,
        type: 'closing',
        location: 'Main Auditorium',
        speaker: 'Ting Foundation Team',
        details: [
          'Gratitude speech from Ting Foundation leadership',
          'Exclusive commemorative gifts and souvenir distribution',
          'Group photography session with all participants',
          'Event highlights summary and key achievements',
          'Future event announcements and community follow-ups'
        ]
      },
      {
        id: 'session-8',
        time: '17:00 – 17:30',
        duration: '30 min',
        title: 'Coffee Break & Networking',
        description: 'Premium refreshment break with structured networking activities, partner exhibitions, technology demonstrations, and business connection opportunities.',
        icon: <Coffee size={20} />,
        type: 'break',
        location: 'Exhibition Hall & Networking Lounge',
        details: [
          'Premium coffee, tea, and artisan beverage service',
          'Gourmet snacks, pastries, and healthy refreshment options',
          'Partner company booths and technology showcases',
          'Structured networking activities and icebreaker sessions',
          'Business card exchange and professional connection building'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Cominng Soon',
    subtitle: 'Comming soon',
    date: '2025-08-23',
    time: '00:00 – 00:00',
    isActive: false,
    color: '#8b5cf6',
    sessions: [
      {
        id: 'workshop-1',
        time: '18:00 – 18:30',
        duration: '30 min',
        title: 'Workshop Registration',
        description: 'Check-in for evening workshop participants and technical setup.',
        icon: <Users size={20} />,
        type: 'welcome',
        location: 'Workshop Hall',
        details: ['Workshop check-in and registration', 'Technical setup assistance', 'Workshop materials distribution']
      },
      {
        id: 'workshop-2',
        time: '18:30 – 20:30',
        duration: '120 min',
        title: 'Hands-on Web3 Development',
        description: 'Interactive coding session for building decentralized applications.',
        icon: <Mic size={20} />,
        type: 'workshop',
        location: 'Tech Lab',
        speaker: 'Technical Team',
        details: ['Hands-on DApp development', 'Smart contract deployment', 'Testing and debugging']
      }
    ]
  },
  {
    id: 3,
    title: 'Comming soon',
    subtitle: 'Comming soon',
    date: '2025-08-30',
    time: '00:00 – 00:00',
    isActive: false,
    color: '#10b981',
    sessions: [
      {
        id: 'dinner-1',
        time: '19:00 – 19:30',
        duration: '30 min',
        title: 'Welcome Reception',
        description: 'Cocktail hour with premium drinks and gourmet appetizers.',
        icon: <Users size={20} />,
        type: 'welcome',
        location: 'Grand Ballroom',
        details: ['Welcome cocktail reception', 'Premium beverage service', 'Gourmet appetizers']
      },
      {
        id: 'dinner-2',
        time: '19:30 – 22:00',
        duration: '150 min',
        title: 'Networking Dinner',
        description: 'Multi-course dining experience with continued networking opportunities.',
        icon: <Coffee size={20} />,
        type: 'dinner',
        location: 'Grand Ballroom',
        details: ['Multi-course dinner service', 'Wine pairing experience', 'Live entertainment']
      }
    ]
  }
]

const AgendaPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(1)
  const [expandedSessions, setExpandedSessions] = useState<Set<string>>(new Set())

  const currentEvent = eventsData.find(event => event.id === selectedEvent)

  const toggleSessionDetail = (sessionId: string) => {
    setExpandedSessions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(sessionId)) {
        newSet.delete(sessionId)
      } else {
        newSet.add(sessionId)
      }
      return newSet
    })
  }

  const expandAllSessions = () => {
    if (currentEvent) {
      const allSessionIds = currentEvent.sessions.map(session => session.id)
      setExpandedSessions(new Set(allSessionIds))
    }
  }

  const collapseAllSessions = () => {
    setExpandedSessions(new Set())
  }

  const getTypeClass = (type: string) => {
    const typeMap: { [key: string]: string } = {
      welcome: styles.typeWelcome,
      ceremony: styles.typeCeremony,
      keynote: styles.typeKeynote,
      panel: styles.typePanel,
      break: styles.typeBreak,
      launch: styles.typeLaunch,
      workshop: styles.typeWorkshop,
      partnership: styles.typePartnership,
      closing: styles.typeClosing,
      dinner: styles.typeDinner,
    }
    return typeMap[type] || ''
  }

  return (
    <div className={styles.agendaPage}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.headerContent}
          >
            <h1 className={styles.mainTitle}>The Agenda</h1>
            <p className={styles.subtitle}>Conference Schedule</p>
          </motion.div>
        </div>
      </section>

      {/* Event Selection */}
      <section className={styles.eventSelection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className={styles.eventButtonsContainer}>
              <div className={styles.eventButtons}>
                {eventsData.map((event) => (
                  <motion.button
                    key={event.id}
                    onClick={() => event.isActive && setSelectedEvent(event.id)}
                    className={`${styles.eventButton} ${
                      selectedEvent === event.id ? styles.active : ''
                    } ${!event.isActive ? styles.inactive : ''}`}
                    whileHover={event.isActive ? { scale: 1.02 } : {}}
                    whileTap={event.isActive ? { scale: 0.98 } : {}}
                    transition={{ duration: 0.2 }}
                    style={{
                      '--event-color': event.color,
                    } as React.CSSProperties}
                  >
                    <div className={styles.eventButtonContent}>
                      <div className={styles.eventDate}>{event.title}</div>
                      <div className={styles.eventSubtitle}>{event.subtitle}</div>
                      <div className={styles.eventTime}>{event.time}</div>
                      {!event.isActive && (
                        <div className={styles.comingSoon}>Coming Soon</div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className={styles.eventDetails}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {currentEvent && (
              <motion.div
                key={selectedEvent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={styles.scheduleContainer}
              >
                {/* Event Header & Controls */}
                <div className={styles.eventHeader}>
                  <div className={styles.eventInfo}>
                    <div className={styles.eventMeta}>
                      <div className={styles.metaItem}>
                        <Calendar size={16} />
                        <span>{currentEvent.title}, 2025</span>
                      </div>
                      <div className={styles.metaItem}>
                        <Clock size={16} />
                        <span>{currentEvent.time}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <MapPin size={16} />
                        <span>Ho Chi Minh City, Vietnam</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.controlButtons}>
                    <button 
                      onClick={expandAllSessions}
                      className={styles.controlButton}
                    >
                      <ChevronDown size={16} />
                      Expand All
                    </button>
                    <button 
                      onClick={collapseAllSessions}
                      className={styles.controlButton}
                    >
                      <ChevronUp size={16} />
                      Collapse All
                    </button>
                  </div>
                </div>

                {/* Sessions Table */}
                <div className={styles.sessionsTable}>
                  <div className={styles.tableHeader}>
                    <div className={styles.columnTime}>Time</div>
                    <div className={styles.columnSession}>Session</div>
                    <div className={styles.columnDetails}>Details</div>
                  </div>

                  <div className={styles.tableBody}>
                    {currentEvent.sessions.map((session, index) => (
                      <motion.div
                        key={session.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className={`${styles.sessionRow} ${getTypeClass(session.type)} ${
                          session.featured ? styles.featured : ''
                        }`}
                      >
                        {/* Time Column */}
                        <div className={styles.timeColumn}>
                          <div className={styles.sessionIcon}>
                            {session.icon}
                          </div>
                          <div className={styles.timeInfo}>
                            <div className={styles.timeSlot}>{session.time}</div>
                            <div className={styles.duration}>{session.duration}</div>
                          </div>
                        </div>

                        {/* Session Column */}
                        <div className={styles.sessionColumn}>
                          <div className={styles.sessionHeader}>
                            <h3 className={styles.sessionTitle}>
                              {session.title}
                              {session.featured && (
                                <span className={styles.featuredBadge}>
                                  <Star size={12} />
                                  Featured
                                </span>
                              )}
                            </h3>
                            <p className={styles.sessionDescription}>
                              {session.description}
                            </p>
                          </div>

                          <div className={styles.sessionMeta}>
                            <div className={styles.locationInfo}>
                              <MapPin size={14} />
                              <span>{session.location}</span>
                            </div>
                            {session.speaker && (
                              <div className={styles.speakerInfo}>
                                <User size={14} />
                                <span>{session.speaker}</span>
                                {session.speakerTitle && (
                                  <span className={styles.speakerTitle}>
                                    - {session.speakerTitle}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Details Column */}
                        <div className={styles.detailsColumn}>
                          <button
                            onClick={() => toggleSessionDetail(session.id)}
                            className={styles.expandButton}
                            aria-label={
                              expandedSessions.has(session.id) 
                                ? 'Collapse session details' 
                                : 'Expand session details'
                            }
                          >
                            <Info size={16} />
                            {expandedSessions.has(session.id) ? (
                              <ChevronUp size={16} />
                            ) : (
                              <ChevronDown size={16} />
                            )}
                          </button>
                        </div>

                        {/* Expanded Details */}
                        <AnimatePresence>
                          {expandedSessions.has(session.id) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className={styles.expandedDetails}
                            >
                              <div className={styles.expandedContent}>
                                <h4 className={styles.detailsTitle}>Session Highlights</h4>
                                <ul className={styles.detailsList}>
                                  {session.details.map((detail, i) => (
                                    <li key={i} className={styles.detailItem}>
                                      <span className={styles.bullet}>•</span>
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.ctaContent}
          >
            <h3>Ready to Join Us?</h3>
            <p>Secure your spot at TingNect - Build for Billions</p>
            <a 
              href="https://lu.ma/qji7t8kq" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.registerButton}
            >
              Register Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AgendaPage
