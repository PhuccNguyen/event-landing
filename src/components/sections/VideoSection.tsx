'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './AboutSection.module.css'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className={`${styles.section} bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={styles.videoShell}
        >
          <div className={styles.videoWrap}>
            <video
              className={styles.video}
              src="/Video/Capy_Moon_Animation_v05_Fix.mp4"
              controls
              playsInline
              autoPlay
              muted
              loop
              preload="metadata"
            />
            {/* viền sáng + overlay nhẹ */}
            <div className={styles.videoGlow} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
