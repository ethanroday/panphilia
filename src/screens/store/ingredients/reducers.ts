import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import * as actions from './actions';
import IngredientsState from './state';
export type Action = ActionType<typeof actions>;

const ingredientsInitialState = {
  ingredients: {}
};

const ingredientsReducer: Reducer<IngredientsState, Action> = (state = ingredientsInitialState, action) => {
  switch(action.type) {
    case getType(actions.addIngredient):
      return {
        ingredients: {
          ...state.ingredients,
          [action.payload.id]: action.payload
        }
      }
  }
}

export default ingredientsReducer;