import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jaineelmodi.com',
  description: 'Portfolio website of Jaineel Modi - Software Developer and AI Enthusiast',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
