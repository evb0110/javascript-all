const button = document.getElementsByTagName("button");
const text = document.getElementsByTagName("p");


button[0].addEventListener("click", () => console.log("First button CLICK!"));
button[1].addEventListener("mouseover", () => console.log("Second button MOUSEOVER!"));
button[1].addEventListener("dblclick", () => console.log("Second button DOUBLECLICK!"));
button[1].addEventListener("mouseout", () => console.log("Second button MOUSEOUT!"));

// mouseenter and mouseleave are preferable, since they don't take into account
// entering and leaving child elements

button[2].addEventListener("click", () => {
  console.log("third button clicked");
  text[0].classList.toggle("red");
});