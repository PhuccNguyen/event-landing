import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Crown, Award, Medal, Star, Users, Target, Globe, ExternalLink, Building, Handshake } from 'lucide-react'
import SponsorForm from '@/components/forms/SponsorForm'
import styles from './sponsors.module.css'

export const metadata: Metadata = {
  title: 'Sponsors & Partners - TingNect Build for Billions',
  description: 'Join our sponsors and media partners supporting TingNect event',
}

const currentPartners = [
  {
    name: 'Blockchain Work',
    logo: '/Partner/BlockchainWork.png',
    tier: 'platinum',
    website: 'https://docs.google.com/document/d/1kOiJPk3bNVbkknPdDW40pKQfwUKQMrV2/edit',
    description: 'Leading blockchain solutions provider specializing in enterprise adoption and Web3 innovation.',
    type: 'Strategic Partner',
    representative: 'Ms Tiến - CEO'
  },
  {
    name: 'W3X Network',
    logo: '/Partner/Web3x_logo.png',
    tier: 'platinum',
    website: 'https://www.w3x.network/',
    description: 'Web3 X Investment Fund - Venture capital and incubation platform focusing on blockchain and Web3 startups in Asia-Pacific.',
    type: 'Co-host & Media Partner',
    representative: 'Erik Dương - Founder'
  },
  {
    name: 'Ufin Group',
    logo: '/Partner/UFINGROUP.png',
    tier: 'diamond',
    website: 'https://ufin.com',
    description: 'Leading financial technology company specializing in Web3 solutions and decentralized finance.',
    type: 'Title Sponsor',
    representative: 'Lucid Hoàng - Founder & CEO'
  },
  {
    name: 'Coinstore',
    logo: '/Partner/coinstore_logo.jfif',
    tier: 'gold',
    website: 'https://www.coinstore.com/',
    description: 'Global cryptocurrency exchange platform providing secure and reliable trading services.',
    type: 'VIP Partner',
    representative: 'Ms Kelly - Representative'
  },
  {
    name: 'BlockTitans',
    logo: '/Partner/blocktians.png',
    tier: 'gold',
    website: 'https://blocktitans.com/',
    description: '5 years in DeFi space, supporting 70+ global projects with project management and development expertise.',
    type: 'VIP Partner',
    representative: 'Kentdefi - Lead'
  },
  {
    name: 'Saha Holding',
    logo: '/Partner/saha_hoding.png',
    tier: 'silver',
    website: 'https://sahaholding.com.vn/',
    description: 'Investment holding company focusing on technology and innovation sectors.',
    type: 'Strategic Partner',
    representative: 'Investment Team'
  },
  {
    name: 'Collabrx',
    logo: '/Partner/Collabrx.svg',
    tier: 'silver',
    website: '#',
    description: 'US-based medical technology cloud computing company expanding into Asia-Pacific region.',
    type: 'MOU Partner',
    representative: 'Robert Phạm - Asia Development Director'
  },
  {
    name: 'Coin Terminal',
    logo: '/Partner/cointerminal.png',
    tier: 'media',
    website: 'https://www.cointerminal.com/',
    description: 'Platform supporting Web3/blockchain projects for capital raising and token launches.',
    type: 'Media Partner',
    representative: 'Nguyễn Toàn Thắng - Regional Lead'
  },
  {
    name: 'LC Agency',
    logo: '/Partner/LC Agency.jpg',
    tier: 'media',
    website: 'https://lcademy.io/',
    description: 'Blockchain marketing agency specializing in helping Web3 projects penetrate Vietnamese market.',
    type: 'Media Partner',
    representative: 'Eire Ngo - Founder'
  },
  {
    name: 'Fintech24h',
    logo: '/Partner/fintech24h.png',
    tier: 'media',
    website: 'https://fintech24h.com/',
    description: 'Blockchain marketing agency with industry experts and extensive global network.',
    type: 'Media Partner',
    representative: 'Vincent Nguyen - Founder & CEO'
  }
]

const sponsorshipTiers = [
  {
    name: 'Diamond Sponsor',
    price: '$15,000+',
    icon: <Crown size={28} />,
    color: 'diamond',
    benefits: [
      'Premium logo placement on all materials',
      '15-minute keynote speaking slot',
      'Dedicated premium booth space',
      'VIP networking dinner access',
      'Comprehensive social media promotion',
      '15 complimentary VIP tickets',
      'Custom branding opportunities',
      'Post-event follow-up support'
    ]
  },
  {
    name: 'Platinum Sponsor',
    price: '$10,000+',
    icon: <Award size={28} />,
    color: 'platinum',
    benefits: [
      'Prominent logo on event materials',
      '10-minute speaking opportunity',
      'Premium exhibition space',
      'VIP networking access',
      '10 complimentary tickets',
      'Social media mentions',
      'MOU signing opportunities'
    ]
  },
  {
    name: 'Gold Sponsor',
    price: '$5,000+',
    icon: <Medal size={28} />,
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
    icon: <Star size={28} />,
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
    icon: <Target size={28} />,
    color: 'media',
    benefits: [
      'Cross-promotion opportunities',
      'Exclusive content access',
      'Interview opportunities',
      'Logo placement',
      'Social media collaboration',
      'Press kit access'
    ]
  }
]

const SponsorsPage = () => {
  const getTierClass = (tier: string) => {
    const tierClasses = {
      diamond: styles.tierDiamond,
      platinum: styles.tierPlatinum,
      gold: styles.tierGold,
      silver: styles.tierSilver,
      media: styles.tierMedia,
    }
    return tierClasses[tier as keyof typeof tierClasses] || ''
  }

  return (
    <div className={styles.sponsorsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <Link href="/" className={styles.backButton}>
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
          
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <Handshake size={16} />
              <span>Partners & Sponsors</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Sponsors & Partners
            </h1>
            
            <p className={styles.heroDescription}>
              Join leading organizations supporting TingNect and connect with Web3 industry pioneers
            </p>
            
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <Users size={20} />
                <div>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Attendees</span>
                </div>
              </div>
              <div className={styles.statItem}>
                <Building size={20} />
                <div>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Companies</span>
                </div>
              </div>
              <div className={styles.statItem}>
                <Target size={20} />
                <div>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className={styles.partnersSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Strategic Partners</h2>
            <p className={styles.sectionSubtitle}>
              Leading organizations supporting the Web3 ecosystem
            </p>
          </div>
          
          <div className={styles.partnersGrid}>
            {currentPartners.map((partner, index) => (
              <div key={index} className={`${styles.partnerCard} ${getTierClass(partner.tier)}`}>
                <div className={styles.partnerHeader}>
                  <div className={styles.partnerLogo}>
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={60}
                      className={styles.logoImage}
                    />
                  </div>
                  <div className={styles.partnerType}>
                    <span>{partner.type}</span>
                  </div>
                </div>
                
                <div className={styles.partnerContent}>
                  <h3 className={styles.partnerName}>{partner.name}</h3>
                  <p className={styles.partnerDescription}>{partner.description}</p>
                  
                  {partner.representative && (
                    <div className={styles.representative}>
                      <span className={styles.repLabel}>Representative:</span>
                      <span className={styles.repName}>{partner.representative}</span>
                    </div>
                  )}
                  
                  <a 
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.partnerLink}
                  >
                    <Globe size={16} />
                    <span>Visit Website</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className={styles.tiersSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Sponsorship Opportunities</h2>
            <p className={styles.sectionSubtitle}>
              Choose the partnership level that best fits your organization
            </p>
          </div>
          
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
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Partner with TingNect?</h2>
          </div>
          
          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>
                <Users size={32} />
              </div>
              <h3>High-Quality Audience</h3>
              <p>Connect with developers, entrepreneurs, investors, and industry leaders actively shaping the Web3 landscape in Southeast Asia.</p>
            </div>
            
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>
                <Target size={32} />
              </div>
              <h3>Brand Visibility</h3>
              <p>Showcase your brand to a targeted audience through various marketing channels, event materials, and digital platforms.</p>
            </div>
            
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>
                <Handshake size={32} />
              </div>
              <h3>Strategic Networking</h3>
              <p>Build valuable relationships and partnerships with key stakeholders, investors, and innovators in the blockchain ecosystem.</p>
            </div>
            
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>
                <Crown size={32} />
              </div>
              <h3>Thought Leadership</h3>
              <p>Position your organization as an industry leader by sharing expertise and insights with the Web3 community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <Star size={48} />
              <h2 className={styles.formTitle}>Become a Partner</h2>
              <p className={styles.formDescription}>
                Interested in partnering with TingNect? Let&apos;s discuss how we can collaborate to build the future of Web3.
              </p>
            </div>
            <SponsorForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SponsorsPage
