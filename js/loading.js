// Lataus screen?

let loaderoff = true;


const loadScreen = () => {
    if (loaderoff) {
        console.log("wtf")
        let map = document.getElementById("map")
        map.style.height = "0px"
        let loader = document.createElement("div")
        loader.setAttribute("class", "loader")
        map.after(loader)
        map.style.visibility = "hidden"
        loaderoff = false;
    }
}

const loadScreenFinished = () => {
    let map = document.getElementById("map")
    map.style.visibility = "visible"
    map.style.height = "500px"
    document.getElementsByClassName("loader")[0].remove() 
    loaderoff = true;
}