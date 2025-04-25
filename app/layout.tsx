import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { StickyNav } from '@/components/sticky-nav'
import { BackToTop } from '@/components/back-to-top'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zenplate.ai - AI-Powered Wellness Platform',
  description: 'Transform your wellness journey with personalized AI recommendations and holistic guidance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StickyNav />
        {children}
        <BackToTop />
        <Toaster />
      </body>
    </html>
  )
}
