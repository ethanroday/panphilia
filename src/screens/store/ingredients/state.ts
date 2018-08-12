export interface Ingredient {
  id: string;
  name: string;
}

type IngredientsState = {
  ingredients: {
    [id: string]: Ingredient;
  }
}

export default IngredientsState;