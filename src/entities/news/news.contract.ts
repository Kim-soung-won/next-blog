import { z } from "zod"

export const NewsSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  image: z.string(),
  date: z.string(),
  content: z.string(),
})

export const NewsesSchema = z.array(NewsSchema)