import {defineField, defineType} from 'sanity'

export const tourPackage = defineType({
  name: 'tourPackage',
  title: 'Tour Package',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Package Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'tour',
      title: 'Tour',
      type: 'reference',
      to: [{type: 'tour'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'itineraryDay',
          title: 'Itinerary Day',

          fields: [
            defineField({
              name: 'day',
              title: 'Day',
              type: 'number',
              validation: (Rule) => Rule.required().integer().positive(),
            }),

            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'overnight',
              title: 'Overnight',
              type: 'string',
            }),
          ],

          preview: {
            select: {
              day: 'day',
              title: 'title',
              overnight: 'overnight',
            },
            prepare({day, title, overnight}) {
              return {
                title: `Day ${day}: ${title}`,
                subtitle: overnight ? `Overnight: ${overnight}` : '',
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'inclusions',
      title: 'Inclusions',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'exclusions',
      title: 'Exclusions',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      tourName: 'tour.name',
      duration: 'duration',
      media: 'coverImage',
    },
    prepare({title, tourName, duration, media}) {
      return {
        title,
        subtitle: [tourName, duration].filter(Boolean).join(' • '),
        media,
      }
    },
  },
})
