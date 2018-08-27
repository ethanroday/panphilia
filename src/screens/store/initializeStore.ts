import { combineReducers, createStore } from "redux";
import { StateType } from "typesafe-actions";

import ingredientsReducer, { Action as IngredientsAction } from "./ingredients/reducers";
import recipesReducer, { Action as RecipesAction } from "./recipes/reducers";

export type RootState = StateType<{
  ingredients: typeof ingredientsReducer,
  recipes: typeof recipesReducer
}>;

export type RootAction = IngredientsAction | RecipesAction;

const initializeStore = () => {

  const rootReducer = combineReducers<RootState, RootAction>({
    ingredients: ingredientsReducer,
    recipes: recipesReducer
  });

  const store = createStore(rootReducer);

  return store;
}

export default initializeStore;