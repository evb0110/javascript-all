const root = document.querySelector('.root');

function addNode(i) {
  const node = document.createElement('div');
  const textnode = document.createTextNode(i + ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nobis nesciunt repellendus pariatur magnam?');
  node.appendChild(textnode);
  node.classList.add('node')
  root.appendChild(node);
}

for (let i = 1; i <= 3000; i++) {
  addNode(i);
  for (let j=1; j < 1000000; j++) {
    i + j;
  }
}
