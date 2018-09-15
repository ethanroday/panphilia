import { TableStorageEntity } from './util';
import { TableUtilities } from 'azure-storage';

const entGen = TableUtilities.entityGenerator;

export interface Ingredient {
  amount: number;
  unit: string;
  id: string;
}

export interface Step {
  text: string;
}

export interface Recipe {
  id: string,
  title: string,
  description?: string,
  ingredients: Ingredient[],
  steps: Step[]
}

const parseValue = (entity: TableStorageEntity, value: string, parse = false) =>
  parse ? JSON.parse(entity[value]._) : entity[value]._

export const parse = (recipeFromStorage: TableStorageEntity): Recipe => ({
  id: parseValue(recipeFromStorage, "RowKey"),
  title: parseValue(recipeFromStorage, "title"),
  description: parseValue(recipeFromStorage, "description"),
  ingredients: parseValue(recipeFromStorage, "ingredients", true),
  steps: parseValue(recipeFromStorage, "steps", true)
});

export const store = (PartitionKey: string, recipe: Recipe): TableStorageEntity => ({
  PartitionKey: entGen.String(PartitionKey),
  RowKey: entGen.String(recipe.id),
  id: entGen.String(recipe.id),
  title: entGen.String(recipe.title),
  description: entGen.String(recipe.description),
  ingredients: entGen.String(JSON.stringify(recipe.ingredients)),
  steps: entGen.String(JSON.stringify(recipe.steps))
});