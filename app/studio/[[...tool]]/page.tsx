import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import type { Metadata } from 'next'

export const dynamic = 'force-static'

// Explicitly define metadata
export const metadata: Metadata = {
  title: 'Sanity Studio',
  description: 'Sanity Studio for managing content',
  viewport: { width: 'device-width', initialScale: 1, viewportFit: 'cover' },
}

export default function StudioPage() {
  return <NextStudio config={config} />
}
