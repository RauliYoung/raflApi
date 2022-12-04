'use strict';

// Haetaan sivuston checkboxit ja tallentuu automaattisesti listaan.
const categories = document.getElementsByClassName('categoriesCheckbox');

// Pyöräytetään selectedBtn() funktio search nappia painettaessa (kun api.js scriptin search() funktio lähtee käyntiin).
function selectedBtn(){
    const alacarteBox = document.getElementById('alacarte');
    const cafeBox = document.getElementById('cafe');
    const fastfoodBox = document.getElementById('fastfood');
    const pubBox = document.getElementById('pub');

    // Alustetaan palautettava lista valituista checkboxeista ja laitetaan sinne 'restaurants' arvo.
    let categoriesList = ['restaurants'];

    // Lisätään kategorioiden(checkboxien) arvot palautettavaan listaan.
    for (let i = 0; i < categories.length; i++){
        categoriesList.push(categories[i].name);
    }

    // Katsotaan mitkä kategoriat(checkboxit) on valittu ja poistetaan ylimääräiset listasta.
    if (alacarteBox.checked === false){
        categoriesList = categoriesList.filter(i => i !== 'alacarte');
    }

    if (cafeBox.checked === false){
        categoriesList = categoriesList.filter(i => i !== 'cafe');
    }

    if (fastfoodBox.checked === false){
        categoriesList = categoriesList.filter(i => i !== 'fastfood');
    }

    if (pubBox.checked === false){
        categoriesList = categoriesList.filter(i => i !== 'pub');
    }


    // Lopuksi palautetaan lopullinen lista halutuista kategorioista.

    console.log(categoriesList)

    return categoriesList;
}








