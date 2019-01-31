let textarea = document.querySelector('textarea');

textarea.addEventListener('input', output );


function output (e) {
  console.log(e.target.value) 
}