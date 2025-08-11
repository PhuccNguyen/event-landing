import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { FaTelegram, FaTwitter, FaFacebook } from 'react-icons/fa'
import ContactForm from '@/components/forms/ContactForm'
import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Contact Us - TingNect Build for Billions',
  description: 'Get in touch with TingNect team for inquiries, partnerships, and support',
}

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href="/" className={styles.backButton}>
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroDescription}>
              Have questions about TingNect? Want to get involved? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className={styles.contactSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h2 className={styles.infoTitle}>Get in Touch</h2>
              <p className={styles.infoDescription}>
                Reach out to us for any inquiries about the event, partnerships, 
                or general questions. We&apos;re here to help!
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Mail size={24} />
                  </div>
                  <div className={styles.contactText}>
                    <h3>Email</h3>
                    <p>contact@tingnect.com</p>
                    <a href="mailto:contact@tingnect.com">Send us an email</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Phone size={24} />
                  </div>
                  <div className={styles.contactText}>
                    <h3>Phone</h3>
                    <p>+84 (0) 123 456 789</p>
                    <span className={styles.availability}>Available Mon-Fri, 9AM-6PM</span>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <MapPin size={24} />
                  </div>
                  <div className={styles.contactText}>
                    <h3>Event Location</h3>
                    <p>Ho Chi Minh City, Vietnam</p>
                    <span className={styles.availability}>August 16, 2025</span>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Clock size={24} />
                  </div>
                  <div className={styles.contactText}>
                    <h3>Event Time</h3>
                    <p>14:00 - 17:00</p>
                    <span className={styles.availability}>+ Networking Dinner at 17:00</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className={styles.socialSection}>
                <h3>Follow Us</h3>
                <div className={styles.socialLinks}>
                  <a href="https://t.me/tingnect" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <FaTelegram size={24} />
                    <span>Telegram</span>
                  </a>
                  <a href="https://x.com/TingNect" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <FaTwitter size={24} />
                    <span>Twitter</span>
                  </a>
                  <a href="https://www.facebook.com/TingNect" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <FaFacebook size={24} />
                    <span>Facebook</span>
                  </a>
                </div>
                <div className={styles.docsLink}>
                  <a href="https://docs.tingnect.com/" target="_blank" rel="noopener noreferrer">
                    📄 Documentation
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formContainer}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>How do I register for the event?</h3>
              <p>You can register directly through our Lu.ma page or visit the registration section on our homepage.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is the event free to attend?</h3>
              <p>Yes, TingNect - Build for Billions is completely free for all attendees, including the networking dinner.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I become a speaker?</h3>
              <p>We welcome speaker applications! Please use our contact form or reach out directly to discuss speaking opportunities.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Are there sponsorship opportunities?</h3>
              <p>Yes, we offer various sponsorship packages. Visit our sponsors page or contact us for more details.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
