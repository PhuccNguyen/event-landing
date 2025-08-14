'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Target, Users } from 'lucide-react'
import styles from './SponsorsSection.module.css'

interface Partner {
  name: string
  logo: string
  category: 'strategy' | 'event'
  website?: string
  description?: string
}

const partners: Partner[] = [
  // Strategy Partners
  {
    name: 'Blockchain Work',
    logo: '/Partner/BlockchainWork.png',
    category: 'strategy',
    description: 'Blockchain Development & Enterprise Solutions'
  },
  {
    name: 'Web3 X',
    logo: '/Partner/Web3x_logo.png',
    category: 'strategy',
    website: 'https://www.w3x.network/',
    description: 'Web3 Infrastructure & Network Solutions'
  },
  {
    name: 'Collabrx',
    logo: '/Partner/Collabrx.svg',
    category: 'strategy',
    description: 'Strategic Collaboration Platform'
  },
  
  // Event Partners
  {
    name: 'Coinstore',
    logo: '/Partner/coinstore_logo.jfif',
    category: 'event',
    description: 'Global Cryptocurrency Exchange'
  },
  {
    name: 'Blocktians',
    logo: '/Partner/blocktians.png',
    category: 'event',
    description: 'Blockchain Education & Community'
  },
  {
    name: 'LC Agency',
    logo: '/Partner/LC Agency.jpg',
    category: 'event',
    description: 'Digital Marketing & Brand Strategy'
  },
  {
    name: 'Saha Holding',
    logo: '/Partner/saha_hoding.png',
    category: 'event',
    description: 'Investment & Strategic Partnership'
  },
  {
    name: 'Fintech 24h',
    logo: '/Partner/fintech24h.png',
    category: 'event',
    description: 'Fintech Media & News Platform'
  },
  {
    name: 'Coin Terminal',
    logo: '/Partner/cointerminal.png',
    category: 'event',
    description: 'Crypto Trading & Analytics Platform'
  }
]

const categoryConfig = {
  strategy: {
    label: 'Strategy Partners',
    icon: <Target size={18} />,
    gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    bgColor: 'rgba(59, 130, 246, 0.1)',
    borderColor: 'rgba(59, 130, 246, 0.2)'
  },
  event: {
    label: 'Event Partners',
    icon: <Users size={18} />,
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    bgColor: 'rgba(139, 92, 246, 0.1)',
    borderColor: 'rgba(139, 92, 246, 0.2)'
  }
}

const SponsorsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const getPartnersByCategory = (category: keyof typeof categoryConfig) => {
    return partners.filter(partner => partner.category === category)
  }

  return (
    <section ref={ref} id="sponsors" className={styles.sponsorsSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={styles.sectionHeader}
        >
          <div className={styles.sectionBadge}>
            <span>Our Partners</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Strategic Collaborators
          </h2>
          <p className={styles.sectionDescription}>
            Trusted partners empowering Web3 innovation and building sustainable blockchain ecosystems
          </p>
        </motion.div>

        {/* Partners Content */}
        <div className={styles.partnersContent}>
          {(Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map((category, categoryIndex) => {
            const categoryPartners = getPartnersByCategory(category)
            if (categoryPartners.length === 0) return null

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
                className={styles.categorySection}
              >
                {/* Category Header */}
                <div className={styles.categoryHeader}>
                  <div 
                    className={styles.categoryBadge}
                    style={{ 
                      background: categoryConfig[category].bgColor,
                      borderColor: categoryConfig[category].borderColor
                    }}
                  >
                    {categoryConfig[category].icon}
                    <span>{categoryConfig[category].label}</span>
                  </div>
                  <div 
                    className={styles.categoryLine}
                    style={{ background: categoryConfig[category].gradient }}
                  ></div>
                </div>

                {/* Partners Grid */}
                <div className={styles.partnersGrid}>
                  {categoryPartners.map((partner, index) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + index * 0.05, 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 120
                      }}
                      className={styles.partnerCard}
                    >
                      {partner.website ? (
                        <a 
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.partnerLink}
                        >
                          <div className={styles.partnerContent}>
                            <div className={styles.partnerLogoContainer}>
                              <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                fill
                                className={styles.partnerLogo}
                                sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 160px"
                              />
                            </div>
                            <div className={styles.partnerInfo}>
                              <h4 className={styles.partnerName}>{partner.name}</h4>
                              <p className={styles.partnerDescription}>{partner.description}</p>
                            </div>
                            <div className={styles.partnerLinkIcon}>
                              <ExternalLink size={14} />
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className={styles.partnerContent}>
                          <div className={styles.partnerLogoContainer}>
                            <Image
                              src={partner.logo}
                              alt={`${partner.name} logo`}
                              fill
                              className={styles.partnerLogo}
                              sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 160px"
                            />
                          </div>
                          <div className={styles.partnerInfo}>
                            <h4 className={styles.partnerName}>{partner.name}</h4>
                            <p className={styles.partnerDescription}>{partner.description}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className={styles.ctaSection}
        >
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Become a Partner</h3>
            <p className={styles.ctaDescription}>
              Join us in shaping the future of Web3 and blockchain innovation
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/sponsors" className={styles.primaryCta}>
                <span>Partnership Info</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className={styles.secondaryCta}>
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SponsorsSection
