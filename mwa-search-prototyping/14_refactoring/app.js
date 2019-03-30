import data from './datafile.js';
import proceedCorpus from './proceedCorpus.js';
import produceText from './produceText.js';

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

const volumeNumberBox = document.querySelector('#volume_number');
const textNumberBox = document.querySelector('#text_number');
const outer2 = document.querySelector('.outer2');

const showButton = document.querySelector('#show');
showButton.addEventListener('click', handleShow);

function handleShow(event) {
  event.preventDefault();
  emptyElement(outer2);
  const volumeNumber = +volumeNumberBox.value;
  const textNumber = +textNumberBox.value;

  if (Number.isNaN(volumeNumber)) outer2.innerHTML = 'Invalid volumeNumber';
  if (Number.isNaN(textNumber)) outer2.innerHTML = 'Invalid textNumber';

  produceText(data, volumeNumber, textNumber, outer2);
}

function emptyElement(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

outer1.onscroll = hideHeader;
outer2.onscroll = hideHeader;
const pagetitle = document.querySelector('.pagetitle');

var prevScrollpos = outer1.scrollTop || outer2.scrollTop;
function hideHeader() {
  var currentScrollPos = outer1.scrollTop || outer2.scrollTop;
  if (prevScrollpos > currentScrollPos) {
    pagetitle.style.display = 'block';
  } else {
    pagetitle.style.display = 'none';
  }
  prevScrollpos = currentScrollPos;
}