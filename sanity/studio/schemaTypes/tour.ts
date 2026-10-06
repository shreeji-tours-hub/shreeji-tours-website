import {defineField, defineType} from 'sanity'

export const tour = defineType({
  name: 'tour',
  title: 'Tour',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Tour Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
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
  ],

  preview: {
    select: {
      title: 'name',
      media: 'coverImage',
    },
  },
})
