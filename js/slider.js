function isChecked(){
    let sliderToggle = document.getElementById('sliderToggle');
    let checkbox = document.getElementById('nearMeCheckbox');

    if (checkbox.checked === false){
        sliderToggle.style.display = "none" ;

        // Koodia (uutta), joka poistaa sijainnin hakuehdoista (ei valmis) sekä kartalta (valmis)
        map.deleteLocation()
        return false

    } else {
        sliderToggle.style.display = "block";

        // (uusi) Etsii sijainnin, kun near me on painettu (valmis)
        searchLocation()
        return true
    }
}

