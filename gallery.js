const container = document.getElementById('panelContainer');
const panels = document.getElementsByClassName('img-panel');

const handlePanelClick = (event) => {
  for (let panel of panels) {
    panel.classList.remove('img-panel--open');
  }
  if (event.target && event.target.classList.contains('img-panel')) {
    const panel = event.target;
    panel.classList.add('img-panel--open');
  }
};

container.addEventListener('click', handlePanelClick);