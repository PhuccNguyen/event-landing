'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './SponsorsSection.module.css'

const sponsors = [
  {
    name: 'Ufin',
    logo: '/images/sponsors/ufin-logo.png',
    tier: 'diamond',
    website: 'https://ufin.com'
  }
]

const SponsorsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="sponsors" className={styles.sponsorsSection}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={styles.sectionTitle}>
            Our Sponsors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re grateful to our sponsors who make TingNect possible
          </p>
        </motion.div>

        {/* Diamond Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={styles.sponsorTier}
        >
          <h3 className={styles.tierTitle}>Diamond Sponsor</h3>
          <div className={styles.diamondSponsors}>
            {sponsors.filter(sponsor => sponsor.tier === 'diamond').map((sponsor) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sponsorCard}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={200}
                  height={100}
                  className={styles.sponsorLogo}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA to become sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className={styles.ctaContainer}>
            <h3 className={styles.ctaTitle}>Interested in Sponsoring?</h3>
            <p className={styles.ctaDescription}>
              Join us as a sponsor and connect with the leading minds in Web3 technology
            </p>
            <Link
              href="/sponsors"
              className={styles.ctaButton}
            >
              Become a Sponsor
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SponsorsSection
