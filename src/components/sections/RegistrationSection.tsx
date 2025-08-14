'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Users, Globe } from 'lucide-react'
import styles from './RegistrationSection.module.css'

const RegistrationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className={styles.registrationSection}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={styles.sectionTitle}>
            Register for TingNect
          </h2>
          <p className={styles.sectionDescription}>
            Secure your spot at the premier Web3 event in Ho Chi Minh City.
            Limited seats available!
          </p>
        </motion.div>

        <div className={styles.contentGrid}>
          {/* Event Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={styles.highlightsSection}
          >
            <h3 className={styles.highlightsTitle}>Event Highlights</h3>
            <div className={styles.highlightsList}>
              <div className={styles.highlightItem}>
                <Calendar className={styles.highlightIcon} />
                <div>
                  <h4>August 16, 2025</h4>
                  <p>14:00 - 17:00</p>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <Users className={styles.highlightIcon} />
                <div>
                  <h4>Industry Leaders</h4>
                  <p>Connect with top developers, entrepreneurs & investors</p>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <Globe className={styles.highlightIcon} />
                <div>
                  <h4>Global Opportunities</h4>
                  <p>Access markets of billions of users</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lu.ma Registration Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={styles.registrationWidget}
          >
            <div className={styles.widgetContainer}>
              <iframe
                src="https://lu.ma/embed/event/evt-n9M6awOcAq70pVk/simple"
                width="100%"
                height="450"
                frameBorder="0"
                className={styles.lumaEmbed}
                allow="fullscreen; payment"
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </motion.div>
        </div>

        {/* Additional Registration Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={styles.additionalInfo}
        >
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h4>Free Admission</h4>
              <p>This event is completely free for all attendees</p>
            </div>
            <div className={styles.infoCard}>
              <h4>Limited Seats</h4>
              <p>Attendance is limited to registered participants only</p>
            </div>
            <div className={styles.infoCard}>
              <h4>Professional Certificates</h4>
              <p>Receive participation certificates and appreciation gifts</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default RegistrationSection
