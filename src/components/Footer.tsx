import Link from 'next/link'
import Image from 'next/image'
import { 
  FaTelegram, 
  FaTwitter, 
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaDiscord
} from 'react-icons/fa'
import { 
  MdEmail, 
  MdPhone, 
  MdLocationOn
} from 'react-icons/md'
import { BiRocket } from 'react-icons/bi'
import ScrollToTopButton from './ScrollToTopButton'
import NewsletterForm from './NewsletterForm'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
              <h3 className={styles.newsletterTitle}>Stay Connected</h3>
              <p className={styles.newsletterDescription}>
                Get the latest updates on TingNect events, Web3 insights, and community news
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.footerGrid}>
            {/* Brand Section */}
            <div className={styles.brandSection}>
              <div className={styles.logo}>
                <Image
               src="/TingNect/TingNect%20icon.svg"
                  alt="TingNect Logo"
                  width={48}
                  height={48}
                  className={styles.logoImage}
                />
                <div className={styles.logoText}>
                  <span className={styles.brandName}>TingNect</span>
                  <span className={styles.tagline}>Build for Billions</span>
                </div>
              </div>
              
              <p className={styles.brandDescription}>
                A premier platform uniting developers, entrepreneurs, and tech enthusiasts 
                in shaping a sustainable Web3 ecosystem. Join us in building the future of 
                decentralized technology.
              </p>

              <div className={styles.eventInfo}>
                <div className={styles.eventDetail}>
                  <MdLocationOn size={16} />
                  <span>Ho Chi Minh City, Vietnam</span>
                </div>
                <div className={styles.eventDetail}>
                  <span className={styles.eventDate}>August 16, 2025</span>
                  <span className={styles.eventTime}>14:00 - 17:00</span>
                </div>
                <div className={styles.hostedBy}>
                  <span>Proudly hosted by <strong>Ting Foundation</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.linksSection}>
              <h3 className={styles.sectionTitle}>Event</h3>
              <ul className={styles.linksList}>
                <li>
                  <Link href="/" className={styles.footerLink}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/agenda" className={styles.footerLink}>
                    Agenda
                  </Link>
                </li>
                <li>
                  <Link href="/speakers" className={styles.footerLink}>
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link href="/sponsors" className={styles.footerLink}>
                    Sponsors
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://lu.ma/qji7t8kq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${styles.footerLink} ${styles.registerLink}`}
                  >
                    Register Now
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className={styles.linksSection}>
              <h3 className={styles.sectionTitle}>Resources</h3>
              <ul className={styles.linksList}>
                <li>
                  <Link href="/about" className={styles.footerLink}>
                    About TingNect
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://docs.tingnect.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <Link href="/contact" className={styles.footerLink}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/sponsors" className={styles.footerLink}>
                    Become a Sponsor
                  </Link>
                </li>
                <li>
                  <Link href="/speakers" className={styles.footerLink}>
                    Speak at TingNect
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div className={styles.contactSection}>
              <h3 className={styles.sectionTitle}>Get in Touch</h3>
              
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <MdEmail size={18} />
                  <a 
                    href="mailto:contact@tingnect.com"
                    className={styles.contactLink}
                  >
                    contact@tingnect.com
                  </a>
                </div>
                
                <div className={styles.contactItem}>
                  <MdPhone size={18} />
                  <span className={styles.contactText}>
                    Available during event hours
                  </span>
                </div>
              </div>

              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Follow Us</h4>
                <div className={styles.socialLinks}>
                  <a 
                    href="https://t.me/tingnect" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Telegram"
                  >
                    <FaTelegram size={20} />
                  </a>
                  <a 
                    href="https://x.com/TingNect" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Twitter/X"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a 
                    href="https://www.facebook.com/TingNect" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/company/tingnect" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a 
                    href="https://discord.gg/tingnect" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Discord"
                  >
                    <FaDiscord size={20} />
                  </a>
                  <a 
                    href="https://github.com/tingnect" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>

              <div className={styles.communitySection}>
                <h4 className={styles.communityTitle}>Join Our Community</h4>
                <p className={styles.communityText}>
                  Connect with 1000+ Web3 builders and innovators
                </p>
                <a 
                  href="https://t.me/tingnect" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.communityButton}
                >
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottomFooter}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>
                &copy; 2025 <strong>Ting Foundation</strong>. All rights reserved.
              </p>
              <p className={styles.buildsText}>
                Built with ❤️ for the Web3 community
              </p>
            </div>
            
            <div className={styles.bottomLinks}>
              <Link href="/privacy" className={styles.bottomLink}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={styles.bottomLink}>
                Terms of Service
              </Link>
              <Link href="/cookies" className={styles.bottomLink}>
                Cookie Policy
              </Link>
            </div>

            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
