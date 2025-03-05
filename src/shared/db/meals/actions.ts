'use server';

import { Meal } from "@/entities/meals";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function shareMeal(meal: Meal, image: File) {
  const mealDto: Meal = meal;

  await saveMeal(mealDto, image);

  // 해당 경로의 캐시 새로고침, layout : 하위 페이지들도 함께 캐싱 새로고침
  revalidatePath("/meals", "layout");
  redirect("/meals");
}