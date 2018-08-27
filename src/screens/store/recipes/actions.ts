import { createAction } from 'typesafe-actions';
import { RecipeState } from './state';

export const addRecipe = createAction('recipes/ADD', resolve => {
  return (id: string, recipe: Exclude<RecipeState, 'id'>) => resolve({ id, ...recipe } as RecipeState);
});