"use strict";

const ul = document.getElementById("restList")
const restOfItems = []

const createListItem = (id, name, latlong, openingHours, showCount) => {
    
    let item = `
    <li> 
        <p>${name}</p> <a href="./resinfo.html?id=${id}"><p>more info</p></a> <a href="lol"><p>show on the map</p></a></p>
       
    </li>
    `
    ul.innerHTML += item
}



