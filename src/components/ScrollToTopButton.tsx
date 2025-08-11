'use client'

import { MdArrowUpward } from 'react-icons/md'
import styles from './Footer.module.css'

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button 
      onClick={scrollToTop}
      className={styles.scrollToTop}
      aria-label="Scroll to top"
    >
      <MdArrowUpward size={20} />
    </button>
  )
}

export default ScrollToTopButton
