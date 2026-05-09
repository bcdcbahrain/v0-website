import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: {
    default: 'BCDC - Busaiteen Chat Dialogue Centre',
    template: '%s | BCDC',
  },
  description: 'Busaiteen Chat Dialogue Centre - Conveying the correct creed of faith to seekers of truth worldwide. Based in the Kingdom of Bahrain.',
  keywords: ['Islam', 'Dialogue', 'Guidance', 'Bahrain', 'BCDC', 'Islamic Resources', 'Chat', 'Faith'],
  authors: [{ name: 'BCDC Bahrain' }],
  creator: 'BCDC Bahrain',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bcdc.vercel.app',
    siteName: 'BCDC - Busaiteen Chat Dialogue Centre',
    title: 'BCDC - Busaiteen Chat Dialogue Centre',
    description: 'Conveying the correct creed of faith to seekers of truth worldwide.',
    images: [
      {
        url: '/images/bcdc-logo.jpg',
        width: 800,
        height: 800,
        alt: 'BCDC Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BCDC - Busaiteen Chat Dialogue Centre',
    description: 'Conveying the correct creed of faith to seekers of truth worldwide.',
    images: ['/images/bcdc-logo.jpg'],
  },
  icons: {
    icon: '/images/bcdc-logo.jpg',
    apple: '/images/bcdc-logo.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e40af',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansArabic.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
