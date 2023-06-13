const form = document.querySelector(`#convertForm`);
const rgbDisplay = document.querySelector(`p`);

form.addEventListener(`submit`, function (e) {
  e.preventDefault();
  const r = form.elements.red.value;
  const g = form.elements.green.value;
  const b = form.elements.blue.value;
  rgbDisplay.innerText = `Your color: RGB(${r}, ${g}, ${b})`;
});
