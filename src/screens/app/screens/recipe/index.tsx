import * as React from 'react';
import { RecipeState } from '../../../store/recipes/state';
import Recipe from './components/recipe';

interface RecipeScreenProps {
  recipe: RecipeState
}

const RecipeScreen: React.StatelessComponent<RecipeScreenProps> = (props) => <Recipe recipe={props.recipe}/>

export default RecipeScreen;