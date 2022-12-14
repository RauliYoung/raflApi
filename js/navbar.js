/*
Tekijä: Tristan Ellenberg
Tarkoitus: Luo navigaatiopalkin sivulle.
 */
const makeNavBar = () => {
  const body = document.querySelector("body");
  let video = "./video.html";
  let tekijat = "./info.html";
  let syna = "./pdf/syna.pdf";
  let kassari = "./pdf/kassari.pdf";
  let esittely = "https://prezi.com/view/X6jJbQ85HkzhDeHsisjX/";

  const navBar = `<navbar>
  <ul class="nav-bar">
  <li class="nav-bar-list">
    <a href="./index.html" class="list-a">Etusivu </a> 
  </li>
  <li class="nav-bar-list">
      <a href="${syna}" class="list-a">Synopsis</a> 
  </li>
  <li class="nav-bar-list">
      <a href="${esittely}" class="list-a">Esittely</a> 
  </li>
  <li class="nav-bar-list">
      <a href="${tekijat}" class="list-a">Tekijät</a> 
  </li>
  <li class="nav-bar-list">
  <a href="${kassari}" class="list-a">Käsikirjoitus</a> 
  </li>
  <li class="nav-bar-list-right">
      <a href="${video}" class="list-a">Video</a> 
  </li>
  </ul> 
  </navbar>`;

  body.innerHTML += navBar;
};
