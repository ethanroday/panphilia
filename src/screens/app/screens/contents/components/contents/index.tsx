import * as React from 'react';
import RecipeLink from '../recipe-link';

interface ContentsProps {
  recipeList: Array<{
    id: string;
    title: string;
  }>;
}

const Contents: React.StatelessComponent<ContentsProps> = ({ recipeList }) =>
  <div>
    <h1>Table of Contents</h1>
    <ul>
      {
        recipeList.map(recipe => <li key={recipe.id}><RecipeLink {...recipe} /></li>)
      }
    </ul>
  </div>

export default Contents;