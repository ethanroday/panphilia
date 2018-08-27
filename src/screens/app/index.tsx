import * as React from 'react';
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

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Panphilia</h1>
        </header>
        <RecipeScreen recipe={recipe} />
      </div>
    );
  }
}

export default App;
