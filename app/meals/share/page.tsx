'use client';

import { Meal } from '@/lib/meals';

import ImagePicker from '../image-picker';
import styles from './page.module.css';
import { shareMeal } from '@/lib/actions';
import MealsFormSubmit from '@/components/meals/meals-form-submit';
// import { useActionState } from 'react';
import { useFormState } from 'react-dom';

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: '' });

  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={formAction}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={styles.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}

// The error you're seeing is related to the useActionState hook from the react library. This hook is used to manage state in a form, and it expects two arguments: an action function and an initial state.

// The error message is telling us that the action function you're passing to useActionState does not match the expected signature. The action function should take the current state and a payload (in this case, FormData), and return a new state or a promise that resolves to a new state.

// The shareMeal function you're passing to useActionState is defined as (prevState: { message: string | null }, formData: FormData) => Promise<{ message: string }>, which is not compatible with the expected signature.

// The expected action function should be (prevState: { message: string }) => { message: string } | Promise<{ message: string }>. Notice that the expected function takes only one argument (prevState), whereas the shareMeal function takes two arguments (prevState and formData).
