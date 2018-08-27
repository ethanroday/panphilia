export interface Ingredient {
  id: string;
  name: string;
}

export interface Ingredients {
  [id: string]: Ingredient;
}

interface IngredientsState {
  ingredients: Ingredients;
}

export default IngredientsState;