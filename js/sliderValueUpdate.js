let slider = document.getElementById("myRange");
let output = document.getElementById("sliderVal");
let range;
output.innerHTML = slider.value;



slider.oninput = function() {
    output.innerHTML = this.value;
    range = this.value;
    console.log(range);
}