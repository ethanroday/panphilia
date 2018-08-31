import * as React from 'react';

import { RecipeStep } from "../../../../../store/recipes/state";

interface RecipeStepsProps {
  steps: RecipeStep[];
}

const RecipeSteps: React.StatelessComponent<RecipeStepsProps> = ({steps}) =>
  <ol>
    {
      steps.map((step, index) =>
        <li key={index}>{step.text}</li>
      )
    }
  </ol>

export default RecipeSteps;