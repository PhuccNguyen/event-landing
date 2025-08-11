'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import styles from './SponsorForm.module.css'

const SponsorForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    sponsorshipType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sponsorshipTypes = [
    'Diamond Sponsor ($10,000+)',
    'Gold Sponsor ($5,000+)',
    'Silver Sponsor ($2,500+)',
    'Media Partner',
    'Custom Package'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/sponsor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            companyName: '',
            contactName: '',
            email: '',
            phone: '',
            website: '',
            sponsorshipType: '',
            message: ''
          })
        }, 3000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={styles.successMessage}
      >
        <CheckCircle size={64} className={styles.successIcon} />
        <h3>Thank You!</h3>
        <p>We&apos;ve received your sponsorship inquiry and will contact you within 24 hours.</p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className={styles.sponsorForm}
    >
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label htmlFor="companyName" className={styles.label}>Company Name *</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="contactName" className={styles.label}>Contact Name *</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="website" className={styles.label}>Company Website</label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleInputChange}
          className={styles.input}
          placeholder="https://"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="sponsorshipType" className={styles.label}>Sponsorship Interest *</label>
        <select
          id="sponsorshipType"
          name="sponsorshipType"
          value={formData.sponsorshipType}
          onChange={handleInputChange}
          required
          className={styles.select}
        >
          <option value="">Select sponsorship type</option>
          {sponsorshipTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className={styles.textarea}
          placeholder="Tell us more about your sponsorship goals and any specific requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.submitButton}
      >
        {isSubmitting ? (
          <div className={styles.loadingSpinner} />
        ) : (
          <>
            <Send size={20} />
            Send Inquiry
          </>
        )}
      </button>
    </motion.form>
  )
}

export default SponsorForm
