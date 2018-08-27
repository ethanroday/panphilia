import * as React from 'react';
import { RecipeState } from '../../../../../store/recipes/state';
import Ingredient from '../ingredient';

interface RecipeProps {
  recipe: RecipeState;
}

const Recipe: React.StatelessComponent<RecipeProps> = (props) =>
  <div>
    <ul>
      {
        props.recipe.ingredients.map(ingredient => 
          <li key={ingredient.ingredient.id}>
            <Ingredient {...ingredient} />
          </li>
        )
      }
    </ul>
    <ol>
      {
        props.recipe.steps.map((step, index) =>
          <li key={index}>{step.text}</li>
        )
      }
    </ol>
  </div>

export default Recipe;