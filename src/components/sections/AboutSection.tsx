'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './AboutSection.module.css'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className={`${styles.section} bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8"
        >
          <h2 className={`${styles.title} text-3xl md:text-4xl font-extrabold text-gray-900 relative`}>
            About TingNect
            <span className={styles.titleUnderline}></span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className={`${styles.content} text-base md:text-lg text-gray-700 leading-relaxed bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg`}
        >
          <p className="mb-4">
            <span className="font-semibold text-indigo-600">TingNect - Build for Billions</span> is a premier platform uniting developers, entrepreneurs, and tech enthusiasts to shape a sustainable Web3 ecosystem. Hosted in Ho Chi Minh City, it unlocks global opportunities, driving innovation and connecting projects to billions of users.
          </p>
          <p>
            Organized by Ting Foundation, TingNect offers thought-provoking discussions, high-value networking, and insights from industry leaders. It’s a launchpad for breakthrough ideas, strategic partnerships, and real value creation for the future tech community.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
  
  // <motion.div
  //           initial={{ opacity: 0, x: 50 }}
  //           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
  //           transition={{ delay: 0.4, duration: 0.8 }}
  //           className="relative"
  //         >
  //           {/* Video placeholder - replace with actual video when available */}
  //           <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
  //             <div className="text-center">
  //               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
  //                 <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
  //                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
  //                 </svg>
  //               </div>
  //               <p className="text-gray-600">Introductory Video Coming Soon</p>
  //             </div>
  //           </div>
  //         </motion.div>