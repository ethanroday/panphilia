import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import initializeStore from '../store/initializeStore';

import { addIngredient } from '../store/ingredients/actions';
import { addRecipe } from '../store/recipes/actions';
import { RecipeState } from '../store/recipes/state';

import RecipeScreen from './screens/recipe';

import './style.css';

const ingredients = [
  { id: 'nutmeg', name: 'nutmeg' },
  { id: 'cinnamon', name: 'cinnamon' },
  { id: 'pepper', name: 'pepper' }
];

const recipes: RecipeState[] = [
  {
    id: 'blah',
    ingredients: [
      { ingredientId: 'nutmeg', amount: { quantity: 0.25, unit: 'tsp' } },
      { ingredientId: 'cinnamon', amount: { quantity: 0.25, unit: 'tsp' } }
    ],
    metadata: {
  
    },
    steps: [
      { text: "Combine all ingredients." },
      { text: "Stir." }
    ],
    title: 'My Fav Recipe'
  },
  {
    id: 'blah2',
    ingredients: [
      { ingredientId: 'nutmeg', amount: { quantity: 0.25, unit: 'tsp' } },
      { ingredientId: 'pepper', amount: { quantity: 0.25, unit: 'tsp' } }
    ],
    metadata: {
  
    },
    steps: [
      { text: "Combine all ingredients." },
      { text: "Stir vigorously." }
    ],
    title: 'Another Great One'
  }
];

const store = initializeStore();

recipes.forEach(recipe => {
  store.dispatch(addRecipe(recipe.id, recipe));
});

ingredients.forEach(ingredient => {
  store.dispatch(addIngredient(ingredient.id, ingredient.name));
});

const RenderRecipeScreen = (props: any) => <RecipeScreen recipeId={props.match.params.id} />

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Panphilia</h1>
            </header>
            <Switch>
              <Route path="/recipe/:id" component={RenderRecipeScreen}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
