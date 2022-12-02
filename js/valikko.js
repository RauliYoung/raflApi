let ul = document.getElementById("restList")
console.log(ul)

let createListItem = (text) => {
    let item = 
    `
    <li> 
        <p>${text}</p> <a href="paska">more info</a> <p> auki tänään: 7:00-16:00 </p>
        <a href="lol"> näytä kartalla </a>
    </li>
    `
    ul.innerHTML += item
}

for (let i=0;i<10;i++){
    createListItem("ravintola " + i)
}

