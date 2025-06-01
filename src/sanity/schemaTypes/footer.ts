import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'footerSection',
  title: 'Footer Section',
  type: 'document',
  fields: [
    // Logo
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),

    // Link 1
    defineField({
      name: 'linkTitle1',
      title: 'Link Title 1',
      type: 'string',
    }),
    defineField({
      name: 'linkUrl1',
      title: 'Link URL 1',
      type: 'string',
    }),

    // Link 2
    defineField({
      name: 'linkTitle2',
      title: 'Link Title 2',
      type: 'string',
    }),
    defineField({
      name: 'linkUrl2',
      title: 'Link URL 2',
      type: 'string',
    }),

    // Link 3
    defineField({
      name: 'linkTitle3',
      title: 'Link Title 3',
      type: 'string',
    }),
    defineField({
      name: 'linkUrl3',
      title: 'Link URL 3',
      type: 'string',
    }),

    // Link 4
    defineField({
      name: 'linkTitle4',
      title: 'Link Title 4',
      type: 'string',
    }),
    defineField({
      name: 'linkUrl4',
      title: 'Link URL 4',
      type: 'string',
    }),

    // Button Text
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),

    // Copyright
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
    }),
  ],
})
