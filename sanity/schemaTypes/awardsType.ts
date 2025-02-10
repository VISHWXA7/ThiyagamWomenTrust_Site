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
        of: [{ type: 'image' }],
      },
    ],
  };
  