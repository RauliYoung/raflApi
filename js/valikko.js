"use strict";

const ul = document.getElementById("restList");
let listItems = [];

// muista lisätä try catch
const createListItem = (id, name, latlong, openingHours) => {
  let item = `
        <li> 
            <p>${name}</p> <a href="./resinfo.html?id=${id}"><p>more info</p></a> <a href="lol"><p>show on the map</p></a></p>
           
        </li>
        `;
  if (listItems.length < 5) {
    listItems.push(item);
  } else {
    ul.innerHTML = "";
  }
};

const createNavigation = () => {
  // tänne listan navigoinnin luominen
};

const deleteList = () => {
  ul.innerHTML = "";
};

const showListItems = (showCount) => {
  console.log("es");
  let c = 0;
  for (let i = 0; i < listItems.length; i++) {
    if (c < showCount) {
      ul.innerHTML += listItems[i];
      c++;
    }
  }
};
