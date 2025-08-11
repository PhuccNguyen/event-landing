import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'TingNect - Build for Billions | 16/8/2025 | Ho Chi Minh City',
  description: 'TingNect - Build for Billions aspires to become a premier platform that unites developers, entrepreneurs, investors, and tech enthusiasts in shaping a sustainable Web3 ecosystem.',
  keywords: 'TingNect, Web3, Blockchain, Ho Chi Minh City, Event, Conference, Ting Foundation',
  authors: [{ name: 'Ting Foundation' }],
  creator: 'Ting Foundation',
  publisher: 'Ting Foundation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'TingNect Event',
    title: 'TingNect - Build for Billions',
    description: 'Premier Web3 event in Ho Chi Minh City - August 16, 2025',
    images: [
      {
        url: '/images/logos/tingnect-logo.png',
        width: 1200,
        height: 630,
        alt: 'TingNect - Build for Billions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TingNect',
    creator: '@TingNect',
    title: 'TingNect - Build for Billions',
    description: 'Premier Web3 event in Ho Chi Minh City - August 16, 2025',
    images: ['/images/logos/tingnect-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/logos/tingnect-logo.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
