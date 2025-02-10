export default {
    name: 'annualReport',
    title: 'Annual Report',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'pdf',
        title: 'PDF File',
        type: 'file',
        options: {
          accept: '.pdf',
        },
      },
    ],
  };
  