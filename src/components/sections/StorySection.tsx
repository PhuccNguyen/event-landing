'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './StorySection.module.css'

const storyImages = [
  { src: '/images/events/sukien_1.png', alt: 'TingNect Event 1' },
  { src: '/images/events/sukien_2.png', alt: 'TingNect Event 2' },
  { src: '/images/events/sukien_3.png', alt: 'TingNect Event 3' },
  { src: '/images/events/sukien_4.png', alt: 'TingNect Event 4' },
  { src: '/images/events/sukien_5.png', alt: 'TingNect Event 5' },
  { src: '/images/events/sukien_6.png', alt: 'TingNect Event 6' },
]

const StorySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % storyImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + storyImages.length) % storyImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section ref={ref} className={styles.storySection}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={styles.sectionTitle}>
            The TingNect Story
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Relive the memorable moments from our previous events and see the community we&apos;ve built together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={styles.slideshow}
        >
          <div className={styles.slideshowContainer}>
            <button
              onClick={prevSlide}
              className={`${styles.navButton} ${styles.prevButton}`}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <div className={styles.imageContainer}>
              <Image
                src={storyImages[currentIndex].src}
                alt={storyImages[currentIndex].alt}
                fill
                className={styles.slideImage}
                priority
              />
            </div>

            <button
              onClick={nextSlide}
              className={`${styles.navButton} ${styles.nextButton}`}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className={styles.dotsContainer}>
            {storyImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection
