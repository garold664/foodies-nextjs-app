import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { uploadImage } from './cloudinary';
const db = sql('meals.db');

export type Meal = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  image: string | File;
  creator: string;
  creator_email: string;
  instructions: string;
};

export default async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error('test error');
  return db.prepare('SELECT * FROM meals').all() as Meal[];
}

export function getMeal(slug: string) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal;
}

export async function saveMeal(meal: Omit<Meal, 'id'>) {
  meal.slug = slugify(meal.title, { lower: true });

  meal.instructions = xss(meal.instructions);

  // const extension = (meal.image as File).name.split('.').pop();
  // const fileName = `${meal.slug}${Date.now().toString()}.${extension}`;

  // const stream = fs.createWriteStream(`public/images/${fileName}`);

  // const bufferedImage = await (meal.image as File).arrayBuffer();

  // stream.write(Buffer.from(bufferedImage), (error: any) => {
  //   if (error) {
  //     throw new Error(error);
  //   }
  // });

  // meal.image = `/images/${fileName}`;

  meal.image = await uploadImage(meal.image as File);
  console.log(meal.image);

  db.prepare(
    `
    INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) 
    VALUES (
      @title, @slug, @image, @summary, @instructions, @creator, @creator_email
    )`
  ).run(meal);
}
