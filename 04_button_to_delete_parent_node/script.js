const button = document.getElementsByTagName("button")[0];
const input = document.getElementsByTagName("input")[0];
let ol = document.querySelector("ol");

const removeParent = (e) => {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}

const addItem = () => {
  const item = input.value;
  input.value = "";
  input.focus();
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  let btn = document.createElement("button");
  let btnText = document.createTextNode("Delete me!");
  btn.appendChild(btnText);
  btn.addEventListener("click", removeParent);
  console.log(btn);
  li.appendChild(btn);
  // ol.appendChild(li); // add to the end of the list
  ol.insertBefore(li, ol.childNodes[0]) // add to the start
}


button.addEventListener("click", addItem);
input.addEventListener('keypress', (e) => {
  if (input.value && e.keyCode == 13) {
    addItem();
  }
});