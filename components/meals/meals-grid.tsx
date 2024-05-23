import MealItem from './meal-item';
import styles from './meals-grid.module.css';

import { Meal } from '@/lib/meals';

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
