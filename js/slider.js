function isChecked(){
    let sliderToggle = document.getElementById('sliderToggle');
    let checkbox = document.getElementById('nearMeCheckbox');

    if (checkbox.checked === false){
        sliderToggle.style.display = "none" ;
    } else {
        sliderToggle.style.display = "block";
    }
}