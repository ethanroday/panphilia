import { createAction } from 'typesafe-actions';
import { Ingredient } from './state';

export const addIngredient = createAction('ingredients/ADD', resolve => {
  return (id: string, name: string) => resolve({ id, name } as Ingredient);
});