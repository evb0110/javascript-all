const MEALS = [
  { description: 'Breakfast', calories: 450 },
  { description: 'Snack', calories: 170 },
  { description: 'Lunch', calories: 266 },
];

const TITLES = {left: 'Meals', right: "Calories"};
const TOTAL = {left: 'Overall:', right: 1240}


const { td, th, tr, tbody, thead, table } = tags;

function cell(tag, className, value) { 
  return tag({className}, value);
}

function mealRow(className, meal) {
  return tr({ className }, [
    cell(td, 'pa2', meal.description),
    cell(td, 'pa2 tr', meal.calories),
  ]);
}

function headerRow(className, titles) {
  return tr({ className}, [
    cell(th, 'pa2 tl', titles.left),
    cell(th, 'pa2 tr', titles.right)
  ]);
}

function mealsBody(className, meals) {
  const rows = R.map(R.partial(mealRow, ['stripe-dark']), meals);
  return tbody({ className }, rows);
}

function totalRow(className, meals) {
  console.log(meals);
  const total = R.pipe(
    R.map(meal => meal.calories),
    R.reduce((acc, calories) => acc + calories, 0)
    )(meals);
                       
  return tr({className}, [
    cell(td, 'pa2 tr', "Total:"),
    cell(td, 'pa2 tr', total)
  ]);
}

const node = document.getElementById('app');

const mealHeader =  headerRow('bg-silver white', TITLES);

const headerView = thead('', mealHeader);
const totalView = totalRow('bt b', MEALS);

const tableAll = (className, parts) => {
  return table({ className }, parts);
}

const view = mealsBody('', MEALS);

const all = tableAll('ba bw1 dark-grey br1', [headerView, view, totalView])

node.appendChild(all);