const state = {
  count: 0
}

const root = document.querySelector('.root');

const panel = document.createElement('div');
panel.classList.add('panel');

root.appendChild(panel);

const windows = document.createElement('div');
windows.classList.add('windows');
root.appendChild(windows);

const makeWindowButton = document.createElement('div');
makeWindowButton.classList.add('make-window');
const textMakeWindow = document.createTextNode('New Window');
makeWindowButton.appendChild(textMakeWindow);

panel.appendChild(makeWindowButton);

makeWindowButton.addEventListener('click', makeNewWindow);


function makeNewWindow() {
  state.count++;

  const newWindow = document.createElement('div');
  newWindow.classList.add('window');
  const windowPanel = document.createElement('div');
  windowPanel.classList.add('window-panel');
  
  const windowName = document.createElement('div');
  const windowNameText = document.createTextNode(`Window ${state.count}`);
  windowName.appendChild(windowNameText);
  windowName.classList.add('window-name')
  windowPanel.appendChild(windowName);

  const minimizeButton = document.createElement('div');
  minimizeButton.classList.add('minimize-button')
  const minimizeText = document.createTextNode('_');
  minimizeButton.appendChild(minimizeText);
  windowPanel.appendChild(minimizeButton);
  
  const closeButton = document.createElement('div');
  closeButton.classList.add('close-button')
  const closeText = document.createTextNode('x');
  closeButton.appendChild(closeText);
  windowPanel.appendChild(closeButton);



  newWindow.appendChild(windowPanel);
  windows.appendChild(newWindow);

  const miniName = document.createElement('div');
  const miniNameText = document.createTextNode(state.count);
  miniName.appendChild(miniNameText);
  miniName.classList.add('mini-name');
  panel.append(miniName);

  closeButton.addEventListener('click', () => {
    newWindow.remove();
    miniName.remove();
  })
  

};

