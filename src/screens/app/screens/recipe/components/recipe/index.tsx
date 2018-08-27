import * as React from 'react';
import { RecipeState } from '../../../../../store/recipes/state';
import Ingredient from '../ingredient';

type RecipeProps = {
  recipe: RecipeState;
}

const Recipe: React.StatelessComponent<RecipeProps> = (props) =>
  <div>
    <ul>
      {
        props.recipe.ingredients.map(ingredient => 
          <li>
            <Ingredient {...ingredient} />
          </li>
        )
      }
    </ul>
    <ol>
      {
        props.recipe.steps.map(step =>
          <li>{step.text}</li>
        )
      }
    </ol>
  </div>

export default Recipe;