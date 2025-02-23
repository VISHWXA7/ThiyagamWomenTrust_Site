import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Thiyagam Women Trust',
  description: 'Thiyagam Women dedicated to empowering physically challenged rural women.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <main className="relative overflow-hidden">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
