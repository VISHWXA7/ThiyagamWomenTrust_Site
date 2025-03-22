import { type SchemaTypeDefinition } from 'sanity'

import galleryType from './galleryType'
import awardsType from './awardsType'
import annualReportType from './annualReportType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryType, awardsType, annualReportType],
}
