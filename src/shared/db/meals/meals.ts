import db from "../db";
import { MealsSchema, Meal } from '@/entities/meals';

export async function getMeals(): Promise<Meal[]> {
  try {
    const result = await db.query('SELECT * FROM meals');
    const validated = MealsSchema.parse(result.rows);
    return validated;
  } catch (error) {
    console.error('데이터를 불러오는 데 실패했습니다:', error);
    return [];
  }
}