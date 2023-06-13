const form = document.querySelector(`#convertForm`);
const rgbDisplay = document.querySelector(`#rgbDisplay`);
const hexDisplay = document.querySelector(`#hexDisplay`);

form.addEventListener(`submit`, function (e) {
  e.preventDefault();
  const r = form.elements.red.value;
  const g = form.elements.green.value;
  const b = form.elements.blue.value;
  rgbDisplay.innerText = `Your color: RGB(${r}, ${g}, ${b})`;
  hexDisplay.innerText = hex(23, 34, 45);
});

function hex(r, g, b) {
  return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
