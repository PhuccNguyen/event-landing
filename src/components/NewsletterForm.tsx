'use client'

import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { BiRocket } from 'react-icons/bi'
import styles from './Footer.module.css'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address')
      return
    }

    setIsSubscribing(true)
    setMessage('')

    try {
      // Here you would integrate with your email service provider
      // For now, we'll simulate a subscription
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage('Thank you for subscribing!')
      setEmail('')
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubscribing(false)
    }

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  return (
    <div className={styles.newsletterForm}>
      <form onSubmit={handleSubscribe} className={styles.inputGroup}>
        <MdEmail className={styles.inputIcon} />
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className={styles.emailInput}
          disabled={isSubscribing}
        />
        <button 
          type="submit"
          className={styles.subscribeButton}
          disabled={isSubscribing}
        >
          <BiRocket size={18} />
          {isSubscribing ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <p className={styles.subscribeMessage}>
          {message}
        </p>
      )}
    </div>
  )
}

export default NewsletterForm
