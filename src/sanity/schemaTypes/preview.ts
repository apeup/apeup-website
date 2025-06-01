import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'preview',
  title: 'Preview',
  type: 'document',
  fields: [
    defineField({
      name: 'point1',
      title: 'Point1',
      type: 'string',
    }),
    defineField({
      name: 'point2',
      title: 'Point2',
      type: 'string',
    }),
    defineField({
      name: 'point3',
      title: 'Point3',
      type: 'string',
    }),
    defineField({
      name: 'point4',
      title: 'Point4',
      type: 'string',
    }),
    defineField({
      name: 'point5',
      title: 'Point5',
      type: 'string',
    }),
    defineField({
      name: 'Title',
      title: 'Title',
      type: 'string',
    }), {
      name: 'video',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*'
      },
      validation: Rule => Rule.required()
    },
  ],
})
