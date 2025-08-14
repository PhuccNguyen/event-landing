import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Clock, Linkedin, Globe, Award, Star } from 'lucide-react'
import styles from './speakers.module.css'

export const metadata: Metadata = {
  title: 'Speakers - TingNect Build for Billions',
  description: 'Meet our distinguished speakers at TingNect - Build for Billions event',
}

const speakers = [
  {
    id: 1,
    name: 'Ms Tiến',
    title: 'CEO',
    company: 'Blockchain Work',
    topic: 'The Future of Blockchain in Enterprise Solutions',
    image: '/Speaker/Ms Tien.png',
    bio: 'Ms Tiến is a visionary leader in blockchain technology, driving enterprise adoption and innovation. As CEO of Blockchain Work, she has been instrumental in developing cutting-edge solutions that bridge traditional business with Web3 technologies. Her expertise spans across enterprise blockchain implementation, strategic partnerships, and digital transformation.',
    expertise: ['Blockchain Technology', 'Enterprise Solutions', 'Web3 Strategy', 'Digital Transformation'],
    social: {
      linkedin: 'https://docs.google.com/document/d/1kOiJPk3bNVbkknPdDW40pKQfwUKQMrV2/edit',
      website: 'https://drive.google.com/drive/folders/1i7cRSU46b8G4ZLn5lCBquz-qejKd5Qog'
    },
    status: 'VIP Speaker',
    sessionTime: '14:00 - 14:30',
    role: 'Keynote Speaker & MOU Signing'
  },
  {
    id: 2,
    name: 'Erik Dương',
    title: 'Founder',
    company: 'W3X Network',
    topic: 'Building the Next Generation Web3 Infrastructure',
    image: '/Speaker/Erik.png',
    bio: 'Erik Dương is the founder of W3X Network and Web3 X Investment Fund, with 15 years in technology and 8 years in blockchain. He has worked with leading tech giants like SAP and Uber in the US, Germany, and Singapore. Web3 X Investment Fund focuses on incubating and investing in blockchain startups across the Asia-Pacific region, having supported over 50 startups with several reaching billion-dollar valuations.',
    expertise: ['Web3 Infrastructure', 'Blockchain Development', 'Investment Strategy', 'Startup Incubation'],
    social: {
      website: 'https://www.w3x.network/',
      linkedin: '#'
    },
    status: 'Co-host',
    sessionTime: '14:30 - 15:00',
    role: 'Co-host, Media Partner & Speaker'
  },
  {
    id: 3,
    name: 'Niklaus Trần',
    title: 'Co-founder',
    company: 'VDBG',
    topic: 'Strategic Partnerships in the Global Blockchain Ecosystem',
    image: '/Speaker/Niklaus.jpg',
    bio: 'Niklaus Trần brings extensive experience from his roles as Partnerships Manager at Alibaba and Business Development Manager at AdsYield. As Co-founder of VDBG, he specializes in building strategic partnerships in the blockchain space, connecting traditional businesses with Web3 innovations and fostering global collaboration.',
    expertise: ['Strategic Partnerships', 'Business Development', 'Global Markets', 'Blockchain Ecosystem'],
    social: {
      linkedin: 'https://www.linkedin.com/in/niklaus-tran/',
      website: 'https://docs.google.com/document/d/1skGo-FPpBoJsUSmmaOx3boOKEiLBOLdDgyXn5e_uog0/edit'
    },
    status: 'Featured Speaker',
    sessionTime: '15:00 - 15:30',
    role: 'Industry Expert'
  },
  {
    id: 4,
    name: 'Lucid Hoàng',
    title: 'Founder & CEO',
    company: 'Ufin Group',
    topic: 'Build for Billions: Chiến lược mở rộng người dùng và khai thác doanh thu trong thế giới phi tập trung',
    image: '/Speaker/Lucid Hoang.png',
    bio: 'Lucid Hoàng is the visionary founder of Ufin Group, leading innovative solutions in the decentralized technology space. With over 10 years of experience in fintech and blockchain technology, he has been instrumental in driving Web3 adoption across Southeast Asia, focusing on scalable solutions that can serve billions of users.',
    expertise: ['Blockchain Technology', 'Fintech Innovation', 'Web3 Strategy', 'Decentralized Finance'],
    social: {
      linkedin: '#',
      website: 'https://ufin.com'
    },
    status: 'Keynote Speaker',
    sessionTime: '15:30 - 16:00',
    role: 'Main Keynote Speaker'
  }
]

const SpeakersPage = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'VIP Speaker':
        return 'vip'
      case 'Co-host':
        return 'cohost'
      case 'Keynote Speaker':
        return 'keynote'
      default:
        return 'featured'
    }
  }

  return (
    <div className={styles.speakersPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <Link href="/" className={styles.backButton}>
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
          
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <Star size={16} />
              <span>Elite Speakers 2025</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Meet Our Expert Speakers
            </h1>
            
            <p className={styles.heroDescription}>
              Industry leaders and visionaries shaping the future of Web3 and blockchain technology
            </p>
            
            <div className={styles.eventInfo}>
              <div className={styles.eventDetail}>
                <Calendar size={16} />
                <span>August 16, 2025</span>
              </div>
              <div className={styles.eventDetail}>
                <Clock size={16} />
                <span>14:00 - 17:00</span>
              </div>
              <div className={styles.eventDetail}>
                <MapPin size={16} />
                <span>Rex Hotel, HCMC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className={styles.speakersSection}>
        <div className={styles.container}>
          <div className={styles.speakersGrid}>
            {speakers.map((speaker) => (
              <div key={speaker.id} className={styles.speakerCard}>
                {/* Speaker Header */}
                <div className={styles.speakerHeader}>
                  <div className={styles.speakerImageContainer}>
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className={styles.speakerImage}
                      priority
                    />
                    <div className={`${styles.statusBadge} ${styles[getStatusColor(speaker.status)]}`}>
                      <span>{speaker.status}</span>
                    </div>
                  </div>
                  
                  <div className={styles.speakerBasicInfo}>
                    <h2 className={styles.speakerName}>{speaker.name}</h2>
                    <p className={styles.speakerTitle}>{speaker.title}</p>
                    <p className={styles.speakerCompany}>at {speaker.company}</p>
                    <p className={styles.speakerRole}>{speaker.role}</p>
                    
                    <div className={styles.sessionInfo}>
                      <Clock size={14} />
                      <span>{speaker.sessionTime}</span>
                    </div>
                  </div>
                </div>
                
                {/* Speaker Content */}
                <div className={styles.speakerContent}>
                  <div className={styles.speakerTopic}>
                    <h3>Speaking Topic</h3>
                    <p>{speaker.topic}</p>
                  </div>
                  
                  <div className={styles.speakerBio}>
                    <h3>Biography</h3>
                    <p>{speaker.bio}</p>
                  </div>
                  
                  <div className={styles.expertise}>
                    <h3>Areas of Expertise</h3>
                    <div className={styles.expertiseTags}>
                      {speaker.expertise.map((skill, index) => (
                        <span key={index} className={styles.expertiseTag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.socialLinks}>
                    <h3>Connect</h3>
                    <div className={styles.socialButtons}>
                      {speaker.social.linkedin && (
                        <a 
                          href={speaker.social.linkedin} 
                          className={styles.socialButton}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin size={16} />
                          LinkedIn
                        </a>
                      )}
                      {speaker.social.website && (
                        <a 
                          href={speaker.social.website} 
                          className={styles.socialButton}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe size={16} />
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
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <Award size={48} />
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
