'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { X, ChevronDown, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Header.module.css'


interface DropdownItem {
  href: string
  label: string
}

interface NavItem {
  href: string
  label: string
  external?: boolean
  dropdown?: DropdownItem[]
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(`.${styles.navItemWrapper}`)) {
        setActiveDesktopDropdown(null)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setActiveMobileDropdown(null)
  }, [pathname])

  const navItems: NavItem[] = [
    {
      href: '/',
      label: 'Home',
      dropdown: [
        { href: '#speakers', label: 'Speaker' },
        { href: '#agenda', label: 'Agenda' },
        { href: '#sponsors', label: 'Sponsor' },
      ]
    },
    {
      href: '/speakers',
      label: 'Speakers'
    },
    {
      href: '/agenda',
      label: 'Agenda'
    },
    {
      href: '/sponsors',
      label: 'Partners'
    },
    {
      href: '/contact',
      label: 'Contact'
    }
  ]

  const handleDesktopDropdownClick = (e: React.MouseEvent, itemLabel: string) => {
    e.stopPropagation()
    setActiveDesktopDropdown(activeDesktopDropdown === itemLabel ? null : itemLabel)
  }

  const handleMobileDropdownClick = (itemLabel: string) => {
    setActiveMobileDropdown(activeMobileDropdown === itemLabel ? null : itemLabel)
  }

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      setActiveMobileDropdown(null)
    }
  }

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false)
    setActiveMobileDropdown(null)
  }

  const handleDropdownItemClick = (href: string) => {
    if (href.startsWith('#')) {
      // Handle scroll to section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    // Close dropdowns and mobile menu
    setActiveDesktopDropdown(null)
    setActiveMobileDropdown(null)
    setIsMenuOpen(false)
  }

  const isActivePage = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      >
        <div className={styles.container}>
          <div className={styles.headerContent}>
            {/* Logo */}
            <Link href="/" className={styles.logo} onClick={handleMobileMenuClose}>
              <div className={styles.logoContainer}>
                <Image
                  src="/TingNect/TingNect.svg"
                  alt="TingNect"
                  width={140}
                  height={35}
                  priority
                  className={styles.logoImage}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className={styles.desktopNav}>
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={styles.navItemWrapper}
                >
                  {item.dropdown ? (
                    <button
                      className={`${styles.navItem} ${styles.dropdownToggle} ${isActivePage(item.href) ? styles.active : ''}`}
                      onClick={(e) => handleDesktopDropdownClick(e, item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`${styles.chevron} ${activeDesktopDropdown === item.label ? styles.chevronOpen : ''}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`${styles.navItem} ${isActivePage(item.href) ? styles.active : ''}`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Desktop Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDesktopDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className={styles.dropdown}
                      >
                        <div className={styles.dropdownArrow}></div>
                        {item.dropdown.map((dropdownItem) => (
                          <button
                            key={dropdownItem.href}
                            onClick={() => handleDropdownItemClick(dropdownItem.href)}
                            className={styles.dropdownItem}
                          >
                            {dropdownItem.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Register Button */}
              <Link
                href="https://lu.ma/qji7t8kq"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.registerButton}
              >
                <span>GET TICKETS</span>
                <ExternalLink size={16} />
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={styles.mobileMenuButton}
              onClick={handleMobileMenuToggle}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
                <span className={styles.line1}></span>
                <span className={styles.line2}></span>
                <span className={styles.line3}></span>
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.backdrop}
              onClick={handleMobileMenuClose}
            />

            {/* Mobile Menu */}
            <motion.nav
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
                duration: 0.5
              }}
              className={styles.mobileNav}
            >
              <div className={styles.mobileNavHeader}>
                <div className={styles.mobileLogoContainer}>
                  <Image
                    src="/TingNect/TingNect.svg"
                    alt="TingNect"
                    width={120}
                    height={30}
                    className={styles.mobileLogoImage}
                  />
                </div>
                <button
                  onClick={handleMobileMenuClose}
                  className={styles.mobileCloseButton}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className={styles.mobileNavContent}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.2,
                      duration: 0.5,
                      ease: 'easeOut'
                    }}
                    className={styles.mobileNavItem}
                  >
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => handleMobileDropdownClick(item.label)}
                          className={`${styles.mobileNavLink} ${styles.mobileDropdownToggle} ${isActivePage(item.href) ? styles.active : ''}`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={18}
                            className={`${styles.mobileChevron} ${activeMobileDropdown === item.label ? styles.chevronOpen : ''}`}
                          />
                        </button>

                        <AnimatePresence>
                          {activeMobileDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className={styles.mobileDropdown}
                            >
                              {item.dropdown.map((dropdownItem, dropIndex) => (
                                <motion.button
                                  key={dropdownItem.href}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: dropIndex * 0.05 }}
                                  onClick={() => handleDropdownItemClick(dropdownItem.href)}
                                  className={styles.mobileDropdownItem}
                                >
                                  {dropdownItem.label}
                                </motion.button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`${styles.mobileNavLink} ${isActivePage(item.href) ? styles.active : ''}`}
                        onClick={handleMobileMenuClose}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* Mobile Register Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 + 0.3, duration: 0.5 }}
                  className={styles.mobileRegisterWrapper}
                >
                  <Link
                    href="https://lu.ma/qji7t8kq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mobileRegisterButton}
                    onClick={handleMobileMenuClose}
                  >
                    <span>GET TICKETS</span>
                    <ExternalLink size={18} />
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
