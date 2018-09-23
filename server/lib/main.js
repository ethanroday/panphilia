const parser = new DOMParser();

const emptyStep = `
<div class="form-group">
    <div class="form-row">
        <div class="col-11">
            <div class="input-group">
                <div class="input-group-prepend">
                    <div class="input-group-text handle" style="cursor:move;">◆</div>
                </div><textarea class="form-control text" rows="2"></textarea></div>
        </div>
        <div class="col-1"><button class="btn btn-danger" onClick="removeStep(this)">Remove</button></div>
    </div>
</div>
`;

const emptyIngredient = `
<div class="form-group">
    <div class="form-row">
        <div class="col-2">
            <div class="input-group">
                <div class="input-group-prepend">
                    <div class="input-group-text handle" style="cursor:move;">◆</div>
                </div><input class="form-control amount" value="" /></div>
        </div>
        <div class="col-1"><input class="form-control unit" value="" /></div>
        <div class="col-4"><input class="form-control id" value="" list="ingredients-list"/></div>
        <div class="col-4"><input class="form-control note" value="" placeholder="Note"/></div>
        <div class="col-1"><button class="btn btn-danger" onclick="removeIngredient(this)">Remove</button></div>
    </div>
</div>
`;

const emptyNote = `
<div class="form-group">
    <div class="form-row">
        <div class="col-12">
          <textarea class="form-control note" rows="2"></textarea>
        </div>
    </div>
</div>
`;

function addIngredient() {
  const ingredients = document.getElementById('ingredients');
  ingredients.appendChild(parser.parseFromString(emptyIngredient, "text/html").body.firstChild);
}

function removeIngredient(element) {
  element.parentElement.parentElement.parentElement.remove()
}

function addStep() {
  const steps = document.getElementById('steps');
  steps.appendChild(parser.parseFromString(emptyStep, "text/html").body.firstChild);
}

function removeStep(element) {
  element.parentElement.parentElement.parentElement.remove()
}

Sortable.create(ingredients, {
  group: 'ingredients', animation: 100, handle: ".handle"
})

Sortable.create(steps, {
  group: 'steps', animation: 100, handle: ".handle"
})

function getIngredient(formGroup) {
  return {
    amount: formGroup.querySelector(".amount").value,
    unit: formGroup.querySelector(".unit").value,
    id: formGroup.querySelector(".id").value,
    note: formGroup.querySelector(".note").value
  }
}

function getIngredients() {
  const ingredients = document.getElementById("ingredients").querySelectorAll('.form-group');
  return Array.from(ingredients).map(i => getIngredient(i));
}

function getStep(formGroup) {
  return {
    text: formGroup.querySelector('.text').value
  }
}

function getSteps() {
  const steps = document.getElementById("steps").querySelectorAll(".form-group");
  return Array.from(steps).map(s => getStep(s));
}

function updateRecipe() {
  const recipe = {
    id: document.getElementById('recipe-id').value,
    title: document.getElementById('recipe-name').value,
    description: document.getElementById('recipe-description').value,
    yieldAmount: document.getElementById('recipe-yield-amount').value,
    yieldUnit: document.getElementById('recipe-yield-unit').value,
    activeTimeMinutes: document.getElementById('recipe-active-time').value,
    totalTimeMinutes: document.getElementById('recipe-total-time').value,
    ingredients: getIngredients(),
    steps: getSteps(),
    notes: document.getElementById('notes').value,
    source: document.getElementById('source').value
  }
  fetch(`/recipes/${recipe.id}`, {
    method: 'post',
    body: JSON.stringify(recipe),
    headers: {
      "Content-Type": "application/json"
    },
    redirect: 'follow'
  })
  .then(response => {
    if (response.redirected) {
      window.location.href = response.url;
    }
  });
}