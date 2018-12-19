const MEALS = [
  { description: 'Breakfast', calories: 460 },
  { description: 'Snack', calories: 180 },
  { description: 'Lunch', calories: 600 },
];

const { td, th, tr, tbody } = tags;

function cell(tag, className, value) { 
  return tag({className}, value);
}

function mealRow(className, meal) {
  return tr({ className }, [
    cell(td, 'pa2', meal.description),
    cell(td, 'pa2 tr', meal.calories),
  ]);
}

function mealsBody(className, meals) {
  const rows = R.map(R.partial(mealRow, ['stripe-dark']), meals);
  return tbody({ className }, rows);
}

const node = document.getElementById('app');

const view = mealsBody('', MEALS);

node.appendChild(view);