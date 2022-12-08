'use strict';

// Haetaan sivuston checkboxit ja tallentuu automaattisesti listaan.
const categories = document.getElementsByClassName('categoriesCheckbox');

// Alustetaan palautettava lista valituista checkboxeista ja laitetaan sinne 'restaurants' arvo.
let categoriesList = ['restaurant'];

// Pyöräytetään selectedBtn() funktio search nappia painettaessa (kun api.js scriptin search() funktio lähtee käyntiin).
function selectedBtn(){
    const top10Box = document.getElementById('top10');
    const cafeBox = document.getElementById('cafe');
    const fastfoodBox = document.getElementById('Fast Food');
    const pubBox = document.getElementById('Pub');

    // Lisätään kategorioiden(checkboxien) arvot palautettavaan listaan.
    for (let i = 0; i < categories.length; i++){
        categoriesList.push(categories[i].name);
    }

    // Katsotaan mitkä kategoriat(checkboxit) on valittu ja poistetaan ylimääräiset listasta.
    if (top10Box.checked === false){
        categoriesList = categoriesList.filter(i => i !== 'top10');
    }

    if (cafeBox.checked === false){
        categoriesList = categoriesList.filter(i => i !== 'cafe');
    }

    if (fastfoodBox.checked === false){
        categoriesList = categoriesList.filter(i => i !== 'Fast Food');
    }

    if (pubBox.checked === false){
        categoriesList = categoriesList.filter(i => i !== 'Pub');
    }


    // Lopuksi palautetaan lopullinen lista halutuista kategorioista.

    console.log(categoriesList)

    return categoriesList;
}








