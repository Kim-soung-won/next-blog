import db from "../db";
import { MealsSchema, Meal, MealSchema } from '@/entities/meals';

export async function getMeals(): Promise<Meal[]> {
  try {
    const result = await db.query('SELECT * FROM meals');
    const validated = MealsSchema.parse(result.rows);
    return validated;
  } catch (error) {
    console.error('데이터를 불러오는 데 실패했습니다:', error);
  }
}

export async function getMeal(id: number): Promise<Meal> {
  try {
    const result = await db.query('SELECT * FROM meals WHERE id = $1', [id]);
    const validated = MealSchema.parse(result.rows[0]);
    return validated;
  } catch (error) {
    console.error('데이터를 불러오는 데 실패했습니다:', error);
  }
}