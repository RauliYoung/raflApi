/*
Tekijä: Niko Mäenpää
Tarkoitus: Katsoa mikä kustakin checkbox-elementistä on valittuna ja palauttaa niistä merkkijono-lista.
 */
"use strict";
// Haetaan sivuston checkboxit ja tallentuu automaattisesti listaan.
const categories = document.getElementsByClassName("categoriesCheckbox");
let categoriesList = ["restaurants"];
// Pyöräytetään selectedBtn() funktio search nappia painettaessa (kun api.js scriptin search() funktio lähtee käyntiin).
function selectedBtn() {
  // Alustetaan palautettava lista valituista checkboxeista ja laitetaan sinne 'restaurants' arvo.

  const top10Box = document.getElementById("top10");
  const cafeBox = document.getElementById("cafés");
  const fastfoodBox = document.getElementById("Fastfood");
  const pubBox = document.getElementById("Pub");

  // Lisätään kategorioiden(checkboxien) arvot palautettavaan listaan.
  for (let i = 1; i < categories.length; i++) {
    categoriesList.push(categories[i].name);
    console.log(categories[i].name);
  }

  // Katsotaan mitkä kategoriat(checkboxit) on valittu ja poistetaan ylimääräiset listasta.
  if (top10Box.checked === false) {
    categoriesList = categoriesList.filter((i) => i !== "top10");
  }

  if (cafeBox.checked === false) {
    categoriesList = categoriesList.filter((i) => i !== "cafés");
  }

  if (fastfoodBox.checked === false) {
    categoriesList = categoriesList.filter((i) => i !== "Fast food");
  }

  if (pubBox.checked === false) {
    categoriesList = categoriesList.filter((i) => i !== "Pub");
  }

  // Lopuksi palautetaan lopullinen lista halutuista kategorioista.

  console.log(categoriesList);

  return categoriesList;
}
