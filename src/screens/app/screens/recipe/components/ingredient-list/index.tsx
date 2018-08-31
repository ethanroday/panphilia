import * as React from 'react';

import { ResolvedRecipeIngredient } from '../../../../../store/recipes/state';

import Ingredient from '../ingredient';

interface IngredientListProps {
  ingredients: ResolvedRecipeIngredient[];
}

const IngredientList: React.StatelessComponent<IngredientListProps> = ({ ingredients }) =>
  <ul>
    {
      ingredients.map(ingredient =>
        <li key={ingredient.ingredientId}>
          <Ingredient {...ingredient} />
        </li>
      )
    }
  </ul>

export default IngredientList;