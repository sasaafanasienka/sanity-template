export const mainPage = {
  name: 'MainPage',
  title: 'Main Page',
  type: 'document',
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'buttons',
      title: 'buttons',
      type: 'array',
      of: [
        {
          name: 'ButtonText',
          type: 'document',
          title: 'Button Text',
          fields: [
            { name: 'Text', type: 'string', title: 'Text' },
            { name: 'Link', type: 'string', title: 'Link' },
          ]
        }
      ]
    },
    {
      name: 'mainimage',
      title: 'Main Image',
      type: 'image',
    },
    {
      name: 'lottie',
      title: 'Lottie',
      type: 'file'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
}
