const search = document.getElementById('search');
const list = document.getElementById('list');

// hide the list initially
list.style.display = 'none';

search.addEventListener('input', function() {
  // get the search term
  const searchTerm = this.value.toLowerCase();
  
  // show/hide the list based on search term
  if (searchTerm.length > 0) {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
  
  // filter the list items based on search term
  const items = list.getElementsByTagName('li');
  for (let i = 0; i < items.length; i++) {
    const text = items[i].innerText.toLowerCase();
    if (text.includes(searchTerm)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
});
