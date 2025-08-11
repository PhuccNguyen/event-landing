'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mic, Heart, Users } from 'lucide-react'
import RegistrationForm from '@/components/forms/RegistrationForm'
import styles from './BecomePartSection.module.css'

const BecomePartSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showForm, setShowForm] = useState(false)
  const [formType, setFormType] = useState<'speaker' | 'sponsor' | 'media'>('speaker')

  const opportunities = [
    {
      id: 'speaker',
      icon: <Mic size={32} />,
      title: 'Become Our Speaker',
      description: 'Share your expertise and insights with the Web3 community',
      cta: 'Apply to Speak',
      color: 'blue'
    },
    {
      id: 'sponsor',
      icon: <Heart size={32} />,
      title: 'Become Our Sponsor',
      description: 'Partner with us to reach key decision makers and industry leaders',
      cta: 'Explore Sponsorship',
      color: 'purple'
    },
    {
      id: 'media',
      icon: <Users size={32} />,
      title: 'Become Our Media Partner',
      description: 'Join us in spreading the word about Web3 innovation',
      cta: 'Partner With Us',
      color: 'green'
    }
  ]

  const handleFormOpen = (type: 'speaker' | 'sponsor' | 'media') => {
    setFormType(type)
    setShowForm(true)
  }

  return (
    <section ref={ref} className={styles.becomePartSection}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={styles.sectionTitle}>
            Together, We Create TingNect&apos;s Success
          </h2>
          <p className={styles.sectionDescription}>
            Create memorable experiences, connect with top people and expand your network 
            influence in Web3 today. Be ahead to earn a focused audience group, engage with 
            key decision makers and establish new collaborations in the industry. Join us to 
            share the latest event news, promote your brand and be part of shaping the future 
            of blockchain and emerging technologies.
          </p>
        </motion.div>

        <div className={styles.opportunitiesGrid}>
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`${styles.opportunityCard} ${styles[opportunity.color]}`}
            >
              <div className={styles.cardIcon}>
                {opportunity.icon}
              </div>
              <h3 className={styles.cardTitle}>{opportunity.title}</h3>
              <p className={styles.cardDescription}>{opportunity.description}</p>
              <button
                onClick={() => handleFormOpen(opportunity.id as 'speaker' | 'sponsor' | 'media')}
                className={styles.cardButton}
              >
                {opportunity.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Registration Form Modal */}
        {showForm && (
          <RegistrationForm
            type={formType}
            isOpen={showForm}
            onClose={() => setShowForm(false)}
          />
        )}
      </div>
    </section>
  )
}

export default BecomePartSection
