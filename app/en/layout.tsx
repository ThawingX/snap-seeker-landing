import { Inter } from 'next/font/google'
import '../globals.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SnapSeeker - Get Your MVP Right. Find Your PMF Fast.',
  description: 'SnapSeeker helps you validate your product ideas quickly and find product-market fit faster with powerful analytics and user insights.',
  keywords: ['MVP', 'Product Market Fit', 'Analytics', 'User Insights', 'Product Validation'],
  authors: [{ name: 'SnapSeeker Team' }],
  openGraph: {
    title: 'SnapSeeker - Get Your MVP Right. Find Your PMF Fast.',
    description: 'SnapSeeker helps you validate your product ideas quickly and find product-market fit faster.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SnapSeeker - Get Your MVP Right. Find Your PMF Fast.',
    description: 'SnapSeeker helps you validate your product ideas quickly and find product-market fit faster.',
  },
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {children}
    </div>
  )
}