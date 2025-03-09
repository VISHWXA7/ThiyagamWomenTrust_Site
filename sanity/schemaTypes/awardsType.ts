export default {
  name: 'awards',
  title: 'Awards',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'awardImages',
      title: 'Award Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image' },
            { name: 'description', title: 'Description', type: 'string' },
            { name: 'year', title: 'Year', type: 'number' },
          ],
        },
      ],
    },
  ],
};