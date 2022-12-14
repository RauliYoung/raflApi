// loading.js hoitaa lataus näkymän kartan tilalle
// Tekijät: Joel Tikkanen

let loaderoff = true;

// Aloittaa latauksen
const loadScreen = () => {
  if (loaderoff) {
    let map = document.getElementById("map");
    map.style.height = "0px";
    let loader = document.createElement("div");
    loader.setAttribute("class", "loader");
    map.after(loader);
    map.style.visibility = "hidden";
    loaderoff = false;
  }
};
// Lopettaa latauksen ja palauttaa kaiken ennalleen
const loadScreenFinished = () => {
  let map = document.getElementById("map");
  map.style.visibility = "visible";
  map.style.height = "500px";
  document.getElementsByClassName("loader")[0].remove();
  loaderoff = true;
};
