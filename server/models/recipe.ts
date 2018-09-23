import { TableStorageEntity } from './util';
import { TableUtilities } from 'azure-storage';

const entGen = TableUtilities.entityGenerator;

export interface Ingredient {
  amount: number;
  unit: string;
  id: string;
  note: string;
}

export interface Step {
  text: string;
}

export interface Recipe {
  id: string,
  title: string,
  description?: string,
  yieldAmount?: number;
  yieldUnit?: string;
  activeTimeMinutes?: number;
  totalTimeMinutes?: number;
  notes?: string[];
  source?: string;
  ingredients: Ingredient[],
  steps: Step[]
}

const parseValue = (entity: TableStorageEntity, value: string, parse = false) =>
  parse ? entity[value] && JSON.parse(entity[value]._) : entity[value] && entity[value]._

export const parse = (recipeFromStorage: TableStorageEntity): Recipe => ({
  id: parseValue(recipeFromStorage, "RowKey"),
  title: parseValue(recipeFromStorage, "title"),
  description: parseValue(recipeFromStorage, "description"),
  yieldAmount: parseValue(recipeFromStorage, "yieldAmount"),
  yieldUnit: parseValue(recipeFromStorage, "yieldUnit"),
  activeTimeMinutes: parseValue(recipeFromStorage, "activeTimeMinutes"),
  totalTimeMinutes: parseValue(recipeFromStorage, "totalTimeMinutes"),
  ingredients: parseValue(recipeFromStorage, "ingredients", true),
  steps: parseValue(recipeFromStorage, "steps", true),
  notes: parseValue(recipeFromStorage, "notes", true),
  source: parseValue(recipeFromStorage, "source")
});

export const store = (PartitionKey: string, recipe: Recipe): TableStorageEntity => ({
  PartitionKey: entGen.String(PartitionKey),
  RowKey: entGen.String(recipe.id),
  id: entGen.String(recipe.id),
  title: entGen.String(recipe.title),
  description: entGen.String(recipe.description),
  yieldAmount: entGen.String(recipe.yieldAmount.toString()),
  yieldUnit: entGen.String(recipe.yieldUnit),
  activeTimeMinutes: entGen.String(recipe.activeTimeMinutes.toString()),
  totalTimeMinutes: entGen.String(recipe.totalTimeMinutes.toString()),
  ingredients: entGen.String(JSON.stringify(recipe.ingredients)),
  steps: entGen.String(JSON.stringify(recipe.steps)),
  notes: entGen.String(JSON.stringify(recipe.notes)),
  source: entGen.String(recipe.source)
});