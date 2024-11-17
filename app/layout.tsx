import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'WisenUp',
  description: "Life coaching and mentoring chatbot that helps.",
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}