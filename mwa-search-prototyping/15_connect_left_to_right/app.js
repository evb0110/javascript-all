import data from './datafile.js';
import proceedCorpus from './proceedCorpus.js';
import produceText from './produceText.js';

const searchBox = document.querySelector('#searchbox');
const outer1 = document.querySelector('.outer1');

const searchButton = document.querySelector('#search');
searchButton.addEventListener('click', handleSearch);

const volumeNumberBox = document.querySelector('#volume_number');
const textNumberBox = document.querySelector('#text_number');
export let outer2 = document.querySelector('.outer2');


const showButton = document.querySelector('#show');
showButton.addEventListener('click', handleShow);

function handleSearch(event) {
  event.preventDefault();
  emptyElement(outer1);
  outer1.scrollTop = 0;

  const searchString = searchBox.value;
  if (searchString.length < 1 || /^\s+$/.test(searchString)) return;

  const searchRegex = RegExp(searchString, 'g');

  proceedCorpus(data, searchRegex, outer1);
}

function handleShow(event) {
  event.preventDefault();
  outer2.scrollTop = 0;

  const volumeNumber = +volumeNumberBox.value;
  const textNumber = +textNumberBox.value;

  if (Number.isNaN(volumeNumber))
    outer2.innerHTML = 'volumeNumber should be a valid number';
  if (Number.isNaN(textNumber))
    outer2.innerHTML = 'textNumber should be a valid number';

  produceText(data, volumeNumber, textNumber, outer2);
}

export function emptyElement(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

outer1.onscroll = hideHeader;
outer2.onscroll = hideHeader;
const pagetitle = document.querySelector('.pagetitle');

let prevScrollpos;
function hideHeader(event) {
  const currentScrollPos = event.target.scrollTop;
  if (prevScrollpos > currentScrollPos) {
    pagetitle.classList.add('block');
    pagetitle.classList.remove('none');
  } else {
    pagetitle.classList.add('none');
    pagetitle.classList.remove('block');
  }
  prevScrollpos = currentScrollPos;
}
