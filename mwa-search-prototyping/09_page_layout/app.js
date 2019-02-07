

const showContext = document.querySelector('.left-blue .show-context');
showContext.addEventListener('click', () => handleShowContextClick());



function handleShowContextClick() {
  handleShow();
  handleScroll();
}

const searchButton = document.querySelector('#search');
const showButton = document.querySelector('#show');

searchButton.addEventListener('click', handleSearch )

function handleSearch(event) {
  event.preventDefault();
  console.log('Search button clicked');
}

showButton.addEventListener('click', handleShow )

function handleShow(event) {
  event.preventDefault();
  console.log('Show button clicked');
}

const card = document.querySelector('#card');