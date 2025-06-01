// schemas/homepage.ts

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link1',
      title: 'Link1',
      type: 'string',
    }),
    defineField({
      name: 'link2',
      title: 'Link2',
      type: 'string',
    }),
    defineField({
      name: 'link3',
      title: 'Link3',
      type: 'string',
    }),
    defineField({
      name: 'link4',
      title: 'Link4',
      type: 'string',
    }),
    defineField({
      name: 'href1',
      title: 'Href1',
      type: 'string',
    }),
    defineField({
      name: 'href2',
      title: 'Href2',
      type: 'string',
    }),
    defineField({
      name: 'href3',
      title: 'Href3',
      type: 'string',
    }),
    defineField({
      name: 'href4',
      title: 'Href4',
      type: 'string',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubTitle',
      title: 'Hero Sub Title',
      type: 'string',
    }),
  ],
})
