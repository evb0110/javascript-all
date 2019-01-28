const show = document.querySelector('.show');
show.addEventListener('click', () => handleShow(event));

const hide = document.querySelector('.hide');
hide.addEventListener('click', () => handleHide(event));

const scroll = document.querySelector('.scroll');
scroll.addEventListener('click', () => handleScroll(event));

const right = document.querySelector('.outer2');
const left = document.querySelector('.outer1');

const showContext = document.querySelector('.left-blue .show-context');
showContext.addEventListener('click', () => handleShowContextClick(event));

const leftBlue = document.querySelector('.left-blue');

function handleShow(event) {
  right.classList.remove("none");
  right.classList.add("block");
}
function handleHide(event) {
  right.classList.remove("block");
  right.classList.add("none");
}

function handleScroll(event) {
  const myElement = document.getElementById('blue');
  const topPos = myElement.offsetTop;
  const offsetLeft = leftBlue.offsetTop - left.scrollTop;
  right.scrollTop = topPos - offsetLeft;
}

function handleShowContextClick(event) {
  handleShow(event);
  handleScroll(event);
}