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

interface RecipeMetadata {
  yield?: Amount;
  activeTimeMinutes?: number;
  totalTimeMinutes?: number;
}

interface Recipe {
  id: string;
  title: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  metadata: RecipeMetadata;
}

export interface Recipes {
  [id: string]: Recipe;
}

type RecipesState = {
  recipes: Recipes;
}

export default RecipesState;