const ul = document.getElementById("restList")
console.log(ul)

const aukiOlo = (url) => {
    let aukiolo;
    apiCall = url
    fetch(apiCall)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
    console.log(json.detail)
      if (json.detail == "Ei löydy."){
        aukiolo = "not found"
      } else {console.log("Lol")}
    })
    .catch(function (error) {
      console.log(error);
    });
    return aukiOlo;
}

const createListItem = (id, name, latlong, openingHours) => {
    let item = 
    `
    <li> 
        <p>${name}</p> <a href="./resinfo.html?id=${id}">more info</a> <p> auki tänään: ${aukiOlo(openingHours)}</p>
        <a href="lol"> näytä kartalla </a>
    </li>
    `
    ul.innerHTML += item
}



