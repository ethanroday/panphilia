export interface Amount {
  quantity: number;
  unit: string;
}

export interface RecipeIngredient {
  amount: Amount;
  ingredientId: string;
  note?: string;
}

export interface ResolvedRecipeIngredient extends RecipeIngredient {
  ingredientName: string;
}
export interface RecipeStep {
  text: string;
}

export interface RecipeMetadata {
  title: string;
  yield?: Amount;
  activeTimeMinutes?: number;
  totalTimeMinutes?: number;
  notes?: string[];
}

export interface RecipeState {
  id: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  metadata: RecipeMetadata;
}

export interface ResolvedRecipeState extends RecipeState {
  ingredients: ResolvedRecipeIngredient[];
}

export interface Recipes {
  [id: string]: RecipeState;
}

interface RecipesState {
  recipes: Recipes;
}

export default RecipesState;