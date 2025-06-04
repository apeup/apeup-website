import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sectionFeaturesWithIcons',
  title: 'Section Features With Icons',
  type: 'document',
  fields: [
    // Main Title & Descriptions
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title2',
      title: 'Main Title 2',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description1',
      title: 'Description 1',
      type: 'text',
    }),
    defineField({
      name: 'description2',
      title: 'Description 2',
      type: 'text',
    }),
    defineField({
      name: 'image1',
      title: 'Image 1',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),

    // Feature Icons as Array
    defineField({
      name: 'features',
      title: 'Feature Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'icon',
            },
          },
        },
      ],
    }),
  ],
})
