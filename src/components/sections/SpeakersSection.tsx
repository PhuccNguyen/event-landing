'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Calendar, Clock, ChevronDown, ChevronUp, Linkedin, Globe } from 'lucide-react'
import styles from './SpeakersSection.module.css'

const speakers = [
  {
    id: 4,
    name: 'Lucid Hoang',
    title: 'Founder UFIN',
    company: 'UFIN GROUP',
    topic: 'Build for Billions: User Scaling Strategy and Revenue Optimization in Decentralized World',
    image: '/Speaker/Lucid Hoang.png',
    bio: 'Lucid Hoang is the visionary founder of Ufin Group, leading innovative solutions in the decentralized technology space. With over 10 years of experience in fintech and blockchain technology, he has been instrumental in driving Web3 adoption across Southeast Asia.',
    expertise: ['Blockchain Tech', 'Fintech Innovation', 'Web3 Strategy'],
    social: {
      linkedin: 'https://www.linkedin.com/in/lucidhoang',
      website: 'https://ufin.com'
    },
    sessionTime: '15:00 - 15:40',
    sessionDate: 'Aug 16, 2025',
    status: 'Keynote'
  },
  {
    id: 1,
    name: 'Ms Tien Le ',
    title: 'CEO & Co-Founder',
    company: 'Blockchain Work',
    topic: 'The Future of Blockchain in Enterprise Solutions',
    image: '/Speaker/Ms Tien.png',
    bio: 'Ms Tien Le is a visionary leader in blockchain technology, driving enterprise adoption and innovation. As CEO of Blockchain Work, she has been instrumental in developing cutting-edge solutions that bridge traditional business with Web3 technologies.',
    expertise: ['Human Resources', 'Enterprise Solutions', 'Web3 Strategy'],
    social: {
      linkedin: 'https://www.linkedin.com/company/blockchainworkvietnam/',
      website: 'https://blockchainwork.net/'
    },
    sessionTime: '15:00 - 15:40',
    sessionDate: 'Aug 16, 2025',
    status: 'VIP'
  },
  {
    id: 2,
    name: 'Erik Duong',
    title: 'Founder',
    company: 'W3X Network',
    topic: 'Building the Next Generation Web3 Infrastructure',
    image: '/Speaker/Erik.png',
    bio: 'Erik Duong is the founder of W3X Network, a pioneering platform in Web3 infrastructure. With extensive experience in blockchain development and ecosystem building, he leads innovation in decentralized technologies.',
    expertise: ['Web3 Infrastructure', 'Blockchain Dev', 'DeFi Solutions'],
    social: {
      website: 'https://www.w3x.network/',
    },
    sessionTime: '15:00 - 15:40',
    sessionDate: 'Aug 16, 2025',
    status: 'Co-host'
  },
  {
    id: 3,
    name: 'Niklaus Tran',
    title: 'Co-founder',
    company: 'VDBG',
    topic: 'Strategic Partnerships in the Global Blockchain Ecosystem',
    image: '/Speaker/Niklaus.jpg',
    bio: 'Niklaus Tran brings extensive experience from his roles as Partnerships Manager at Alibaba and Business Development Manager at AdsYield. As Co-founder of VDBG, he specializes in building strategic partnerships in the blockchain space.',
    expertise: ['Strategic Partnerships', 'Business Dev', 'Global Markets'],
    social: {
      linkedin: 'https://www.linkedin.com/in/niklaus-tran/',
    },
    sessionTime: '15:00 - 15:40',
    sessionDate: 'Aug 16, 2025',
    status: 'Speaker'
  }
]

const SpeakersSection = () => {
    const router = useRouter()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedSpeaker, setSelectedSpeaker] = useState<number | null>(null)

  const toggleSpeakerDetails = (speakerId: number) => {
    setSelectedSpeaker(selectedSpeaker === speakerId ? null : speakerId)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'VIP':
        return 'vip'
      case 'Co-host':
        return 'cohost'
      case 'Keynote':
        return 'keynote'
      default:
        return 'speaker'
    }
  }

  return (
    <section ref={ref} id="speakers" className={styles.speakersSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={styles.sectionHeader}
        >
          <div className={styles.sectionBadge}>
            <span>Elite Speakers 2025</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Expert Speakers
          </h2>
          <p className={styles.sectionDescription}>
            Industry leaders shaping Web3 & blockchain future
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className={styles.speakersGrid}>
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${styles.speakerCard} ${selectedSpeaker === speaker.id ? styles.expanded : ''}`}
            >
              {/* Speaker Info Header */}
              <div className={styles.speakerHeader}>
                {/* Speaker Image - Taller portrait format */}
                <div className={styles.speakerImageContainer}>
                  <div className={styles.speakerImageWrapper}>
                    <Image
                      src={speaker.image}
                      alt={`${speaker.name} - ${speaker.title} at ${speaker.company}`}
                      fill
                      className={styles.speakerImage}
                      priority={index < 2}
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 90px, 100px"
                    />
                  </div>
                  <div className={`${styles.statusBadge} ${styles[getStatusColor(speaker.status)]}`}>
                    <span>{speaker.status}</span>
                  </div>
                </div>

                {/* Speaker Basic Info */}
                <div className={styles.speakerBasicInfo}>
                  <h3 className={styles.speakerName}>{speaker.name}</h3>
                  <div className={styles.speakerPosition}>
                    <span className={styles.title}>{speaker.title}</span>
                    <span className={styles.company}>at {speaker.company}</span>
                  </div>

                  {/* Session Time - Mobile Visible */}
                  <div className={styles.sessionInfo}>
                    <div className={styles.sessionTime}>
                      <Clock size={12} />
                      <span>{speaker.sessionTime}</span>
                    </div>
                    <div className={styles.sessionDate}>
                      <Calendar size={12} />
                      <span>{speaker.sessionDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className={styles.quickInfo}>
                {/* Expertise Tags - Limited to 2 on mobile */}
                <div className={styles.expertiseContainer}>
                  {speaker.expertise.slice(0, 2).map((skill, i) => (
                    <span key={i} className={styles.expertiseTag}>
                      {skill}
                    </span>
                  ))}
                  {speaker.expertise.length > 2 && (
                    <span className={styles.moreTag}>
                      +{speaker.expertise.length - 2}
                    </span>
                  )}
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleSpeakerDetails(speaker.id)}
                  className={styles.toggleButton}
                  aria-expanded={selectedSpeaker === speaker.id}
                  aria-label={`${selectedSpeaker === speaker.id ? 'Collapse' : 'Expand'} details for ${speaker.name}`}
                >
                  <span>
                    {selectedSpeaker === speaker.id ? 'Show Less' : 'View Details'}
                  </span>
                  {selectedSpeaker === speaker.id ?
                    <ChevronUp size={16} /> :
                    <ChevronDown size={16} />
                  }
                </button>
              </div>

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
                  <div className={styles.infoBlock}>
                    <h4 className={styles.blockTitle}>Speaking Topic</h4>
                    <p className={styles.blockContent}>{speaker.topic}</p>
                  </div>

                  {/* Speaker Bio */}
                  <div className={styles.infoBlock}>
                    <h4 className={styles.blockTitle}>Biography</h4>
                    <p className={styles.blockContent}>{speaker.bio}</p>
                  </div>

                  {/* All Expertise */}
                  <div className={styles.infoBlock}>
                    <h4 className={styles.blockTitle}>Expertise Areas</h4>
                    <div className={styles.allExpertiseGrid}>
                      {speaker.expertise.map((skill, i) => (
                        <span key={i} className={styles.expertiseItem}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className={styles.infoBlock}>
                    <h4 className={styles.blockTitle}>Connect</h4>
                    <div className={styles.socialLinks}>
                      {speaker.social.linkedin && (
                        <a
                          href={speaker.social.linkedin}
                          className={styles.socialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${speaker.name}'s LinkedIn profile`}
                        >
                          <Linkedin size={14} />
                          LinkedIn
                        </a>
                      )}
                      {speaker.social.website && (
                        <a
                          href={speaker.social.website}
                          className={styles.socialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${speaker.name}'s website`}
                        >
                          <Globe size={14} />
                          Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={styles.ctaSection}
        >
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Become a Speaker?</h3>
            <p className={styles.ctaDescription}>
              Share your expertise with the Web3 community, inspire others, and
              become part of our global network of innovators.
            </p>
            <button
              className={styles.ctaButton}
              aria-label="Apply to become a speaker"
              onClick={() => router.push('/speakers')}
            >
              Apply Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SpeakersSection
