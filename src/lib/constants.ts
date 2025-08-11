// Event information constants
export const EVENT_INFO = {
  name: 'TingNect - Build for Billions',
  date: '2025-08-16',
  time: {
    start: '14:00',
    end: '17:00',
    dinner: '17:00'
  },
  location: {
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    venue: 'TBA' // To Be Announced
  },
  organizer: 'Ting Foundation',
  website: 'https://event.tingnect.com',
  registration: 'https://lu.ma/qji7t8kq'
} as const

// Contact information
export const CONTACT_INFO = {
  email: 'contact@tingnect.com',
  phone: '+84 123 456 789',
  social: {
    telegram: 'https://t.me/tingnect',
    twitter: 'https://x.com/TingNect',
    facebook: 'https://www.facebook.com/TingNect',
    docs: 'https://docs.tingnect.com/'
  }
} as const

// Navigation items
export const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#sponsors', label: 'Sponsors' }
] as const

// Form validation messages
export const VALIDATION_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  url: 'Please enter a valid URL',
  minLength: (min: number) => `Must be at least ${min} characters`,
  maxLength: (max: number) => `Must be no more than ${max} characters`
} as const

// API endpoints
export const API_ENDPOINTS = {
  register: '/api/register',
  sponsor: '/api/sponsor',
  contact: '/api/contact'
} as const

// Animation variants for Framer Motion
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
} as const
