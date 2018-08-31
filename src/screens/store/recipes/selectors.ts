import { RootState } from '../initializeStore';

import { getIngredientById } from '../ingredients/selectors';
import { RecipeIngredient } from './state';

export const getRecipeIds = (state: RootState) => Object.keys(state.recipes.recipes);

export const getRecipeById = (state: RootState, id: string) => state.recipes.recipes[id];

export const getRecipeMetadataById = (state: RootState, id: string) => getRecipeById(state, id).metadata;

export const resolveRecipeIngredients = (state: RootState, recipeIngredients: RecipeIngredient[]) =>
  recipeIngredients.map(recipeIngredient => ({
    ...recipeIngredient,
    ingredientName: getIngredientById(state, recipeIngredient.ingredientId).name
  }));

export const getResolvedRecipeById = (state: RootState, id: string) => {
  const recipe = getRecipeById(state, id);
  return {
    ...recipe,
    ingredients: resolveRecipeIngredients(state, recipe.ingredients)
  }
}