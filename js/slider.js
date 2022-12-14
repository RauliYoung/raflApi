/*
Tekijä: Niko Mäenpää
Tarkoitus: Tässä scriptissä katsotaan "Near me"-checkboxin tilaa ja jos boxi on chekattu näytetään etäisyys slideri.
 */
"use strict";

let checked = false;

function isChecked() {
  let sliderToggle = document.getElementById("sliderToggle");
  let checkbox = document.getElementById("nearMeCheckbox");

  if (checkbox.checked === false) {
    sliderToggle.style.display = "none";

    // Koodia (uutta), joka poistaa sijainnin hakuehdoista (ei valmis) sekä kartalta (valmis)
    if (map.lmarker) {
      map.deleteLocation();
    }
    checked = false;
  } else {
    searchLocation();
    sliderToggle.style.display = "block";
    checked = true;
  }
}
