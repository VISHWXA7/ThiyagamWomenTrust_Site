import { createClient } from 'next-sanity'

import {apiVersion, dataset, projectId} from '../env'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rps9mmce',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-09',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
