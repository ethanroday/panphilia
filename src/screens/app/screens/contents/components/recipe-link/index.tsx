import * as React from 'react';
import { Link } from 'react-router-dom';

interface RecipeLinkProps {
  id: string;
  title: string;
}

const RecipeLink: React.StatelessComponent<RecipeLinkProps> = ({ id, title }) =>
  <Link to={`/recipe/${id}`}>
    { title }
  </Link>

export default RecipeLink;