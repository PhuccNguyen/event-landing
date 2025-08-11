import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Clock } from 'lucide-react'
import styles from './speakers.module.css'

export const metadata: Metadata = {
  title: 'Speakers - TingNect Build for Billions',
  description: 'Meet our distinguished speakers at TingNect - Build for Billions event',
}

const speakers = [
  {
    id: 1,
    name: 'Lucid Hoang',
    title: 'Founder',
    company: 'Ufin Group',
    topic: 'Build for Billions: Chiến lược mở rộng người dùng và khai thác doanh thu trong thế giới phi tập trung',
    image: '/images/speakers/lucid-hoang.png',
    bio: 'Lucid Hoang is the visionary founder of Ufin Group, a leading technology company specializing in Web3 solutions and decentralized finance. With over 10 years of experience in the tech industry, Lucid has been at the forefront of blockchain innovation, helping companies transition to decentralized business models. His expertise spans across cryptocurrency, DeFi protocols, and scalable blockchain architectures.',
    expertise: ['Blockchain Technology', 'DeFi Protocols', 'Business Strategy', 'Web3 Scaling'],
    social: {
      linkedin: '#',
      twitter: '#',
      website: 'https://ufin.com'
    }
  }
]

const SpeakersPage = () => {
  return (
    <div className={styles.speakersPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href="/" className={styles.backButton}>
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Speakers</h1>
            <p className={styles.heroDescription}>
              Meet the industry experts and thought leaders who will share their insights at TingNect
            </p>
            <div className={styles.eventInfo}>
              <div className={styles.eventDetail}>
                <Calendar size={20} />
                <span>August 16, 2025</span>
              </div>
              <div className={styles.eventDetail}>
                <Clock size={20} />
                <span>14:00 - 17:00</span>
              </div>
              <div className={styles.eventDetail}>
                <MapPin size={20} />
                <span>Ho Chi Minh City</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className={styles.speakersSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.speakersGrid}>
            {speakers.map((speaker) => (
              <div key={speaker.id} className={styles.speakerCard}>
                <div className={styles.speakerImage}>
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className={styles.avatar}
                  />
                </div>
                
                <div className={styles.speakerInfo}>
                  <h2 className={styles.speakerName}>{speaker.name}</h2>
                  <p className={styles.speakerTitle}>{speaker.title}</p>
                  <p className={styles.speakerCompany}>{speaker.company}</p>
                  
                  <div className={styles.speakerBio}>
                    <h3>Biography</h3>
                    <p>{speaker.bio}</p>
                  </div>
                  
                  <div className={styles.expertise}>
                    <h3>Expertise</h3>
                    <div className={styles.expertiseTags}>
                      {speaker.expertise.map((skill, index) => (
                        <span key={index} className={styles.expertiseTag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.speakerTopic}>
                    <h3>Speaking Topic</h3>
                    <p>{speaker.topic}</p>
                  </div>
                  
                  <div className={styles.socialLinks}>
                    <h3>Connect</h3>
                    <div className={styles.socialButtons}>
                      {speaker.social.linkedin && (
                        <a href={speaker.social.linkedin} className={styles.socialButton}>
                          LinkedIn
                        </a>
                      )}
                      {speaker.social.twitter && (
                        <a href={speaker.social.twitter} className={styles.socialButton}>
                          Twitter
                        </a>
                      )}
                      {speaker.social.website && (
                        <a href={speaker.social.website} className={styles.socialButton}>
                          Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.ctaContent}>
            <h2>Want to Become a Speaker?</h2>
            <p>Share your expertise with the Web3 community and contribute to the future of decentralized technology.</p>
            <Link href="/contact" className={styles.ctaButton}>
              Apply to Speak
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SpeakersPage
