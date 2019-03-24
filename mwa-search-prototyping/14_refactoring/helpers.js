export default function divAndColorify (str, regex = /^.*$/, classColor = 'redbold', tag = 'div') {
  const splitText = str.split(regex);

  if (splitText.length <= 1) {
    return;
  }
  const matches = str.match(regex);
  const totalNode = document.createElement(tag);

  splitText.forEach(
    (element, index) => {
      element && totalNode.appendChild(makeSpan(element));
      matches[index] && totalNode.appendChild(makeSpan(matches[index], classColor));
    }
  );
  return totalNode;
};

function makeSpan(text, classColor) {
  const node = document.createElement('span');
  const textnode = document.createTextNode(text);
  node.appendChild(textnode);
  if (classColor) node.classList.add(classColor);
  return node;
}

