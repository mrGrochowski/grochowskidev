import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const createBaseSchema = () => z.object({
  title: z.string(),
  title_pl: z.string().optional(),
  description: z.string(),
  description_pl: z.string().optional()
})

const createButtonSchema = () => z.object({
  label: z.string(),
  label_pl: z.string().optional(),
  icon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  target: z.enum(['_blank', '_self']).optional()
})

const createImageSchema = () => z.object({
  src: z.string().editor({ input: 'media' }),
  alt: z.string(),
  image_x: z.string().optional().describe('wyrownanie obrazka w osi x'),
  image_y: z.string().optional().describe('wyrownanie obrazka w osi y'),
  image_fit: z.enum(['cover', 'contain', 'fill', 'none', 'scale-down']).optional().describe('dopasowanie obrazka')
})

const createAuthorSchema = () => z.object({
  name: z.string(),
  description: z.string().optional(),
  username: z.string().optional(),
  twitter: z.string().optional(),
  to: z.string().optional(),
  avatar: createImageSchema().optional()
})

const createTestimonialSchema = () => z.object({
  quote: z.string(),
  author: createAuthorSchema()
})

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: 'index.yml',
      schema: z.object({
        title_pl: z.string().optional(),
        description_pl: z.string().optional(),
        hero: z.object({
          links: z.array(createButtonSchema()),
          images: z.array(createImageSchema())
        }),
        about: createBaseSchema(),
        experience: createBaseSchema().extend({
          items: z.array(z.object({
            date: z.date(),
            position: z.string(),
            position_pl: z.string().optional(),
            company: z.object({
              name: z.string(),
              url: z.string(),
              logo: z.string().editor({ input: 'icon' }),
              color: z.string()
            })
          }))
        }),
        testimonials: z.array(createTestimonialSchema()),
        blog: createBaseSchema(),
        faq: createBaseSchema().extend({
          categories: z.array(
            z.object({
              title: z.string().nonempty(),
              title_pl: z.string().optional(),
              questions: z.array(
                z.object({
                  label: z.string().nonempty(),
                  label_pl: z.string().optional(),
                  content: z.string().nonempty(),
                  content_pl: z.string().optional()
                })
              )
            }))
        })
      })
    }),
    projects_en: defineCollection({
      type: 'data',
      source: 'en/projects/*.yml',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        description_pl: z.string().optional(),
        image: z.string().nonempty().editor({ input: 'media' }),
        image_x: z.string().optional().describe('wyrownanie obrazka w osi x'),
        image_y: z.string().optional().describe('wyrownanie obrazka w osi y'),
        image_fit: z.enum(['cover', 'contain', 'fill', 'none', 'scale-down']).optional().describe('dopasowanie obrazka'),
        url: z.string().nonempty(),
        tags: z.array(z.string()),
        date: z.date()
      })
    }),
    projects_pl: defineCollection({
      type: 'data',
      source: 'pl/projects/*.yml',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        description_pl: z.string().optional(),
        image: z.string().nonempty().editor({ input: 'media' }),
        image_x: z.string().optional().describe('wyrownanie obrazka w osi x'),
        image_y: z.string().optional().describe('wyrownanie obrazka w osi y'),
        image_fit: z.enum(['cover', 'contain', 'fill', 'none', 'scale-down']).optional().describe('dopasowanie obrazka'),
        url: z.string().nonempty(),
        tags: z.array(z.string()),
        date: z.date()
      })
    }),
    blog_en: defineCollection({
      type: 'page',
      source: 'en/blog/*.md',
      schema: z.object({
        title_pl: z.string().optional(),
        description_pl: z.string().optional(),
        minRead: z.number(),
        date: z.date(),
        image: z.string().nonempty().editor({ input: 'media' }),
        image_x: z.string().optional().describe('wyrownanie obrazka w osi x'),
        image_y: z.string().optional().describe('wyrownanie obrazka w osi y'),
        image_fit: z.enum(['cover', 'contain', 'fill', 'none', 'scale-down']).optional().describe('dopasowanie obrazka'),
        author: createAuthorSchema()
      })
    }),
    blog_pl: defineCollection({
      type: 'page',
      source: 'pl/blog/*.md',
      schema: z.object({
        title_pl: z.string().optional(),
        description_pl: z.string().optional(),
        minRead: z.number(),
        date: z.date(),
        image: z.string().nonempty().editor({ input: 'media' }),
        image_x: z.string().optional().describe('wyrownanie obrazka w osi x'),
        image_y: z.string().optional().describe('wyrownanie obrazka w osi y'),
        image_fit: z.enum(['cover', 'contain', 'fill', 'none', 'scale-down']).optional().describe('dopasowanie obrazka'),
        author: createAuthorSchema()
      })
    }),
    pages: defineCollection({
      type: 'page',
      source: [
        { include: 'projects.yml' },
        { include: 'blog.yml' }
      ],
      schema: z.object({
        title_pl: z.string().optional(),
        description_pl: z.string().optional(),
        links: z.array(createButtonSchema())
      })
    }),
    speaking: defineCollection({
      type: 'page',
      source: 'speaking.yml',
      schema: z.object({
        links: z.array(createButtonSchema()),
        events: z.array(z.object({
          category: z.enum(['Live talk', 'Podcast', 'Conference']),
          title: z.string(),
          date: z.date(),
          location: z.string(),
          url: z.string().optional()
        }))
      })
    }),
    about: defineCollection({
      type: 'page',
      source: 'about.yml',
      schema: z.object({
        title_pl: z.string().optional(),
        description_pl: z.string().optional(),
        content: z.string().optional(),
        content_pl: z.string().optional(),
        images: z.array(createImageSchema())
      })
    }),
    navigation: defineCollection({
      type: 'data',
      source: 'navigation.yml',
      schema: z.object({
        links: z.array(z.object({
          id: z.string(),
          label: z.string(),
          label_pl: z.string().optional(),
          icon: z.string().optional(),
          to: z.string()
        }))
      })
    })
  }
})
