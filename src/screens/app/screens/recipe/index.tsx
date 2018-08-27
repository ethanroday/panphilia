import * as React from 'react';
import { RecipeState } from '../../../store/recipes/state';
import Recipe from './components/recipe';

const RecipeScreen: React.StatelessComponent<RecipeState> = (props) => <Recipe recipe={props}/>

export default RecipeScreen;