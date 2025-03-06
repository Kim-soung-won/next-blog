import { z } from "zod";

export const MealDtoSchema = z.object({
  id: z.number().optional(),
  slug : z.string(),
  title: z.string(),
  image: z.string(),
  summary: z.string(),
  instructions: z.string(),
  creator: z.string(),
  creator_email: z.string(),
})

export const MealsDtoSchema = z.array(MealDtoSchema);

export const CreateMealDtoSchema = MealDtoSchema;