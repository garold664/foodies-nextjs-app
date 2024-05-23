import sql from 'better-sqlite3';
const db = sql('meals.db');

export type Meal = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  image: string;
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
