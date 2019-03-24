import data from './datafile.js';
import proceedCorpus from './proceedCorpus.js';

const searchBox = document.querySelector('#searchbox');
const outer1 = document.querySelector('.outer1');

const searchButton = document.querySelector('#search');

searchButton.addEventListener('click', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  emptyElement(outer1);

  const searchString = searchBox.value;
  if (searchString.length < 1 || /^\s+$/.test(searchString)) return;

  const searchRegex = RegExp(searchString, 'g');

  proceedCorpus(data, searchRegex, outer1);
}

function emptyElement(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}
