'use strict';

let categories = document.getElementsByClassName('categoriesButton');

console.log(categories);

let categoriesList = ["restaurants"];

function selectedBtn(){
    for (let i = 0; i < categories.length; i++){
        categoriesList.push(categories[i].name);
    }
    console.log(categoriesList);
}


