const makeNavBar = () => {
  const body = document.querySelector("body");
  let video = "./video.html";
  let elokuvateatterit = "Info";
  let tekijat = "./info.html";

  const navBar = `<navbar><ul class="nav-bar">
  <li class="nav-bar-list">
    <a href="./index.html"> class="list-a">Etusivu </a> 
  </li>
  <li class="nav-bar-list">
      <a href="${elokuvateatterit}" class="list-a">${elokuvateatterit}</a> 
  </li>
  <li class="nav-bar-list">
    <a href="${tekijat}" class="list-a">Tekijät</a> 
  </li>
  <li class="nav-bar-list-right">
    <a href="${video}" class="list-a">Video</a> 
  </li>
</ul> </navbar>`;

  body.innerHTML += navBar;
};
