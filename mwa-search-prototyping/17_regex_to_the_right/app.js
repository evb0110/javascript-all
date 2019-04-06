import proceedCorpus from './proceedCorpus.js';
import produceText from './produceText.js';
import copyToClipboard from './copyToClipboard.js';

const searchBox = document.querySelector('#searchbox');
const outer1 = document.querySelector('.outer1');

const searchButton = document.querySelector('#search');
searchButton.addEventListener('click', handleSearch);

const volumeNumberBox = document.querySelector('#volume_number');
const textNumberBox = document.querySelector('#text_number');
const outer2 = document.querySelector('.outer2');

const showButton = document.querySelector('#show');
showButton.addEventListener('click', handleShow);

function handleSearch(event) {
  event.preventDefault();

  const searchString = searchBox.value;
  if (searchString.length < 1 || /^\s+$/.test(searchString)) return;
  const searchRegex = RegExp(searchString, 'g');

  proceedCorpus(searchRegex);
}

function handleShow(event) {
  event.preventDefault();

  const volumeNumber = +volumeNumberBox.value;
  const textNumber = +textNumberBox.value;

  if (Number.isNaN(volumeNumber)) {
    emptyElement(outer2);
    return (outer2.textContent = 'volumeNumber should be a valid number');
  }
  if (Number.isNaN(textNumber)) {
    emptyElement(outer2);
    return (outer2.textContent = 'textNumber should be a valid number');
  }

  produceText(volumeNumber, textNumber);
}

function emptyElement(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

outer1.onscroll = hideHeader;
outer2.onscroll = hideHeader;
const pagetitle = document.querySelector('.pagetitle');

function hideHeader() {
  if ([outer1, outer2].map(c => c.scrollTop).some(x => x > 0)) {
    pagetitle.classList.add('none');
    pagetitle.classList.remove('block');
  } else {
    pagetitle.classList.add('block');
    pagetitle.classList.remove('none');
  }
}

const copyButton = document.querySelector('.copy_button');
copyButton.addEventListener('click', event => {
  event.preventDefault();
  copyToClipboard('.outer1');
});

export { outer1, outer2, emptyElement, volumeNumberBox, textNumberBox };
