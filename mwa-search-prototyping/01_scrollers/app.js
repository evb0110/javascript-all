const show = document.querySelector('.show');
show.addEventListener('click', () => handleShow(event));

const hide = document.querySelector('.hide');
hide.addEventListener('click', () => handleHide(event));

const scroll = document.querySelector('.scroll');
scroll.addEventListener('click', () => handleScroll(event));

const right = document.querySelector('.outer2');

function handleShow(event) {
  right.classList.remove("none");
  right.classList.add("block");
}
function handleHide(event) {
  right.classList.remove("block");
  right.classList.add("none");
}

function handleScroll(event) {
  console.log(event);
  var myElement = document.getElementById('blue');
  var topPos = myElement.offsetTop;
  right.scrollTop = topPos - 200;
}