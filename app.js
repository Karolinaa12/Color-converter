const form = document.querySelector(`#convertForm`);
const rgbDisplay = document.querySelector(`#rgbDisplay`);
const hexDisplay = document.querySelector(`#hexDisplay`);
const resultDisplay = document.querySelector(`#resultDisplay`);

form.addEventListener(`submit`, function (e) {
  e.preventDefault();
  const r = form.elements.red.value;
  const g = form.elements.green.value;
  const b = form.elements.blue.value;
  resultDisplay.innerText = `Your color in:`;
  rgbDisplay.innerText = `RGB(${r}, ${g}, ${b})`;
  hexDisplay.innerText = hex(23, 34, 45);
});

function hex(r, g, b) {
  return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
