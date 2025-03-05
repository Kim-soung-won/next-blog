'use server';

import { Meal } from "@/entities/meals";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

export async function shareMeal(meal: Meal, image: File) {
  'use server';

  const mealDto: Meal = meal;

  await saveMeal(mealDto, image);
  redirect("/meals");
}