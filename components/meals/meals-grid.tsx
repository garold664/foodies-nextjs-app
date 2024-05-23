import MealItem from './meal-item';
import styles from './meals-grid.module.css';

export type Meal = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  image: string;
  creator: string;
  instructions: string;
};

export default function MealsGrid({ meals }: { meals: Meal[] }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
