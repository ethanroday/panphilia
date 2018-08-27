import * as React from 'react';
import { RecipeIngredient } from '../../../../../store/recipes/state';

type IngredientProps = RecipeIngredient;

const Ingredient: React.StatelessComponent<IngredientProps> = (props) =>
  <div>
    <span><i>{props.amount.quantity} {props.amount.unit}</i></span>
    <span>{props.ingredient.name}</span>
  </div>

export default Ingredient;