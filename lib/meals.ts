import sql from 'better-sqlite3';
const db = sql('meals.db');

export default async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error('test error');
  return db.prepare('SELECT * FROM meals').all();
}
