import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility function để merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format date cho Vietnamese locale
export function formatDate(date: Date): string {
  return date.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone number (Vietnamese format)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+84|84|0)(3|5|7|8|9)[0-9]{8}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Format phone number
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\s/g, '')
  if (cleaned.startsWith('+84')) {
    return cleaned.replace('+84', '0')
  }
  if (cleaned.startsWith('84')) {
    return cleaned.replace('84', '0')
  }
  return cleaned
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // bỏ dấu
    .replace(/[^a-z0-9\s-]/g, '')      // bỏ ký tự đặc biệt
    .trim()                             // bỏ space đầu/cuối
    .replace(/\s+/g, '-')              // space -> -
    .replace(/-+/g, '-')               // gộp nhiều - thành 1
    .replace(/^-+|-+$/g, '');          // <-- bỏ - ở đầu/cuối
}

// Delay function for loading states
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Check if code is running on client side
export function isClient(): boolean {
  return typeof window !== 'undefined'
}

// Get base URL
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  
  return 'http://localhost:3000'
}
