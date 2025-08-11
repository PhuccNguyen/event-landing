'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.gridLayer}
          animate={{
            x: [-40, 40, -40],
            y: [-40, 40, -40],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: 'easeInOut',
          }}
        ></motion.div>
        <motion.div
          className={styles.glowOrb1}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: 'easeInOut',
          }}
        ></motion.div>
        <motion.div
          className={styles.glowOrb2}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: 'easeInOut',
          }}
        ></motion.div>
        <motion.div
          className={styles.glowOrb3}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: 'easeInOut',
          }}
        ></motion.div>
        <div className={styles.glowOverlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Main Logo */}
          {/* Main Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
            className={styles.logoContainer}
          >
            <Image
              src="/TingNect/TingNect.svg"
              alt="TingNect"
              width={220}
              height={80}
              priority
              className={styles.mainLogo}
            />

            {/* Divider line */}
            <div className={styles.logoDivider}></div>

            <Image
              src="/TingFoundation/logo TingFoundation.svg"
              alt="Ting Foundation"
              width={220}
              height={80}
              priority
              className={styles.mainLogo}
            />
          </motion.div>



          {/* Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={styles.sloganContainer}
          >
            <h1 className={styles.slogan}>Build for Billions</h1>
            <div className={styles.sloganLine}></div>
          </motion.div>

          {/* Event Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={styles.eventInfo}
          >
            <div className={styles.infoCard}>
              <Calendar className={styles.infoIcon} />
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Thurday</span>
                <span className={styles.infoValue}>16/8/2025</span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <Clock className={styles.infoIcon} />
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Time</span>
                <span className={styles.infoValue}>14:00 - 17:00</span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <MapPin className={styles.infoIcon} />
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>141 NGUYEN HUE, QUAN 1, HO CHI MINH</span>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className={styles.description}
          >
            Vietnam's premier <span className={styles.highlight}>Web3 gathering</span> -
            connecting builders, founders, and investors shaping the decentralized future.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className={styles.ctaContainer}
          >
            <Link
              href="https://lu.ma/qji7t8kq"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <span>GET TICKETS</span>
              <ExternalLink size={18} />
            </Link>
            <p className={styles.freeText}>🎫 Free Admission • Limited Seats</p>
          </motion.div>

          {/* Hosted by */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className={styles.hostedBy}
          >
            <span className={styles.hostedByText}>Hosted by</span>
            <Image
              src="/TingFoundation/logo TingFoundation.svg"
              alt="Ting Foundation"
              width={160}
              height={40}
              className={styles.foundationLogo}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
