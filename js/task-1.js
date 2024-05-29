const categoriesItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItem.length}`);
const categories = categoriesItem.forEach(element => {
  const categoryTitle = element.querySelector('h2').textContent;
  const categoryTotal = element.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryTotal}`);
});