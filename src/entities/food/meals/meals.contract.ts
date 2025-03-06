import { z } from "zod";

export const MealSchema = z.object({
  id: z.number().optional(),
  slug : z.string(),
  title: z.string(),
  image: z.string(),
  summary: z.string(),
  instructions: z.string(),
  creator: z.string(),
  creator_email: z.string(),
})

export const MealsSchema = z.array(MealSchema);