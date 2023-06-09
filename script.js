// Sample data for testing
let categories = [
  { id: 1, name: 'Work' },
  { id: 2, name: 'Personal' }
];

let notes = [
  { id: 1, title: 'Note 1', content: 'Lorem ipsum dolor sit amet', category: 1 },
  { id: 2, title: 'Note 2', content: 'Consectetur adipiscing elit', category: 2 }
];

// Display categories and notes on page load
document.addEventListener('DOMContentLoaded', function() {
  displayCategories();
  displayNotes();
});

// Function to display categories
function displayCategories() {
  const categoryList = document.getElementById('category-list');
  categoryList.innerHTML = '';

  categories.forEach(function(category) {
    const listItem = document.createElement('li');
    listItem.innerText = category.name;
    categoryList.appendChild(listItem);
  });
}

// Function to add a new category
function addCategory() {
  const categoryInput = document.getElementById('category-input');
  const categoryName = categoryInput.value;

  if (categoryName) {
    const newCategory = {
      id: categories.length + 1,
      name: categoryName
    };

    categories.push(newCategory);
    categoryInput.value
