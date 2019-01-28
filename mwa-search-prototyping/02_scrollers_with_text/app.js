const show = document.querySelector('.show');
show.addEventListener('click', () => handleShow());

const hide = document.querySelector('.hide');
hide.addEventListener('click', () => handleHide());

const scroll = document.querySelector('.scroll');
scroll.addEventListener('click', () => handleScroll());

const right = document.querySelector('.outer2');
const left = document.querySelector('.outer1');

const showContext = document.querySelector('.left-blue .show-context');
showContext.addEventListener('click', () => handleShowContextClick());

const leftBlue = document.querySelector('.left-blue');

function handleShow() {
  right.classList.remove("none");
  right.classList.add("block");
}
function handleHide() {
  right.classList.remove("block");
  right.classList.add("none");
}

function handleScroll() {
  const myElement = document.getElementById('blue');
  const topPos = myElement.offsetTop;
  const offsetLeftFromTop = leftBlue.offsetTop - left.scrollTop;
  right.scrollTop = topPos - offsetLeftFromTop;
}

function handleShowContextClick() {
  handleShow();
  handleScroll();
}
