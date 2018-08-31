import * as React from 'react';

import IngredientList from '../ingredient-list';
import RecipeSteps from '../recipe-steps';

import { ResolvedRecipeState } from '../../../../../store/recipes/state';

interface RecipeProps {
  recipe: ResolvedRecipeState;
}

const Recipe: React.StatelessComponent<RecipeProps> = ({ recipe }) =>
  <div>
    <h2>{recipe.metadata.title}</h2>
    <IngredientList ingredients={recipe.ingredients} />
    <RecipeSteps steps={recipe.steps} />
  </div>

export default Recipe;