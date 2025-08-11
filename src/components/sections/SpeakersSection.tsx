'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { MapPin, Calendar, Clock, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import styles from './SpeakersSection.module.css'

const speakers = [
  {
    id: 1,
    name: 'Lucid Hoang',
    title: 'Founder & CEO',
    company: 'Ufin Group',
    topic: 'Build for Billions: Chiến lược mở rộng người dùng và khai thác doanh thu trong thế giới phi tập trung',
    image: '/images/speakers/lucid-hoang.png',
    bio: 'Lucid Hoang is the visionary founder of Ufin Group, leading innovative solutions in the decentralized technology space. With over 10 years of experience in fintech and blockchain technology, he has been instrumental in driving Web3 adoption across Southeast Asia.',
    expertise: ['Blockchain Technology', 'Fintech Innovation', 'Web3 Strategy', 'Decentralized Finance'],
    social: {
      linkedin: '#',
      twitter: '#',
      website: 'https://ufin.com'
    },
    sessionTime: '15:00 - 15:30',
    sessionDate: '16/8/2025'
  }
  // Add more speakers here
]

const SpeakersSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedSpeaker, setSelectedSpeaker] = useState<number | null>(null)

  const toggleSpeakerDetails = (speakerId: number) => {
    setSelectedSpeaker(selectedSpeaker === speakerId ? null : speakerId)
  }

  return (
    <section ref={ref} id="speakers" className={styles.speakersSection}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.sectionHeader}
        >
          <div className={styles.sectionBadge}>
            <span>Featured Speakers</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Meet Our Expert Speakers
          </h2>
          <p className={styles.sectionDescription}>
            Learn from industry leaders and visionaries who are shaping the future of Web3 technology
          </p>
        </motion.div>

        {/* speakers Grid */}
        <div className={styles.speakersGrid}>
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`${styles.speakerCard} ${selectedSpeaker === speaker.id ? styles.expanded : ''}`}
            >
              {/* Speaker Image */}
              <div className={styles.speakerImageContainer}>
                <div className={styles.speakerImageWrapper}>
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className={styles.speakerImage}
                    priority={index < 2}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.sessionInfo}>
                      <div className={styles.sessionTime}>
                        <Clock size={14} />
                        <span>{speaker.sessionTime}</span>
                      </div>
                      <div className={styles.sessionDate}>
                        <Calendar size={14} />
                        <span>{speaker.sessionDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.statusBadge}>
                  <span>Confirmed</span>
                </div>
              </div>

              {/* Speaker Info */}
              <div className={styles.speakerContent}>
                <div className={styles.speakerHeader}>
                  <h3 className={styles.speakerName}>{speaker.name}</h3>
                  <div className={styles.speakerPosition}>
                    <span className={styles.title}>{speaker.title}</span>
                    <span className={styles.company}>at {speaker.company}</span>
                  </div>
                </div>

                {/* Expertise Tags */}
                <div className={styles.expertiseContainer}>
                  {speaker.expertise.slice(0, 2).map((skill, i) => (
                    <span key={i} className={styles.expertiseTag}>
                      {skill}
                    </span>
                  ))}
                  {speaker.expertise.length > 2 && (
                    <span className={styles.moreTag}>
                      +{speaker.expertise.length - 2} more
                    </span>
                  )}
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleSpeakerDetails(speaker.id)}
                  className={styles.toggleButton}
                  aria-expanded={selectedSpeaker === speaker.id}
                >
                  <span>
                    {selectedSpeaker === speaker.id ? 'Show Less' : 'Learn More'}
                  </span>
                  {selectedSpeaker === speaker.id ? 
                    <ChevronUp size={18} /> : 
                    <ChevronDown size={18} />
                  }
                </button>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedSpeaker === speaker.id ? 'auto' : 0,
                    opacity: selectedSpeaker === speaker.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className={styles.expandedContent}
                >
                  <div className={styles.expandedInner}>
                    {/* Session Topic */}
                    <div className={styles.topicSection}>
                      <h4 className={styles.topicTitle}>Session Topic</h4>
                      <p className={styles.topicDescription}>{speaker.topic}</p>
                    </div>

                    {/* Speaker Bio */}
                    <div className={styles.bioSection}>
                      <h4 className={styles.bioTitle}>About the Speaker</h4>
                      <p className={styles.bioDescription}>{speaker.bio}</p>
                    </div>

                    {/* All Expertise */}
                    <div className={styles.allExpertise}>
                      <h4 className={styles.expertiseTitle}>Areas of Expertise</h4>
                      <div className={styles.expertiseGrid}>
                        {speaker.expertise.map((skill, i) => (
                          <span key={i} className={styles.expertiseItem}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className={styles.socialSection}>
                      <h4 className={styles.socialTitle}>Connect</h4>
                      <div className={styles.socialLinks}>
                        {speaker.social.linkedin && (
                          <a href={speaker.social.linkedin} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                          </a>
                        )}
                        {speaker.social.twitter && (
                          <a href={speaker.social.twitter} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            Twitter
                          </a>
                        )}
                        {speaker.social.website && (
                          <a href={speaker.social.website} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            Website <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={styles.ctaSection}
        >
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Want to be a Speaker?</h3>
            <p className={styles.ctaDescription}>
              Join our lineup of expert speakers and share your knowledge with the Web3 community
            </p>
            <button className={styles.ctaButton}>
              Apply to Speak
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SpeakersSection
