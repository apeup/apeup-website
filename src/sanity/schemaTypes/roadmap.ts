import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'roadmap',
    title: 'Roadmap',
    type: 'document',
    fields: [
        defineField({
            name: 'title1',
            title: 'Title 1',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'title2',
            title: 'Title 2',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
        }),
        // Icon 1
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
            name: 'iconSubtitle1',
            title: 'Icon Subtitle 1',
            type: 'text',
        }),
        // Icon 2
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
            name: 'iconSubtitle2',
            title: 'Icon Subtitle 2',
            type: 'text',
        }),
        // Icon 3
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
            name: 'iconSubtitle3',
            title: 'Icon Subtitle 3',
            type: 'text',
        }),
        // Icon 4
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
            name: 'iconSubtitle4',
            title: 'Icon Subtitle 4',
            type: 'text',
        }),
        defineField({ name: 'league1', title: 'League 1', type: 'string' }),
        defineField({ name: 'league2', title: 'League 2', type: 'string' }),
        defineField({ name: 'league3', title: 'League 3', type: 'string' }),
        defineField({ name: 'league4', title: 'League 4', type: 'string' }),
        defineField({ name: 'league5', title: 'League 5', type: 'string' }),
        defineField({ name: 'league6', title: 'League 6', type: 'string' }),
        defineField({ name: 'league7', title: 'League 7', type: 'string' }),
        defineField({ name: 'league8', title: 'League 8', type: 'string' }),
        defineField({ name: 'league9', title: 'League 9', type: 'string' }),
        defineField({ name: 'mau1', title: 'MAU 1', type: 'string' }),
        defineField({ name: 'mau2', title: 'MAU 2', type: 'string' }),
        defineField({ name: 'mau3', title: 'MAU 3', type: 'string' }),
        defineField({ name: 'mau4', title: 'MAU 4', type: 'string' }),
        defineField({ name: 'mau5', title: 'MAU 5', type: 'string' }),
        defineField({ name: 'mau6', title: 'MAU 6', type: 'string' }),

    ],
})
