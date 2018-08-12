import { Ingredient } from "../ingredients/state";

interface Amount {
  quantity: number;
  unit: string;
}

interface RecipeIngredient {
  amount: Amount;
  ingredient: Ingredient;
  note?: string;
}

interface RecipeStep {
  text: string;
}

interface Recipe {
  id: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
}

type RecipesState = {
  recipes: {
    [id: string]: Recipe;
  }
}

export default RecipesState;