'use strict';

const categories = document.getElementsByClassName('categoriesCheckbox');

function selectedBtn(){
    const alacarteBox = document.getElementById('alacarte');
    const cafeBox = document.getElementById('cafe');
    const fastfoodBox = document.getElementById('fastfood');
    const pubBox = document.getElementById('pub');

    let categoriesList = ['restaurants'];

    for (let i = 0; i < categories.length; i++){
        categoriesList.push(categories[i].name);
    }

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

    console.log(categoriesList);
}








