import { z } from "zod";

export const postSchema = z.object({
  title: z.string(),
  content: z.string(),
  image: z.string(),
  userId: z.number(),
})

