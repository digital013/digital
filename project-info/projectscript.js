const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item'); // Select all elements with class "item"
  
  // If the clicked element matches the class "next" or a card itself, move the first item to the end of the slider
  if (e.target.matches('.next') || e.target.classList.contains('item')) {
    slider.append(items[0]);
  }
  
  // If the clicked element matches the class "prev", move the last item to the beginning of the slider
  if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]);
  }
}

// Add a click event listener to the document, calling the "activate" function when a click occurs
document.addEventListener('click', activate, false);
