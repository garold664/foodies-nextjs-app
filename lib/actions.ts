'use server';

import { redirect } from 'next/navigation';
import { Meal, saveMeal } from './meals';

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  console.log(meal);

  await saveMeal(meal as Omit<Meal, 'id'>);
  redirect('/meals');
}
