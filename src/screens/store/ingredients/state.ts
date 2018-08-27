export interface Ingredient {
  id: string;
  name: string;
}

export type Ingredients = {
  [id: string]: Ingredient;
}

type IngredientsState = {
  ingredients: Ingredients;
}

export default IngredientsState;