import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Crown, Award, Medal, Star, Users, Target } from 'lucide-react'
import SponsorForm from '@/components/forms/SponsorForm'
import styles from './sponsors.module.css'

export const metadata: Metadata = {
  title: 'Sponsors & Partners - TingNect Build for Billions',
  description: 'Join our sponsors and media partners supporting TingNect event',
}

const currentSponsors = [
  {
    name: 'Ufin',
    logo: '/images/sponsors/ufin-logo.png',
    tier: 'diamond',
    website: 'https://ufin.com',
    description: 'Leading financial technology company specializing in Web3 solutions and decentralized finance.'
  }
]

const sponsorshipTiers = [
  {
    name: 'Diamond Sponsor',
    price: '$10,000+',
    icon: <Crown size={32} />,
    color: 'diamond',
    benefits: [
      'Premium logo placement on all materials',
      '10-minute speaking slot',
      'Dedicated booth space',
      'VIP networking access',
      'Social media promotion',
      '10 complimentary tickets',
      'Custom branding opportunities'
    ]
  },
  {
    name: 'Gold Sponsor',
    price: '$5,000+',
    icon: <Award size={32} />,
    color: 'gold',
    benefits: [
      'Logo on event materials',
      '5-minute speaking opportunity',
      'Exhibition space',
      '5 complimentary tickets',
      'Social media mentions',
      'Networking opportunities'
    ]
  },
  {
    name: 'Silver Sponsor',
    price: '$2,500+',
    icon: <Medal size={32} />,
    color: 'silver',
    benefits: [
      'Logo on website and materials',
      'Exhibition table',
      '3 complimentary tickets',
      'Social media recognition',
      'Networking access'
    ]
  },
  {
    name: 'Media Partner',
    price: 'Partnership',
    icon: <Star size={32} />,
    color: 'media',
    benefits: [
      'Cross-promotion opportunities',
      'Exclusive content access',
      'Interview opportunities',
      'Logo placement',
      'Social media collaboration'
    ]
  }
]

const SponsorsPage = () => {
  return (
    <div className={styles.sponsorsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href="/" className={styles.backButton}>
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Sponsors & Partners</h1>
            <p className={styles.heroDescription}>
              Join us as a sponsor and connect with leading minds in Web3 technology. 
              Showcase your brand to industry professionals and decision makers.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <Users size={24} />
                <span>500+ Attendees</span>
              </div>
              <div className={styles.statItem}>
                <Target size={24} />
                <span>Tech Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className={styles.currentSponsorsSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={styles.sectionTitle}>Our Current Sponsors</h2>
          <div className={styles.sponsorsGrid}>
            {currentSponsors.map((sponsor, index) => (
              <div key={index} className={`${styles.sponsorCard} ${styles[sponsor.tier]}`}>
                <div className={styles.sponsorLogo}>
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={200}
                    height={100}
                    className={styles.logoImage}
                  />
                </div>
                <div className={styles.sponsorInfo}>
                  <h3 className={styles.sponsorName}>{sponsor.name}</h3>
                  <p className={styles.sponsorDescription}>{sponsor.description}</p>
                  <a 
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sponsorLink}
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className={styles.tiersSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={styles.sectionTitle}>Sponsorship Opportunities</h2>
          <div className={styles.tiersGrid}>
            {sponsorshipTiers.map((tier, index) => (
              <div key={index} className={`${styles.tierCard} ${styles[tier.color]}`}>
                <div className={styles.tierHeader}>
                  <div className={styles.tierIcon}>
                    {tier.icon}
                  </div>
                  <h3 className={styles.tierName}>{tier.name}</h3>
                  <p className={styles.tierPrice}>{tier.price}</p>
                </div>
                <div className={styles.tierBenefits}>
                  <h4>Benefits Include:</h4>
                  <ul>
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className={styles.whySponsorSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={styles.sectionTitle}>Why Sponsor TingNect?</h2>
          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard}>
              <h3>High-Quality Audience</h3>
              <p>Connect with developers, entrepreneurs, investors, and industry leaders actively shaping the Web3 landscape.</p>
            </div>
            <div className={styles.reasonCard}>
              <h3>Brand Visibility</h3>
              <p>Showcase your brand to a targeted audience through various marketing channels and event materials.</p>
            </div>
            <div className={styles.reasonCard}>
              <h3>Networking Opportunities</h3>
              <p>Build valuable relationships and partnerships with key stakeholders in the blockchain ecosystem.</p>
            </div>
            <div className={styles.reasonCard}>
              <h3>Thought Leadership</h3>
              <p>Position your company as an industry leader by sharing expertise and insights with attendees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={styles.formSection}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Become a Sponsor</h2>
            <p className={styles.formDescription}>
              Interested in sponsoring TingNect? Fill out the form below and we will get in touch with you.
            </p>
            <SponsorForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SponsorsPage
