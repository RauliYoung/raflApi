const makeNavBar = () => {
  const body = document.querySelector("body");
  let video = "Video";
  let elokuvateatterit = "Info";
  let tekijat = "Tekijät";

  const navBar = `<navbar><ul class="nav-bar">
  <li class="nav-bar-list">
    <a href="../index.html" class="list-a">Etusivu </a> 
  </li>
  <li class="nav-bar-list">
      <a href="${elokuvateatterit}" class="list-a">${elokuvateatterit}</a> 
  </li>
  <li class="nav-bar-list">
    <a href="${tekijat}" class="list-a">${tekijat}</a> 
  </li>
  <li class="nav-bar-list-right">
    <a href="${video}" class="list-a">${video}</a> 
  </li>
</ul> </navbar>`;

  body.innerHTML += navBar;
};
