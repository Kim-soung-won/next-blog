import { z } from "zod";
import { CreateMealDtoSchema, MealDtoSchema, MealsDtoSchema } from "./meals.contract";

export type MealDto = z.infer<typeof MealDtoSchema>;
export type MealsDto = z.infer<typeof MealsDtoSchema>;
export type CreateMealDto = z.infer<typeof CreateMealDtoSchema>;