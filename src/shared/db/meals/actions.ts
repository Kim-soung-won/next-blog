'use server';

import { Meal } from "@/entities/meals";
import { saveMeal } from "./meals";

export async function shareMeal(meal: Meal, image: File) {
  'use server';

  const mealDto: Meal = meal;

  await saveMeal(mealDto, image);

  console.log("Shared meal:", mealDto);
}