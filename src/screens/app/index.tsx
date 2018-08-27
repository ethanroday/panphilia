import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import initializeStore from '../store/initializeStore';
import { addRecipe } from '../store/recipes/actions';
import { RecipeState } from '../store/recipes/state';

import RecipeScreen from './screens/recipe';

import './style.css';

const recipe: RecipeState = {
  id: 'blah',
  ingredients: [
    { ingredient: { id: 'blah', name: 'nutmeg' }, amount: { quantity: 0.25, unit: 'tsp' } },
    { ingredient: { id: 'blah', name: 'cinnamon' }, amount: { quantity: 0.25, unit: 'tsp' } }
  ],
  metadata: {

  },
  steps: [
    { text: "Combine all ingredients." },
    { text: "Stir." }
  ],
  title: 'My Fav Recipe'
}

const recipe2: RecipeState = {
  id: 'blah2',
  ingredients: [
    { ingredient: { id: 'blah', name: 'nutmeg' }, amount: { quantity: 0.25, unit: 'tsp' } },
    { ingredient: { id: 'blah', name: 'pepper' }, amount: { quantity: 0.25, unit: 'tsp' } }
  ],
  metadata: {

  },
  steps: [
    { text: "Combine all ingredients." },
    { text: "Stir vigorously." }
  ],
  title: 'Another Great One'
}

const store = initializeStore();

store.dispatch(addRecipe(recipe.id, recipe));
store.dispatch(addRecipe(recipe2.id, recipe2));

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
