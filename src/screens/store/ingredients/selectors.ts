import { RootState } from '../initializeStore';

export const getIngredientById = (state: RootState, id: string) => state.ingredients.ingredients[id];