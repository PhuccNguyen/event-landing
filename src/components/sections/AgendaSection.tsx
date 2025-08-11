'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Clock, 
  MapPin, 
  Calendar, 
  Users, 
  Coffee, 
  Mic, 
  Handshake, 
  Gift,
  UtensilsCrossed,
  ChevronRight,
  Play
} from 'lucide-react'
import styles from './AgendaSection.module.css'

const agendaItems = [
  { 
    time: '14:00 – 14:20', 
    title: 'Welcome Guest & Check-in', 
    description: 'Registration, welcome reception, and networking with early arrivals',
    icon: <Users size={24} />,
    type: 'registration',
    details: ['Registration desk opens', 'Welcome drinks & light refreshments', 'Name tags and event materials distribution', 'Photo opportunities'],
    duration: '20 min'
  },
  { 
    time: '14:20 – 14:40', 
    title: 'Opening Ceremony', 
    description: 'Official event opening with keynote introductions and event overview',
    icon: <Play size={24} />,
    type: 'ceremony',
    details: ['Welcome address by Ting Foundation', 'Event overview presentation', 'Speaker introductions', 'Housekeeping announcements'],
    duration: '20 min'
  },
  { 
    time: '14:40 – 15:00', 
    title: 'Keynote Session', 
    description: 'Featured presentation: "Build for Billions" by Lucid Hoang',
    icon: <Mic size={24} />,
    type: 'keynote',
    speaker: 'Lucid Hoang - Founder, Ufin Group',
    details: ['Strategic insights on Web3 scaling', 'Revenue optimization in decentralized ecosystems', 'Case studies and real-world examples', 'Q&A session'],
    duration: '20 min'
  },
  { 
    time: '15:00 – 15:40', 
    title: 'Panel Discussion', 
    description: 'Interactive discussion with industry experts on Web3 innovation',
    icon: <Users size={24} />,
    type: 'panel',
    details: ['Moderated panel with industry leaders', 'Audience Q&A session', 'Interactive polling', 'Future trends discussion'],
    duration: '40 min'
  },
  { 
    time: '15:40 – 16:15', 
    title: 'Coffee Break & Networking', 
    description: 'Refreshments, networking opportunities, and partner exhibitions',
    icon: <Coffee size={24} />,
    type: 'break',
    details: ['Premium coffee and tea service', 'Light snacks and pastries', 'Partner booths and exhibitions', 'Structured networking activities'],
    duration: '35 min'
  },
  { 
    time: '16:15 – 16:45', 
    title: 'MOU Signing Ceremony', 
    description: 'Official partnership agreements and strategic collaboration announcements',
    icon: <Handshake size={24} />,
    type: 'ceremony',
    details: ['Partnership agreement signings', 'Collaboration announcements', 'Press photo opportunities', 'Strategic alliance presentations'],
    duration: '30 min'
  },
  { 
    time: '16:45 – 17:00', 
    title: 'Appreciation Gifts & Closing', 
    description: 'Thank you messages, gift distribution, and event wrap-up',
    icon: <Gift size={24} />,
    type: 'closing',
    details: ['Appreciation speech', 'Gift and souvenir distribution', 'Group photo session', 'Event summary and next steps'],
    duration: '15 min'
  },
  { 
    time: '17:00+', 
    title: 'Networking Dinner', 
    description: 'Exclusive dining experience for continued networking and relationship building',
    icon: <UtensilsCrossed size={24} />,
    type: 'dinner',
    details: ['Multi-course dinner experience', 'Wine and beverage pairings', 'Continued networking opportunities', 'Live entertainment'],
    duration: '2+ hours'
  },
]

const AgendaSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const toggleExpanded = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index)
  }

  const getTypeClass = (type: string) => {
    const typeClasses = {
      registration: styles.typeRegistration,
      ceremony: styles.typeCeremony,
      keynote: styles.typeKeynote,
      panel: styles.typePanel,
      break: styles.typeBreak,
      closing: styles.typeClosing,
      dinner: styles.typeDinner,
    }
    return typeClasses[type as keyof typeof typeClasses] || ''
  }

  return (
    <section ref={ref} id="agenda" className={styles.agendaSection}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.sectionHeader}
        >
          <div className={styles.sectionBadge}>
            <Calendar size={16} />
            <span>Event Schedule</span>
          </div>
          
          <h2 className={styles.sectionTitle}>
            TingNect – Build for Billions
          </h2>
          <p className={styles.sectionSubtitle}>Complete Event Agenda</p>

          {/* Event Meta Info */}
          <div className={styles.eventMeta}>
            <div className={styles.eventCard}>
              <div className={styles.eventInfo}>
                <div className={styles.eventDetail}>
                  <MapPin className="w-5 h-5" />
                  <div>
                    <span className={styles.eventLabel}>Location</span>
                    <span className={styles.eventValue}>Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>
                <div className={styles.eventDetail}>
                  <Calendar className="w-5 h-5" />
                  <div>
                    <span className={styles.eventLabel}>Date</span>
                    <span className={styles.eventValue}>August 16, 2025</span>
                  </div>
                </div>
                <div className={styles.eventDetail}>
                  <Clock className="w-5 h-5" />
                  <div>
                    <span className={styles.eventLabel}>Time</span>
                    <span className={styles.eventValue}>14:00 – 17:00</span>
                  </div>
                </div>
              </div>
              <div className={styles.hostInfo}>
                <span>Proudly hosted by</span>
                <strong>Ting Foundation</strong>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className={styles.timelineWrapper}>
          <div className={styles.timelineContainer}>
            {agendaItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`${styles.timelineItem} ${getTypeClass(item.type)}`}
              >
                {/* Timeline Connector */}
                <div className={styles.timelineConnector}>
                  <div className={styles.timelineDot}>
                    {item.icon}
                  </div>
                  {index < agendaItems.length - 1 && (
                    <div className={styles.timelineLine}></div>
                  )}
                </div>

                {/* Content Card */}
                <div 
                  className={`${styles.contentCard} ${expandedItem === index ? styles.expanded : ''}`}
                  onClick={() => toggleExpanded(index)}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.timeInfo}>
                      <span className={styles.timeSlot}>{item.time}</span>
                      <span className={styles.duration}>{item.duration}</span>
                    </div>
                    <button className={styles.expandButton}>
                      <ChevronRight 
                        size={16} 
                        className={expandedItem === index ? styles.rotated : ''}
                      />
                    </button>
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                    
                    {item.speaker && (
                      <div className={styles.speakerInfo}>
                        <Mic size={14} />
                        <span>{item.speaker}</span>
                      </div>
                    )}
                  </div>

                  {/* Expanded Details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedItem === index ? 'auto' : 0,
                      opacity: expandedItem === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={styles.expandedContent}
                  >
                    <div className={styles.expandedInner}>
                      <h4 className={styles.detailsTitle}>Session Highlights</h4>
                      <ul className={styles.detailsList}>
                        {item.details.map((detail, i) => (
                          <li key={i} className={styles.detailItem}>
                            <ChevronRight size={12} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Event Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className={styles.eventSummary}
        >
          <div className={styles.summaryCard}>
            <h3 className={styles.summaryTitle}>Event Highlights</h3>
            <div className={styles.highlightGrid}>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>
                  <Mic size={20} />
                </div>
                <div>
                  <span className={styles.highlightNumber}>1</span>
                  <span className={styles.highlightLabel}>Keynote Speaker</span>
                </div>
              </div>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>
                  <Users size={20} />
                </div>
                <div>
                  <span className={styles.highlightNumber}>3</span>
                  <span className={styles.highlightLabel}>Hours of Content</span>
                </div>
              </div>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>
                  <Coffee size={20} />
                </div>
                <div>
                  <span className={styles.highlightNumber}>2</span>
                  <span className={styles.highlightLabel}>Networking Breaks</span>
                </div>
              </div>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>
                  <UtensilsCrossed size={20} />
                </div>
                <div>
                  <span className={styles.highlightNumber}>1</span>
                  <span className={styles.highlightLabel}>Exclusive Dinner</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AgendaSection
