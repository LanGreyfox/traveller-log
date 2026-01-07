import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      // Hier definierst du deine Traveller-Variablen
      schema: z.object({
        title: z.string(),
        tl: z.number().optional(),
        credits: z.string().optional(),
        ship_day: z.string().optional(),
        quests: z.array(z.object({
          name: z.string(),
          weeks: z.number()
        })).optional()
      })  
    })
  }
})
