export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'year',
              title: 'Year',
              type: 'number',
            },
          ],
        },
      ],
    },
  ],
};
