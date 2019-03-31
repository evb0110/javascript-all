import proceedCorpus from './proceedCorpus.js';
import produceText from './produceText.js';

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

let prevScrollpos;
function hideHeader(event) {
  // const currentScrollPos = event.target.scrollTop;
  // if (prevScrollpos > currentScrollPos) {
  //   pagetitle.classList.add('block');
  //   pagetitle.classList.remove('none');
  // } else {
  //   pagetitle.classList.add('none');
  //   pagetitle.classList.remove('block');
  // }
  // prevScrollpos = currentScrollPos;
  if ([outer1, outer2].map(c => c.scrollTop).some(x => x > 0)) {
    pagetitle.classList.add('none');
    pagetitle.classList.remove('block');
  } else {
    pagetitle.classList.add('block');
    pagetitle.classList.remove('none');
  }
}

// const copyButton = document.querySelector('.copy_button');
// copyButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   copyToClip();
// });
// function copyToClip(str = outer1.innerHTML) {
//   function listener(e) {
//     e.preventDefault();
//     e.clipboardData.setData('text/html', str);
//     e.clipboardData.setData('text/plain', str);
//   }
//   document.addEventListener('copy', listener);
//   document.execCommand('copy');
//   document.removeEventListener('copy', listener);
// }

export { outer1, outer2, emptyElement, volumeNumberBox, textNumberBox };
