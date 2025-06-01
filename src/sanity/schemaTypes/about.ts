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

    // Images from both schemas
    defineField({
      name: 'lucky',
      title: 'Lucky',
      type: 'image',
      options: { hotspot: true },
    }),
    // Images from both schemas
    defineField({
      name: 'spin',
      title: 'Spin',
      type: 'image',
      options: { hotspot: true },
    }),
    // Images from both schemas
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
      name: 'image3',
      title: 'Image 3',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'image4',
      title: 'Image 4',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'image5',
      title: 'Image 5',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'image6',
      title: 'Image 6',
      type: 'image',
      options: { hotspot: true },
    }),

    // Icon + Title + Description 1
    defineField({
      name: 'icon1',
      title: 'Icon 1',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'iconTitle1',
      title: 'Icon Title 1',
      type: 'string',
    }),
    defineField({
      name: 'iconDescription1',
      title: 'Icon Description 1',
      type: 'text',
    }),

    // Icon + Title + Description 2
    defineField({
      name: 'icon2',
      title: 'Icon 2',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'iconTitle2',
      title: 'Icon Title 2',
      type: 'string',
    }),
    defineField({
      name: 'iconDescription2',
      title: 'Icon Description 2',
      type: 'text',
    }),

    // Icon + Title + Description 3
    defineField({
      name: 'icon3',
      title: 'Icon 3',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'iconTitle3',
      title: 'Icon Title 3',
      type: 'string',
    }),
    defineField({
      name: 'iconDescription3',
      title: 'Icon Description 3',
      type: 'text',
    }),

    // Icon + Title + Description 4
    defineField({
      name: 'icon4',
      title: 'Icon 4',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'iconTitle4',
      title: 'Icon Title 4',
      type: 'string',
    }),
    defineField({
      name: 'iconDescription4',
      title: 'Icon Description 4',
      type: 'text',
    }),
  ],
})
