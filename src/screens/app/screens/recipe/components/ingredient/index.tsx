import * as React from 'react';

import { ResolvedRecipeIngredient } from '../../../../../store/recipes/state';

const Ingredient: React.StatelessComponent<ResolvedRecipeIngredient> = (props) =>
  <div>
    <span><i>{props.amount.quantity} {props.amount.unit}</i> {props.ingredientName}</span>
  </div>

export default Ingredient;