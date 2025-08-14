'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Clock, 
  MapPin, 
  Calendar, 
  Users, 
  Coffee, 
  Mic, 
  Handshake, 
  Gift,
  ChevronRight,
  Play,
  Rocket,
  ExternalLink
} from 'lucide-react'
import styles from './AgendaSection.module.css'

const agendaItems = [
  { 
    time: '14:00 – 14:20', 
    title: 'Welcome Guest & Check-in', 
    description: 'Registration and warm welcome for all attendees',
    icon: <Users size={20} />,
    type: 'welcome',
    duration: '20 min'
  },
  { 
    time: '14:20 – 14:40', 
    title: 'Opening Ceremony', 
    description: 'Official event opening with welcome addresses',
    icon: <Play size={20} />,
    type: 'ceremony',
    duration: '20 min'
  },
  { 
    time: '14:40 – 15:00', 
    title: 'Keynote Session', 
    description: 'Build for Billions: Strategic insights on Web3 scaling',
    icon: <Mic size={20} />,
    type: 'keynote',
    duration: '20 min',
    featured: true
  },
  { 
    time: '15:00 – 15:40', 
    title: 'Panel Discussion', 
    description: 'Interactive discussion with industry experts',
    icon: <Users size={20} />,
    type: 'panel',
    duration: '40 min'
  },
  { 
    time: '15:40 – 16:00', 
    title: 'Launching Ceremony', 
    description: 'Official product and partnership launches',
    icon: <Rocket size={20} />,
    type: 'launch',
    duration: '20 min',
    featured: true
  },
  { 
    time: '16:00 – 16:30', 
    title: 'MOU Signing Ceremony', 
    description: 'Strategic partnership agreement signings',
    icon: <Handshake size={20} />,
    type: 'ceremony',
    duration: '30 min'
  },
  { 
    time: '16:30 – 17:00', 
    title: 'Appreciation Gifts & Closing', 
    description: 'Thank you messages and event wrap-up',
    icon: <Gift size={20} />,
    type: 'closing',
    duration: '15 min'
  },
    { 
    time: '17:00 – 17:30', 
    title: 'Coffee Break & Networking', 
    description: 'Refreshments and networking opportunities',
    icon: <Coffee size={20} />,
    type: 'break',
    duration: '30 min'
  }
]

const AgendaSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const getTypeClass = (type: string) => {
    const typeClasses = {
      welcome: styles.typeWelcome,
      ceremony: styles.typeCeremony,
      keynote: styles.typeKeynote,
      panel: styles.typePanel,
      launch: styles.typeLaunch,
      break: styles.typeBreak,
      closing: styles.typeClosing,
    }
    return typeClasses[type as keyof typeof typeClasses] || ''
  }

  return (
    <section ref={ref} id="agenda" className={styles.agendaSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={styles.sectionHeader}
        >
          <div className={styles.sectionBadge}>
            <Calendar size={14} />
            <span>Event Schedule</span>
          </div>
          
          <h2 className={styles.sectionTitle}>
            TingNect – Build for Billions
          </h2>
          
          <p className={styles.sectionSubtitle}>
            Join us for an exclusive Web3 event
          </p>

          {/* Event Meta Info Card */}
          <div className={styles.eventMetaCard}>
            <div className={styles.eventMeta}>
              <div className={styles.metaItem}>
                <Calendar size={16} />
                <div>
                  <span className={styles.metaLabel}>Date</span>
                  <span className={styles.metaValue}>August 16, 2025</span>
                </div>
              </div>
              
              <div className={styles.metaItem}>
                <Clock size={16} />
                <div>
                  <span className={styles.metaLabel}>Time</span>
                  <span className={styles.metaValue}>14:00 – 17:00</span>
                </div>
              </div>
              
              <div className={styles.metaItem}>
                <MapPin size={16} />
                <div>
                  <span className={styles.metaLabel}>Venue</span>
                  <span className={styles.metaValue}>Camellia Room, Rex Hotel</span>
                  <span className={styles.metaAddress}>
                    141 Nguyen Hue, District 1, HCMC
                  </span>
                </div>
              </div>
            </div>
            
            {/* Host Info */}
            <div className={styles.hostSection}>
              <div className={styles.hostLabel}>Organized by</div>
              <div className={styles.hostInfo}>
                <div className={styles.hostLogo}>
                  <Image
                    src="/TingFoundation/TingFoundation-white.svg"
                    alt="Ting Foundation"
                    width={120}
                    height={40}
                    className={styles.logoImage}
                  />
                </div>
                <span className={styles.hostName}>Ting Foundation</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Compact Timeline */}
        <div className={styles.timelineSection}>
          <h3 className={styles.timelineTitle}>Event Timeline</h3>
          
          <div className={styles.timelineContainer}>
            {agendaItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`${styles.timelineItem} ${getTypeClass(item.type)} ${item.featured ? styles.featured : ''}`}
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

                {/* Content */}
                <div className={styles.itemContent}>
                  <div className={styles.itemHeader}>
                    <span className={styles.timeSlot}>{item.time}</span>
                    <span className={styles.duration}>{item.duration}</span>
                  </div>
                  
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemDescription}>{item.description}</p>
                  
                  {item.featured && (
                    <div className={styles.featuredBadge}>
                      <span>Featured</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={styles.ctaSection}
        >
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Want Full Details?</h3>
            <p className={styles.ctaDescription}>
              Explore the complete agenda with speaker details and session information
            </p>
            <Link href="/agenda" className={styles.ctaButton}>
              <span>See Full Agenda</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AgendaSection
