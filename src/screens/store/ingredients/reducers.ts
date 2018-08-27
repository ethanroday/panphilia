import { combineReducers, Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import * as actions from './actions';
import IngredientsState, { Ingredients } from './state';
export type Action = ActionType<typeof actions>;

const ingredientsReducer: Reducer<Ingredients, Action> = (state = {}, action) => {
  switch(action.type) {
    case getType(actions.addIngredient):
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    default:
      return state;
  }
}

export default combineReducers<IngredientsState, Action>({
  ingredients: ingredientsReducer
});