import { z } from "zod";
import { MealSchema, MealsSchema } from "./meals.contract";

export type Meal = z.infer<typeof MealSchema>;
export type Meals = z.infer<typeof MealsSchema>;