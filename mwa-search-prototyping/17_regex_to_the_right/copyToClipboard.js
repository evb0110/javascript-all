export default function CopyToClipboard(element) {
  // array off all block level elements
  var block_level_elements = [
    'P',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'OL',
    'UL',
    'DIV',
    'FORM',
    'HR',
    'TABLE',
  ];

  //create new Element so we can change elements like we need
  var newelment = document.createElement('div');

  //copy target Element to the new Element
  const targetElement = document.querySelector(element);
  newelment.innerHTML = targetElement.innerHTML;

  //hide new Element to body
  newelment.style.opacity = 0;
  // add new Element to body
  document.body.appendChild(newelment);

  //get all element childs
  var descendants = newelment.getElementsByTagName('*');

  //loop in childs
  for (var i = 0; i < descendants.length; ++i) {
    //get defult Style
    var style = window.getComputedStyle(descendants[i]);
    var dis = style.getPropertyValue('display');
    //get defult tag name
    var tagname = descendants[i].tagName;

    //---------------------------
    //this part is little tricky
    //---------------------------
    //true : Element is a block level elements and css display is inline
    if (dis.includes('inline') && block_level_elements.includes(tagname)) {
      //get all Element style include default style
      var defaultCss = document.defaultView.getComputedStyle(descendants[i], '')
        .cssText;
      //chang Element tag from block level elements to inline level elements (span)
      descendants[i].outerHTML = descendants[i].outerHTML.replace(
        new RegExp(tagname, 'ig'),
        'span',
      ); //todo: need to change RegExp to tag name only not inner text
      //add all Element style include default style to new tag
      descendants[i].style.cssText = defaultCss;
    }
  }
  //-----------------copy new Element--------------
  var doc = document;
  var range, selection;

  if (doc.body.createTextRange) {
    range = doc.body.createTextRange();
    range.moveToElementText(newelment);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();
    range = doc.createRange();
    range.selectNodeContents(newelment);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  document.execCommand('copy');
  window.getSelection().removeAllRanges();

  // remove new Element from document
  document.body.removeChild(newelment);

  const copyButton = document.querySelector('.copy_button');
  copyButton.value = 'Copied';
  copyButton.classList.add('green_background');
  setTimeout(() => {
    copyButton.value = 'Copy';
    copyButton.classList.remove('green_background');
  }, 1500);
}
