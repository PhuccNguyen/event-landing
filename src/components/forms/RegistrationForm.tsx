'use client'

import { useState, useEffect, type ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle, User, Building, Mail, Phone, Globe, Users } from 'lucide-react'
import styles from './RegistrationForm.module.css'

type ParticipationType = 'speaker' | 'sponsor' | 'media'

interface RegistrationFormProps {
  type: ParticipationType
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  fullName: string
  company: string
  jobTitle: string
  email: string
  phone: string
  website: string
  participationType: ParticipationType[]
}

const RegistrationForm = ({ type, isOpen, onClose }: RegistrationFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    website: '',
    participationType: [type]
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  // Reset form when type changes
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        participationType: [type]
      }))
    }
  }, [type, isOpen])

  const formTitles: Record<ParticipationType, string> = {
    speaker: 'Apply to Become a Speaker',
    sponsor: 'Become Our Sponsor',
    media: 'Become Our Media Partner'
  }

  const formDescriptions: Record<ParticipationType, string> = {
    speaker: 'Share your expertise and insights with the Web3 community at TingNect',
    sponsor: 'Partner with us to reach key decision makers and industry leaders',
    media: 'Join us in spreading the word about Web3 innovation and collaboration'
  }
const participationOptions: Array<{ key: ParticipationType; label: string; icon: ReactElement }> = [
  { key: 'speaker', label: 'Speaker', icon: <User size={16} /> },
  { key: 'sponsor', label: 'Sponsor', icon: <Building size={16} /> },
  { key: 'media',   label: 'Media Partner', icon: <Users size={16} /> },
];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleCheckboxChange = (value: ParticipationType) => {
    setFormData(prev => ({
      ...prev,
      participationType: prev.participationType.includes(value)
        ? prev.participationType.filter(item => item !== value)
        : [...prev.participationType, value]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          onClose()
          setIsSubmitted(false)
          setFormData({
            fullName: '',
            company: '',
            jobTitle: '',
            email: '',
            phone: '',
            website: '',
            participationType: [type]
          })
          setErrors({})
        }, 2500)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // You could add error state here for user feedback
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setErrors({})
      setIsSubmitted(false)
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.modalOverlay}
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={styles.modalHeader}>
              <div className={styles.headerContent}>
                <div className={styles.headerIcon}>
                  {participationOptions.find(opt => opt.key === type)?.icon}
                </div>
                <div>
                  <h2 className={styles.modalTitle}>{formTitles[type]}</h2>
                  <p className={styles.modalDescription}>{formDescriptions[type]}</p>
                </div>
              </div>
              <button onClick={handleClose} className={styles.closeButton}>
                <X size={20} />
              </button>
            </div>

            {!isSubmitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className={styles.form}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {/* Personal Information Section */}
                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>
                    <User size={18} />
                    Personal Information
                  </h3>
                  
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="fullName" className={styles.label}>
                        Full Name *
                      </label>
                      <div className={styles.inputWrapper}>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      {errors.fullName && (
                        <span className={styles.errorMessage}>{errors.fullName}</span>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="jobTitle" className={styles.label}>
                        Job Title *
                      </label>
                      <div className={styles.inputWrapper}>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          required
                          className={`${styles.input} ${errors.jobTitle ? styles.inputError : ''}`}
                          placeholder="Your position"
                        />
                      </div>
                      {errors.jobTitle && (
                        <span className={styles.errorMessage}>{errors.jobTitle}</span>
                      )}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.label}>
                      <Building size={16} />
                      Company/Organization *
                    </label>
                    <div className={styles.inputWrapper}>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
                        placeholder="Your company or organization"
                      />
                    </div>
                    {errors.company && (
                      <span className={styles.errorMessage}>{errors.company}</span>
                    )}
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>
                    <Mail size={18} />
                    Contact Information
                  </h3>
                  
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Email Address *
                      </label>
                      <div className={styles.inputWrapper}>
                        <Mail size={18} className={styles.inputIcon} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`${styles.input} ${styles.inputWithIcon} ${errors.email ? styles.inputError : ''}`}
                          placeholder="your@email.com"
                        />
                      </div>
                      {errors.email && (
                        <span className={styles.errorMessage}>{errors.email}</span>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>
                        Phone Number *
                      </label>
                      <div className={styles.inputWrapper}>
                        <Phone size={18} className={styles.inputIcon} />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className={`${styles.input} ${styles.inputWithIcon} ${errors.phone ? styles.inputError : ''}`}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      {errors.phone && (
                        <span className={styles.errorMessage}>{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="website" className={styles.label}>
                      <Globe size={16} />
                      Website/Social Media
                    </label>
                    <div className={styles.inputWrapper}>
                      <Globe size={18} className={styles.inputIcon} />
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className={`${styles.input} ${styles.inputWithIcon}`}
                        placeholder="https://your-website.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Participation Type Section */}
                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>
                    <Users size={18} />
                    Participation Type
                  </h3>
                  <div className={styles.checkboxGroup}>
                    {participationOptions.map((option) => (
                      <label key={option.key} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={formData.participationType.includes(option.key)}
                          onChange={() => handleCheckboxChange(option.key)}
                          className={styles.checkbox}
                        />
                        <div className={styles.checkboxContent}>
                          {option.icon}
                          <span>Become a {option.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className={styles.loadingSpinner} />
                  ) : (
                    <>
                      <Send size={20} />
                      Submit Application
                    </>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                <div className={styles.successIcon}>
                  <CheckCircle size={64} />
                </div>
                <h3 className={styles.successTitle}>Application Submitted!</h3>
                <p className={styles.successDescription}>
                  Thank you for your interest in TingNect. We&apos;ll review your application and get back to you within 48 hours.
                </p>
                <div className={styles.successDetails}>
                  <div className={styles.successDetail}>
                    <strong>Application Type:</strong> {formData.participationType.join(', ')}
                  </div>
                  <div className={styles.successDetail}>
                    <strong>Contact Email:</strong> {formData.email}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default RegistrationForm
