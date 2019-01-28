const show = document.querySelector('.show');
show.addEventListener('click', () => handleShow(event));

const hide = document.querySelector('.hide');
hide.addEventListener('click', () => handleHide(event));

const right = document.querySelector('.outer2');
console.log(right);

function handleShow(event) {
  console.log(event);
  right.classList.remove("none");
  right.classList.add("block");
}
function handleHide(event) {
  console.log(event);
  right.classList.remove("block");
  right.classList.add("none");
}