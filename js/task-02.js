const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIdEl = document.querySelector('#ingredients');

const arrListItem = ingredients.map(ingredient => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = ingredient;
  return listEl
})


ulIdEl.append(...arrListItem);