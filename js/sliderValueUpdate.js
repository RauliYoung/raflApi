let slider = document.getElementById("myRange");
let output = document.getElementById("sliderVal");
let range;
output.innerHTML = slider.value + " m";

slider.oninput = function () {
  output.innerHTML = this.value + " m";
  range = this.value;
  map.editCircle(range);
};
