const titelCategoriesRef = document.querySelectorAll('h2');
const itemCategoriesRef = document.querySelectorAll('.item ul')

titelCategoriesRef.forEach(el => console.log('Категория: :>> ', el.textContent))
itemCategoriesRef.forEach(el => console.log('Количество элементов: :>> ', el.children.length))

const categoriesRefs = document.querySelector('#categories')
console.log('categoriesRefs :>> ', categoriesRefs.children.length);