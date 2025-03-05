import fs from 'node:fs';

import db from "../db";
import { MealsDtoSchema, MealDto, MealDtoSchema } from '@/shared/api/meals';
import slugify from "slugify";
import xss from "xss";
import { MealSchema } from '@/entities/meals/meals.contract';

export async function getMeals(): Promise<MealDto[]> {
  try {
    const result = await db.query('SELECT * FROM meals');
    const validated = MealsDtoSchema.parse(result.rows);
    return validated;
  } catch (error) {
    console.error('데이터를 불러오는 데 실패했습니다:', error);
  }
}

export async function getMeal(id: number): Promise<MealDto> {
  try {
    const result = await db.query('SELECT * FROM meals WHERE id = $1', [id]);
    const validated = MealDtoSchema.parse(result.rows[0]);
    return validated;
  } catch (error) {
    console.error('데이터를 불러오는 데 실패했습니다:', error);
  }
}

export async function saveMeal(meal: MealDto, image: File) {
  // slugify는 문자열을 URL에 사용할 수 있는 형태로 변환한다. 예를 들어 Hello World -> hello-world로 변환하여 url에 사용될 수 있게 값을 변환한다.
  meal.slug = slugify(meal.title, { lower: true });
  // xss를 통해 HTML 태그 등 위험한 속성을 필터링한다. 예를 들어 <script />태그와 같이 위험한 태그를 필터링한다.
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.split('.').pop();
  const filename = `${meal.slug}.${extension}`;

  const stream  = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      console.error('이미지를 저장하는 데 실패했습니다:', error);
    }
  });

  meal.image = `/images/${filename}`;

  try {
    const mealDto = MealSchema.parse(meal);
    await db.query(
      'INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [mealDto.title, mealDto.summary, mealDto.instructions, mealDto.creator, mealDto.creator_email, mealDto.image, mealDto.slug]
    );
    console.log('Shared meal:', mealDto);
  } catch (error) {
    console.error('데이터를 저장하는 데 실패했습니다:', error);
  }
}