import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store/initializeStore';

import { getResolvedRecipeById } from '../../../store/recipes/selectors';
import { ResolvedRecipeState } from '../../../store/recipes/state';

import Recipe from './components/recipe';

interface RecipeScreenProps {
  recipeId: string;
}

interface RecipeScreenPropsFromState {
  recipe: ResolvedRecipeState;
}

const RecipeScreen: React.StatelessComponent<RecipeScreenProps & RecipeScreenPropsFromState> = (props) => <Recipe recipe={props.recipe}/>

const connected = connect(
  (state: RootState, ownProps: RecipeScreenProps) => ({
    recipe: getResolvedRecipeById(state, ownProps.recipeId)
  })
)

export default connected(RecipeScreen);