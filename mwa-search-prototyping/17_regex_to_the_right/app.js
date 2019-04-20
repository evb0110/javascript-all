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

const checkLeft = document.getElementById('check_left');
checkLeft.addEventListener('change', onCheckLeft);
const checkRight = document.getElementById('check_right');
checkRight.addEventListener('change', onCheckRight);

function handleSearch(event) {
  event.preventDefault();
  checkLeft.checked = true;
  outer1.classList.remove('none');

  const searchString = searchBox.value;
  if (searchString.length < 1 || /^\s+$/.test(searchString)) return;
  const searchRegex = RegExp(searchString, 'g');

  proceedCorpus(searchRegex);
}

function handleShow(event) {
  event.preventDefault();
  checkRight.checked = true;
  outer2.classList.remove('none');

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

const totop1 = document.querySelector('.totop1');
totop1.addEventListener('click', topContainer.bind(this, outer1));

const totop2 = document.querySelector('.totop2');
totop2.addEventListener('click', topContainer.bind(this, outer2));

outer1.addEventListener('scroll', e => scroll1(e, totop1));
outer2.addEventListener('scroll', e => scroll1(e, totop2));

function scroll1(e, btn) {
  const container = e.target;
  if (container.scrollTop > 20) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}

function topContainer(container) {
  const scrollTime = 400;
  const stepTime = 10;
  const containerHeight = container.scrollTop;
  const stepPixelDecrement = (containerHeight / scrollTime) * stepTime;
  scrollUp(container, stepPixelDecrement, stepTime);
}

function scrollUp(container, decrement, stepTime) {
  if (container.scrollTop === 0) return;

  container.scrollTop -= decrement;
  setTimeout(() => scrollUp(container, decrement, stepTime), stepTime);
}



function onCheckLeft() {
  if (checkLeft.checked) {
    outer1.classList.remove('none');
  } else {
    outer1.classList.add('none');
  }
}
function onCheckRight() {
  if (checkRight.checked) {
    outer2.classList.remove('none');
  } else {
    outer2.classList.add('none');
  }
}

export { outer1, outer2, emptyElement, volumeNumberBox, textNumberBox };
