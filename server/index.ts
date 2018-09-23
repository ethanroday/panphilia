import path from 'path';
import { createTableService, TableQuery } from 'azure-storage';
import express from 'express';
import bodyParser from 'body-parser';
import { parse, store, Ingredient, Step } from './models/recipe';
import { TableStorageEntity } from './models/util';
import { formInputsToList } from "./util";
import uuid from 'uuid';

const tableService = createTableService('panphilia', "xWIRFuOKLa3Lgg04IaEjx7tQl7SzZthbswWDMDR7V/7fYu6qXbPXGbUN6zhkGRYRWcvBDf2DDqxukuxurAnPUQ==");
// tableService.deleteTableIfExists('panphilia', () => {
console.log("ASDFASDF")
tableService.deleteTableIfExists('pahphilia', (e, res, response) => {
  console.log(e, res, response);
  if (e) {
    throw e;
  }
})
// })

const getIngredients = () => 
  new Promise((resolve, reject) => {
    const query = new TableQuery()
      .select(["ingredients"])
      .where("PartitionKey eq ?", "recipes_main");
    tableService.queryEntities('panphilia', query, null, (error, result, response) => {
      if (error) {
        reject(error);
      }
      else {
        const a = result.entries.map((entry: any) => JSON.parse(entry.ingredients._).map((i: any) => i.id));
        const ingredients = new Set([].concat.apply([], 
          a
        ))
        resolve(Array.from(ingredients));
      }
    })
  })

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use("/lib", express.static(path.join(__dirname, "../lib")))

app.get("/recipes", (req, res, next) => {
  const query = new TableQuery()
    .select(["id", "title"])
    .where("PartitionKey eq ?", "recipes_main");
  tableService.queryEntities('panphilia', query, null, (error, result, response) => {
    if (!error) {
      res.render('contents', {
        recipes: result.entries
      })
    }
    else {
      throw error;
    }
  });
});

const editRecipe = (recipe: any, res: any) => {
  getIngredients().then(ingredients => {
    res.render('edit_recipe', {
      recipe, ingredients
    });
  });
}

app.get("/recipes/create", (req, res, next) => {
  const newId = uuid();
  const recipe = {
    id: newId,
    title: "",
    description: "",
    ingredients: [] as any[],
    steps: [] as any[]
  }
  editRecipe(recipe, res);
});

app.get("/recipes/:id", (req, res, next) => {
  tableService.retrieveEntity('panphilia', 'recipes_main', req.params['id'], (error, result: TableStorageEntity, response) => {
    if (!error) {
      res.render('recipe', {
        recipe: parse(result)
      });
    }
  });
});
app.get("/recipes/:id/edit", (req, res, next) => {
  tableService.retrieveEntity('panphilia', 'recipes_main', req.params['id'], (error, result: TableStorageEntity, response) => {
    if (!error) {
      editRecipe(parse(result), res)
    }
  });
});
app.post("/recipes/:id", (req, res, next) => {
  const formObj = req.body;
  const ingredients = formInputsToList<Ingredient>(formObj, "ingredient");
  const steps = formInputsToList<Step>(formObj, "step");
  tableService.insertOrMergeEntity('panphilia', store('recipes_main', formObj), (error, result, response) => {
    if (!error) {
      res.redirect(req.path)
    }
    else {
      throw error;
    }
  });
});

app.listen('3000');