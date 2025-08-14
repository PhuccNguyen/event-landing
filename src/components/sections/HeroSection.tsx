'use client'

import { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react';

import React, { type ReactNode } from 'react';

import { Calendar, MapPin, Clock, Users, ExternalLink, Play, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HeroSection.module.css'

// Types
interface EventDetail {
  icon: ReactNode;
  label: string
  primary: string
  secondary: string
  accent: string
}

interface CountdownUnit {
  value: number
  label: string
}

// Dynamic import 3D scene with better loading
const BlockchainScene = dynamic(
  () => import('@/components/3D/BlockchainScene'),
  {
    ssr: false,
    loading: () => (
      <div className={styles.sceneLoader}>
        <div className={styles.loaderPulse} />
        <span className={styles.loaderText}>Loading Experience...</span>
      </div>
    )
  }
)

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const HeroSection = () => {
  const [mounted, setMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Event countdown calculation
  const eventDate = new Date('2025-08-16T14:00:00+07:00')
  const timeUntilEvent = eventDate.getTime() - currentTime.getTime()

  const countdown: CountdownUnit[] = [
    {
      value: Math.floor(timeUntilEvent / (1000 * 60 * 60 * 24)),
      label: 'Days'
    },
    {
      value: Math.floor((timeUntilEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      label: 'Hours'
    },
    {
      value: Math.floor((timeUntilEvent % (1000 * 60 * 60)) / (1000 * 60)),
      label: 'Minutes'
    }
  ]

  // Event details data
  const eventDetails: EventDetail[] = [
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Date",
      primary: "Saturday",
      secondary: "August 16, 2025",
      accent: "Save the Date"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Time",
      primary: "14:00 - 17:00",
      secondary: "GMT+7",
      accent: "3 Hours Event"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Venue",
      primary: "Camellia Room, 2nd Floor, Rex Hotel",
      secondary: "141 Nguyen Hue, District 1, Ho Chi Minh City",
      accent: "Premium Location"
    },
 


    {
      icon: <Users className="w-6 h-6" />,
      label: "Attendance",
      primary: "100+ Expected",
      secondary: "Industry Leaders",
      accent: "Exclusive Network"
    }
  ]

  const stats = [
    { number: "100+", label: "Expected Attendees" },
    { number: "50+", label: "Industry Leaders" },
    { number: "10+", label: "Strategic Partners" }
  ]

  const features = [
    { icon: "🎫", text: "Free Admission" },
    { icon: "⚡", text: "Limited Seats" },
    { icon: "🏆", text: "Premium Event" }
  ]

  return (
    <section id="hero" className={styles.heroSection}>
      {/* 3D Background */}
      <div className={styles.heroBackground}>
        <div className={styles.backgroundOverlay} />
        {mounted && (
          <Suspense fallback={<div className={styles.sceneFallback} />}>
            <BlockchainScene />
          </Suspense>
        )}
        <div className={styles.backgroundGradient} />
      </div>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className={`${styles.floatingBlock} ${styles[`block${i % 4}`]}`}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + ((i % 3) * 25)}%`,
            }}
          >
            <div className={styles.blockInner} />
          </motion.div>
        ))}
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.heroContent}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Countdown Banner */}
          {timeUntilEvent > 0 && (
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className={styles.countdownBanner}
            >
              <div className={styles.countdownContent}>
                <span className={styles.countdownLabel}>Event starts in</span>
                <div className={styles.countdownNumbers}>
                  {countdown.map((unit, index) => (
                    <div key={unit.label} className={styles.countdownUnit}>
                      <span className={styles.countdownValue}>{unit.value}</span>
                      <span className={styles.countdownText}>{unit.label}</span>
                      {index < countdown.length - 1 && (
                        <div className={styles.countdownSeparator}>:</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Main Branding */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 1, delay: 0.2 }}
            className={styles.brandingSection}
          >
            <div className={styles.logoStack}>
              <Image
                src="/TingNect/TingNect.svg"
                alt="TingNect"
                width={300}
                height={75}
                priority
                className={styles.primaryLogo}
              />

              <div className={styles.logoConnector}>
                <div className={styles.connectorLine} />
                <div className={styles.connectorNodes}>
                  <div className={styles.connectorNode} />
                  <div className={styles.connectorNode} />
                  <div className={styles.connectorNode} />
                </div>
              </div>

              <div className={styles.foundationBranding}>
                <span className={styles.hostedByLabel}>Powered by</span>
                <Image
                  src="/TingFoundation/TingFoundation-white.svg"
                  alt="Ting Foundation"
                  width={200}
                  height={50}
                  className={styles.foundationLogo}
                />
              </div>
            </div>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.8, duration: 0.8 }}
              className={styles.taglineSection}
            >
              <h1 className={styles.mainTagline}>
                <span className={styles.buildText}>Build for</span>
                <span className={styles.billionsText}>Billions</span>
              </h1>
              <div className={styles.taglineSubtext}>
                <span>Vietnam&apos;s Premier</span>
                <span className={styles.web3Text}>Web3 Gathering</span>
              </div>
              <div className={styles.taglineAccent} />
            </motion.div>
          </motion.div>

          {/* Event Information Grid */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 1, duration: 0.8 }}
            className={styles.eventInfoSection}
          >
            <motion.div
              className={styles.eventGrid}
              variants={stagger}
            >
              {eventDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  variants={fadeInUp}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  className={styles.eventCard}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className={styles.eventCardHeader}>
                    <div className={styles.eventIcon}>
                      {detail.icon}
                    </div>
                    <span className={styles.eventAccent}>{detail.accent}</span>
                  </div>
                  <div className={styles.eventCardBody}>
                    <h3 className={styles.eventPrimary}>{detail.primary}</h3>
                    <p className={styles.eventSecondary}>{detail.secondary}</p>
                  </div>
                  <div className={styles.eventCardGlow} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 1.8, duration: 0.8 }}
            className={styles.descriptionSection}
          >
            <p className={styles.description}>
              A powerful convergence of <span className={styles.highlight}>builders</span>,
              <span className={styles.highlight}> founders</span>, and
              <span className={styles.highlight}> investors</span> shaping the future of
              decentralized innovation in Vietnam.
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 2.2, duration: 0.8 }}
            className={styles.ctaSection}
          >
            <Link
              href="https://lu.ma/qji7t8kq"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              <div className={styles.ctaContent}>
                <span className={styles.ctaText}>Register Now</span>
                <ExternalLink size={20} />
              </div>
              <div className={styles.ctaShine} />
            </Link>

            <motion.button
              className={styles.secondaryCta}
              onClick={() => setShowVideo(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={18} />
              <span>Watch Teaser</span>
            </motion.button>

            <div className={styles.ctaInfo}>
              {features.map((feature, index) => (
                <div key={index} className={styles.ctaFeature}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 2.8, duration: 0.8 }}
            className={styles.statsSection}
          >
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <motion.div
                    className={styles.statNumber}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 3 + index * 0.2, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className={styles.statLabel}>{stat.label}</div>
                  {index < stats.length - 1 && <div className={styles.statSeparator} />}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        className={styles.scrollIndicator}
        onClick={() => {
          const nextSection = document.querySelector('#next-section')
          nextSection?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Explore Event</span>
        <ArrowDown size={16} />
      </motion.div>
      {/* Video Modal */}
      {showVideo && (
        <motion.div
          className={styles.videoModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowVideo(false)}
        >
          <div className={styles.videoContainer} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setShowVideo(false)}
            >
              ×
            </button>
            <video
              src="/Video/Capy_Moon_Animation_v05_Fix.mp4"
              controls
              autoPlay
              className={styles.videoPlayer}
            />
          </div>
        </motion.div>
      )}

    </section>
  )
}

export default HeroSection
