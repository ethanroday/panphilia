import * as React from 'react';
import { connect } from 'react-redux';

import Contents from './components/contents';

import { RootState } from '../../../store/initializeStore';

import { getRecipeIds, getRecipeMetadataById } from '../../../store/recipes/selectors';
import { RecipeMetadata } from '../../../store/recipes/state';

interface ContentsPropsFromState {
  recipeMetadata: Array<{
    id: string,
    metadata: RecipeMetadata
  }>
}

const ContentsScreen: React.StatelessComponent<ContentsPropsFromState> = ({ recipeMetadata }) =>
  <Contents recipeList={recipeMetadata.map(({ id, metadata }) => ({ id, title: metadata.title }))} />

const connected = connect(
  (state: RootState) => ({
    recipeMetadata: getRecipeIds(state).map(id => ({
      id, metadata: getRecipeMetadataById(state, id)
    }))
  })
);

export default connected(ContentsScreen);