import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Target, Eye, Users } from 'lucide-react'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About TingNect - Build for Billions',
  description: 'Learn about TingNect event and Ting Foundation mission to build sustainable Web3 ecosystem',
}

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href="/" className={styles.backButton}>
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About TingNect</h1>
            <p className={styles.heroSubtitle}>Build for Billions</p>
            <p className={styles.heroDescription}>
              Shaping the future of Web3 ecosystem through innovation, collaboration, and community building
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p className={styles.missionText}>
                TingNect - Build for Billions aspires to become a premier platform that unites 
                developers, entrepreneurs, investors, and tech enthusiasts in shaping a sustainable 
                Web3 ecosystem. We believe in the power of decentralized technology to transform 
                industries and create opportunities for billions of people worldwide.
              </p>
              <p className={styles.missionText}>
                Our mission is to bridge the gap between innovative ideas and practical implementation, 
                fostering an environment where breakthrough technologies can flourish and reach 
                global markets.
              </p>
            </div>
            <div className={styles.imageContent}>
              <div className={styles.missionImage}>
                <Target size={64} className={styles.missionIcon} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Target size={32} />
              </div>
              <h3 className={styles.valueTitle}>Innovation First</h3>
              <p className={styles.valueDescription}>
                We prioritize cutting-edge solutions and breakthrough technologies 
                that push the boundaries of what is possible in Web3.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Users size={32} />
              </div>
              <h3 className={styles.valueTitle}>Community Driven</h3>
              <p className={styles.valueDescription}>
                Our strength lies in our diverse community of builders, thinkers, 
                and visionaries working together towards common goals.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Eye size={32} />
              </div>
              <h3 className={styles.valueTitle}>Global Vision</h3>
              <p className={styles.valueDescription}>
                We think beyond borders, creating solutions that can scale 
                and impact billions of users across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ting Foundation Section */}
      <section className={styles.foundationSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.contentGrid}>
            <div className={styles.foundationImage}>
              <Image
                src="/images/ting-foundation-logo.png"
                alt="Ting Foundation"
                width={200}
                height={200}
                className={styles.foundationLogo}
              />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>About Ting Foundation</h2>
              <p className={styles.foundationText}>
                Ting Foundation is the driving force behind TingNect, dedicated to fostering 
                innovation in the Web3 space. As a non-profit organization, we focus on 
                creating platforms that enable collaboration, knowledge sharing, and 
                sustainable growth in the decentralized technology ecosystem.
              </p>
              <p className={styles.foundationText}>
                Through our events, research initiatives, and community programs, we aim to 
                accelerate the adoption of Web3 technologies and create meaningful opportunities 
                for developers and entrepreneurs worldwide.
              </p>
              <div className={styles.foundationStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Community Members</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Partner Organizations</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Successful Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Goals Section */}
      <section className={styles.goalsSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={styles.sectionTitle}>Event Goals</h2>
          <div className={styles.goalsList}>
            <div className={styles.goalItem}>
              <div className={styles.goalNumber}>01</div>
              <div className={styles.goalContent}>
                <h3>Foster Innovation</h3>
                <p>Create an environment where breakthrough ideas can be shared, discussed, and developed into viable solutions.</p>
              </div>
            </div>
            <div className={styles.goalItem}>
              <div className={styles.goalNumber}>02</div>
              <div className={styles.goalContent}>
                <h3>Build Networks</h3>
                <p>Connect developers, entrepreneurs, investors, and industry leaders to form valuable partnerships and collaborations.</p>
              </div>
            </div>
            <div className={styles.goalItem}>
              <div className={styles.goalNumber}>03</div>
              <div className={styles.goalContent}>
                <h3>Knowledge Transfer</h3>
                <p>Facilitate the exchange of expertise, best practices, and lessons learned from successful Web3 implementations.</p>
              </div>
            </div>
            <div className={styles.goalItem}>
              <div className={styles.goalNumber}>04</div>
              <div className={styles.goalContent}>
                <h3>Market Access</h3>
                <p>Provide insights and strategies for accessing global markets and scaling projects to reach billions of users.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
