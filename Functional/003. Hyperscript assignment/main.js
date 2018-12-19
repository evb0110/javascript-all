// 1. using destructuring, create a constant named
// p, which is a function that will create paragraph tags
// Remember, you'll need to use the "tags" namespace
// to destructure from


const { p } = tags;


// 2. create a constant named myParagraph by using the
// p function you coded in step 1.  The paragraph should
// contain a sentence of your choosing.

const myParagraph = p("hi gui");

// 3. create a constant named node, that references 
// the dom node where the id is 'app'.

const node = document.getElementById('app');


// 4. add your 'myParagraph' to the dom node you 
// coded in step 3

node.appendChild(myParagraph);

// HINTS / HELP
// If you need help, you can read the following docs:
// hyperscript-helpers: https://github.com/ohanhi/hyperscript-helpers
// destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
// reference dom node: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// adding html in code: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// you can find my solution at: https://jsbin.com/najisaw/1/edit?js,output
