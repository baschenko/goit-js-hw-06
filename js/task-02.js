const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIdEl = document.querySelector('#ingredients');

const arrListItem=[];
  
ingredients.forEach(ingredient => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = ingredient;
  arrListItem.push(listEl);
})

ulIdEl.append(...arrListItem);