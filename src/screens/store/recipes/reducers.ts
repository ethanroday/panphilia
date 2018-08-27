import { combineReducers, Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import * as actions from './actions';
import RecipesState, { Recipes } from './state';
export type Action = ActionType<typeof actions>;

const recipesReducer: Reducer<Recipes, Action> = (state = {}, action) => {
  switch(action.type) {
    case getType(actions.addRecipe):
      return {
        ...state,
        [action.payload.id]: action.payload
      }
  }
}

export default combineReducers<RecipesState, Action>({
  recipes: recipesReducer
});