import { Ingredient } from "../ingredients/state";

export interface Amount {
  quantity: number;
  unit: string;
}

export interface RecipeIngredient {
  amount: Amount;
  ingredient: Ingredient;
  note?: string;
}

export interface RecipeStep {
  text: string;
}

export interface RecipeMetadata {
  yield?: Amount;
  activeTimeMinutes?: number;
  totalTimeMinutes?: number;
}

export interface RecipeState {
  id: string;
  title: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  metadata: RecipeMetadata;
}

export interface Recipes {
  [id: string]: RecipeState;
}

type RecipesState = {
  recipes: Recipes;
}

export default RecipesState;