import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('gallery').title('Galleries'),
      S.documentTypeListItem('awards').title('Awards'),
      S.documentTypeListItem('annualReport').title('Annual-Reports'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['gallery', 'awards', 'annualReport'].includes(item.getId()!),
      ),
    ])
