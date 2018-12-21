import hh from 'hyperscript-helpers';
import {h, diff, patch} from 'virtual-dom';
import createElement from 'virtual-dom/create-element';


const { div, button, span } = hh(h);

const MSGS = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
}

const initModel = 0;

function view(dispatch, model) {
  const numString = model < 0
    ? model.toString()
    : '' + model;
  return div([
    div({ className: 'mv2' },
      [
        span({ className: 'dib w4' } , `Count: `),
        span({ className: 'dib w4 tr red' } , `${numString}`),
      ]
    ),
    button({ className: 'f-subheadline pv1 ph mr2 w4', onclick: () => dispatch(MSGS.SUBTRACT) }, '-'),
    button({ className: 'f-subheadline pv1 ph2 w4', onclick: () => dispatch(MSGS.ADD) }, '+'),
  ]);
}


//c The same as reducer in Redux!
function update(msg, model) {
  switch (msg) {
    case MSGS.ADD:
      return model + 1;
    case MSGS.SUBTRACT:
      return model - 1;
    default:
      return model;
  }
}

function app(initModel, update, view, node) {
  let model = initModel;
  let currentView = view(dispatch, model);
  let rootNode = createElement(currentView);
  node.appendChild(rootNode);
   function dispatch(msg) {
    model = update(msg, model);
    const updatedView = view(dispatch, model);
    const patches = diff(currentView, updatedView);
    rootNode = patch(rootNode, patches);
    currentView = updatedView;
  }

}

const rootNode = document.getElementById('app');

app(initModel, update, view, rootNode);

// rootNode.appendChild(view(update('minus', initModel)));